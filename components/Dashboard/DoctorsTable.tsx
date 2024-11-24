"use client";

import { Doctor, Schedule } from "@/types/Doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Modal,
  Pagination,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { z } from "zod";
import TimeRangePicker from "./TimeRangePicker";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface Props {
  setTotalDoctors: (totalDoctors: number) => void;
}

const timeObjectSchema = z.object({
  _id: z.string(),
  day: z.string(),
  from: z.string(),
  to: z.string(),
});

const certificateSchema = z.object({
  title: z.string().min(1, "Certificate title is required"),
});

const doctorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  clinic: z.string().min(1, "Clinic is required"),
  specialty: z.string().min(1, "Specialty is required"),
  price: z.string().min(1, "Price is required"),
  schedule: z.array(timeObjectSchema),
  certificates: z.array(certificateSchema),
  intro: z.string().min(1, "Intro is required"),
});

type DoctorFormData = z.infer<typeof doctorSchema>;

const formatTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "م" : "ص";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minute.toString().padStart(2, "0")}${period}`;
};

const getFormattedSchedule = (schedule: Schedule[]) => {
  if (!schedule.length) return "لا توجد مواعيد";
  const { from, to } = schedule[0];
  return `${formatTime(from)} - ${formatTime(to)}`;
};

const DoctorsTable = ({ setTotalDoctors }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [
    deleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [
    feedbackModalOpened,
    { open: openFeedbackModal, close: closeFeedbackModal },
  ] = useDisclosure(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [doctorToDelete, setDoctorToDelete] = useState<string | null>(null);
  const [isModalReadOnly, setIsModalReadOnly] = useState<boolean>(false);
  const [activePage, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof Doctor | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DoctorFormData>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: "",
      phone: "",
      clinic: "",
      specialty: "",
      price: "",
      schedule: [],
      certificates: [],
      intro: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificates",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctor");
        const data = await response.json();
        setDoctors(data.doctors);
        setTotalDoctors(data.doctors.length);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleOpenModal = async (doctor?: Doctor) => {
    if (doctor) {
      setSelectedDoctor(doctor);
      reset({
        name: doctor.name,
        clinic: doctor.clinic,
        phone: doctor.phone,
        price: doctor.price.toString(),
        specialty: doctor.specialty,
        schedule: doctor.schedule,
        certificates: doctor.certificates,
        intro: doctor.intro,
      });
    } else {
      setSelectedDoctor(null);
    }
    open();
  };

  const deleteDoctor = async () => {
    if (!doctorToDelete) return;

    try {
      const response = await fetch(`/api/admin/doctor/${doctorToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        setFeedbackMessage(`حدث خطأ: ${error.error}`);
        openFeedbackModal();
        return;
      }

      setDoctors(doctors.filter((doctor) => doctor._id !== doctorToDelete));

      setFeedbackMessage("تم حذف الدكتور بنجاح.");
    } catch (error) {
      setFeedbackMessage("حدث خطأ أثناء محاولة حذف الدكتور.");
    } finally {
      closeDeleteModal();
      openFeedbackModal();
      setDoctorToDelete(null);
    }
  };

  const handleClose = () => {
    setSelectedDoctor(null);
    reset({
      name: "",
      phone: "",
      clinic: "",
      specialty: "",
      price: "",
      schedule: [],
      certificates: [{ title: "" }],
      intro: "",
    });
    close();
    setIsModalReadOnly(false);
  };

  const handleSort = (column: keyof Doctor) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortColumn(column);

    const sorteDoctors = [...doctors].sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setDoctors(sorteDoctors);
  };

  const onSubmit = async (data: DoctorFormData) => {
    const hasEmptyFields = data.schedule.some(
      (times) => times.day === "" || times.from === "" || times.to === "",
    );

    if (hasEmptyFields) {
      setFeedbackMessage("برجاء ادخال مواعيد الدكتور بشكل صحيح");
      openFeedbackModal();
      return;
    }

    try {
      const method = selectedDoctor ? "PATCH" : "POST";
      const endpoint = selectedDoctor
        ? `/api/admin/doctor/${selectedDoctor._id}`
        : "/api/admin/doctor";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setFeedbackMessage(`Error: ${error.message}`);
        openFeedbackModal();
        return;
      }

      const successMessage = selectedDoctor
        ? "تم تحديث بيانات الدكتور بنجاح"
        : "تم اضافة دكتور جديد بنجاح";

      setFeedbackMessage(successMessage);
      openFeedbackModal();
      handleClose();
    } catch (error) {
      setFeedbackMessage("حدث خطأ");
      openFeedbackModal();
    }
  };

  const header = (
    <div className="mb-5 flex flex-nowrap">
      <div className="w-1/12 select-none text-center font-bold text-color-accent-medium">
        الرقم
      </div>
      <div
        onClick={() => handleSort("name")}
        className="w-4/12 cursor-pointer select-none text-center font-bold text-color-accent-medium"
      >
        الاسم{" "}
        {sortColumn === "name" &&
          (sortDirection === "asc" ? (
            <FaArrowUpLong className="inline text-gray-300" />
          ) : (
            <FaArrowDownLong className="inline text-gray-300" />
          ))}
      </div>
      <div className="w-4/12 select-none text-center font-bold text-color-accent-medium">
        المواعيد
      </div>
      <div className="w-3/12 select-none text-center font-bold text-color-accent-medium"></div>
    </div>
  );

  const startIndex = (activePage - 1) * 5;
  const endIndex = startIndex + 5;

  const rows = doctors?.slice(startIndex, endIndex).map((doctor, index) => (
    <div
      key={doctor._id}
      className="flex flex-nowrap rounded-full border-2 border-gray-200 py-2 font-semibold
        text-color-accent-dark"
    >
      <div className="flex w-1/12 items-center justify-center px-2 text-right">
        {index + 1}
      </div>

      <div
        className="-my-2 flex w-4/12 items-center border-x-2 border-color-accent-light px-3
          text-right"
      >
        {doctor.name}
      </div>

      <div className="flex w-4/12 items-center justify-center text-right">
        {getFormattedSchedule(doctor.schedule)}
      </div>

      <div className="ml-3 flex w-3/12 gap-1">
        <Button
          size="xs"
          variant="subtle"
          color="#FF0000"
          className="p-0"
          onClick={() => {
            openDeleteModal();
            setDoctorToDelete(doctor._id);
          }}
        >
          حذف
        </Button>
        <span className="text-color-accent-dark">|</span>
        <Button
          size="xs"
          variant="subtle"
          color="rgb(var(--color-accent-medium))"
          className="p-0"
          onClick={() => handleOpenModal(doctor)}
        >
          تعديل
        </Button>
        <span className="text-color-accent-dark">|</span>
        <Button
          onClick={() => {
            setIsModalReadOnly(true);
            handleOpenModal(doctor);
          }}
          size="xs"
          variant="subtle"
          color="rgb(var(--color-accent-medium))"
          className="p-0"
        >
          عرض
        </Button>
      </div>
    </div>
  ));

  return (
    <Card shadow="sm" radius="md" className="border bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <Text className="text-2xl font-bold text-color-accent-dark">
          الأطباء
        </Text>
        <FaPlus
          color="rgb(var(--color-accent-dark))"
          onClick={() => handleOpenModal()}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        {header}
        {rows}
      </div>

      <Pagination
        total={Math.ceil(doctors?.length / 5)}
        value={activePage}
        onChange={setPage}
        className="mt-4 flex justify-center"
        radius="xl"
      />

      {/* Modal for adding/editing doctor */}
      <Modal
        size={"lg"}
        opened={opened}
        onClose={handleClose}
        title="بيانات الطبيب"
        dir="rtl"
        centered
        closeButtonProps={<IoClose size={25} onClick={handleClose} />}
        classNames={{ close: "text-red-500 font-bold" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <Controller
              name="name"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="الاسم"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <Controller
              name="phone"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="رقم الهاتف"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <Controller
              name="clinic"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="العيادة"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <Controller
              name="specialty"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="التخصص"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <div className="ml4">
              <Stack>
                {fields.map((field, index) => (
                  <Group key={field.id} align="center" className="flex-nowrap">
                    <Controller
                      name={`certificates.${index}.title`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="الشهادات التعليمية"
                          disabled={isModalReadOnly}
                          className="w-full rounded border px-4 py-2"
                        />
                      )}
                    />

                    {!isModalReadOnly && (
                      <ActionIcon
                        color="rgb(var(--color-error))"
                        variant="subtle"
                        onClick={() => remove(index)}
                      >
                        <RiDeleteBin5Fill size={20} />
                      </ActionIcon>
                    )}
                  </Group>
                ))}

                {!isModalReadOnly && (
                  <ActionIcon
                    className="mt-4 flex w-full items-center justify-center"
                    color="rgb(var(--color-accent-dark))"
                    variant="outline"
                    onClick={() => append({ title: "" })}
                  >
                    <FaPlus />
                  </ActionIcon>
                )}
              </Stack>
            </div>

            <Controller
              name="intro"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="معلومات عن الطبيب"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <TimeRangePicker
              timeRangesInput={selectedDoctor?.schedule}
              isModalReadOnly={isModalReadOnly}
              onChange={(timeRanges) => setValue("schedule", timeRanges)}
            />

            <Controller
              name="price"
              disabled={isModalReadOnly}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="سعر الكشف"
                  className="w-full rounded border px-4 py-2"
                />
              )}
            />

            <div className="mt-12 w-full">
              {!isModalReadOnly && (
                <Button
                  type="submit"
                  className="mb-4 w-full rounded-lg bg-[#1D52AF] text-white"
                >
                  حفظ
                </Button>
              )}

              <Button
                variant="outline"
                className="w-full rounded-lg"
                onClick={handleClose}
                color="rgb(var(--color-error))"
              >
                إغلاق
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        dir="rtl"
        opened={feedbackModalOpened}
        onClose={closeFeedbackModal}
        centered
      >
        <Text>{feedbackMessage}</Text>
      </Modal>

      {/* {Delete Modal} */}
      <Modal
        opened={deleteModalOpened}
        onClose={closeDeleteModal}
        title="تأكيد الحذف"
        centered
        dir="rtl"
      >
        <p>هل أنت متأكد أنك تريد حذف هذا الدكتور؟</p>
        <Group mt="md" justify="end">
          <Button variant="default" onClick={closeDeleteModal}>
            إلغاء
          </Button>
          <Button color="rgb(var(--color-error))" onClick={deleteDoctor}>
            حذف
          </Button>
        </Group>
      </Modal>
    </Card>
  );
};

export default DoctorsTable;
