"use client";

import { Button, Card, Modal, Pagination, Select, Text } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import CalendarDemo from "./calendar-demo";

interface Props {
  setTotalappointments: (totalappointments: number) => void;
  setAppointmentsToday: (appointmentsToday: number) => void;
}

interface Appointment {
  id: number;
  DoctorName: string;
  PatientName: string;
  clinic: string;
  appointment: string;
  date: string;
  price: string;
}

const ResTable = ({ setTotalappointments, setAppointmentsToday }: Props) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof Appointment | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [selectedClinic, setSelectedClinic] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const [calendarDays, setCalendarDays] = useState<Date[] | undefined>([]);

  const uniqueClinics = Array.from(new Set(appointments?.map((a) => a.clinic)));
  const uniqueDoctors = Array.from(
    new Set(appointments?.map((a) => a.DoctorName)),
  );

  const isToday = (dateString: string) => {
    const today = new Date();
    const [day, month, year] = dateString.split("/").map(Number);
    const appointmentDate = new Date(year, month - 1, day);

    return (
      appointmentDate.getDate() === today.getDate() &&
      appointmentDate.getMonth() === today.getMonth() &&
      appointmentDate.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/admin/appointments");
        const data = await response.json();
        setAppointments(data.appointments);
        setFilteredAppointments(data.appointments);
        setTotalappointments(data.appointments.length);
        setAppointmentsToday(
          data.appointments?.filter((appointment: Appointment) =>
            isToday(appointment.date),
          ).length,
        );
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [calendarDays]);

  const handleSearch = () => {
    const filtered = appointments.filter((appointment) => {
      let [day, month, year] = appointment.date.split("/").map(Number);
      let date = new Date(year, month - 1, day);
      date.setHours(0, 0, 0, 0);

      const clinicMatches =
        !selectedClinic || appointment.clinic === selectedClinic;
      const doctorMatches =
        !selectedDoctor || appointment.DoctorName === selectedDoctor;
      const dateMatches =
        (!fromDate || fromDate <= date) && (!toDate || date <= toDate);
      const calendarMatch = calendarDays?.some((calendarDay) => {
        const calDay = new Date(calendarDay);
        calDay.setHours(0, 0, 0, 0);
        return calDay.getTime() === date.getTime();
      });

      if (
        !selectedClinic &&
        !selectedDoctor &&
        !fromDate &&
        !toDate &&
        !calendarDays?.length
      ) {
        return true;
      }

      return (
        clinicMatches &&
        doctorMatches &&
        dateMatches &&
        (!calendarDays?.length || calendarMatch)
      );
    });

    setFilteredAppointments(filtered);
    setPage(1);
    close();
  };

  const handleSort = (column: keyof Appointment) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortColumn(column);

    const sortedAppointments = [...filteredAppointments].sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      if (column === "appointment") {
        const convertTo24Hour = (time: string) => {
          const period = time.slice(-1);
          const [hour, minute] = time.slice(0, -1).split(":").map(Number);
          let newHour = hour + (period === "م" && hour !== 12 ? 12 : 0);
          if (period === "ص" && hour === 12) newHour = 0;
          return newHour * 60 + (minute || 0);
        };
        aValue = convertTo24Hour(a.appointment);
        bValue = convertTo24Hour(b.appointment);
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredAppointments(sortedAppointments);
  };

  const header = (
    <div className="mb-5 flex flex-nowrap">
      <div className="w-1/12 select-none text-center font-bold text-color-accent-medium">
        الرقم
      </div>
      <div
        className="w-2/12 cursor-pointer select-none text-center font-bold text-color-accent-medium"
        onClick={() => handleSort("PatientName")}
      >
        الاسم{" "}
        {sortColumn === "PatientName" &&
          (sortDirection === "asc" ? (
            <FaArrowUpLong className="inline text-gray-300" />
          ) : (
            <FaArrowDownLong className="inline text-gray-300" />
          ))}
      </div>
      <div
        className="w-3/12 cursor-pointer select-none text-center font-bold text-color-accent-medium"
        onClick={() => handleSort("clinic")}
      >
        العيادة{" "}
        {sortColumn === "clinic" &&
          (sortDirection === "asc" ? (
            <FaArrowUpLong className="inline text-gray-300" />
          ) : (
            <FaArrowDownLong className="inline text-gray-300" />
          ))}
      </div>
      <div
        className="w-2/12 cursor-pointer select-none text-center font-bold text-color-accent-medium"
        onClick={() => handleSort("DoctorName")}
      >
        الدكتور{" "}
        {sortColumn === "DoctorName" &&
          (sortDirection === "asc" ? (
            <FaArrowUpLong className="inline text-gray-300" />
          ) : (
            <FaArrowDownLong className="inline text-gray-300" />
          ))}
      </div>
      <div
        className="w-2/12 cursor-pointer select-none text-center font-bold text-color-accent-medium"
        onClick={() => handleSort("appointment")}
      >
        المعاد{" "}
        {sortColumn === "appointment" &&
          (sortDirection === "asc" ? (
            <FaArrowUpLong className="inline text-gray-300" />
          ) : (
            <FaArrowDownLong className="inline text-gray-300" />
          ))}
      </div>
      <div className="w-2/12 select-none text-center font-bold text-color-accent-medium">
        سعر الكشف
      </div>
    </div>
  );

  const startIndex = (activePage - 1) * 5;
  const endIndex = startIndex + 5;

  const rows = filteredAppointments
    ?.slice(startIndex, endIndex)
    .map((appointment, index) => (
      <div
        key={appointment.id}
        className="flex flex-nowrap rounded-full border-2 border-gray-200 py-2 font-semibold
          text-color-accent-dark"
      >
        <div className="-my-2 w-1/12 self-center px-5 text-right">
          {index + 1}
        </div>
        <div className="-my-2 flex w-2/12 items-center border-r-2 border-color-accent-light px-2">
          {appointment.PatientName}
        </div>
        <div
          className="-my-2 flex w-3/12 items-center justify-center border-x-2
            border-color-accent-light px-2 text-right"
        >
          {appointment.clinic}
        </div>
        <div className="flex w-2/12 items-center px-2 text-right">
          {appointment.DoctorName}
        </div>
        <div
          className="-my-2 flex w-2/12 items-center justify-center border-x-2
            border-color-accent-light text-right"
        >
          {appointment.appointment}
        </div>
        <div className="flex w-2/12 items-center justify-center text-right">
          {appointment.price} ريال
        </div>
      </div>
    ));

  return (
    <Card shadow="sm" radius="md" className="border bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <Text className="text-2xl font-bold text-color-accent-dark">
          الحجوزات
        </Text>
        <VscSettings
          color="rgb(var(--color-accent-dark))"
          size={25}
          onClick={open}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        {header}
        {rows}
      </div>

      <Pagination
        total={Math.ceil(filteredAppointments?.length / 5)}
        value={activePage}
        onChange={setPage}
        className="my-8 flex justify-center"
        radius="xl"
      />

      <div className="flex w-full justify-center rounded-lg border-2 border-color-accent-light">
        <CalendarDemo setCalendarDays={setCalendarDays} />
      </div>

      <Modal
        dir="rtl"
        opened={opened}
        onClose={close}
        centered
        size="lg"
        title=""
        padding="lg"
        closeButtonProps={<IoClose size={25} onClick={close} />}
        classNames={{ close: "text-red-500 font-bold" }}
      >
        <div className="relative">
          {/* Form inside the modal */}
          <div className="flex flex-col space-y-8">
            <Select
              dir="rtl"
              placeholder="العيادة"
              data={uniqueClinics}
              value={selectedClinic}
              onChange={setSelectedClinic}
              clearable
              className="w-full rounded-md font-bold"
              classNames={{
                input:
                  "placeholder:text-color-accent-dark text-color-accent-dark font-bold",
              }}
              styles={{
                dropdown: { direction: "rtl" },
              }}
            />
            <Select
              placeholder="الدكتور"
              data={uniqueDoctors}
              value={selectedDoctor}
              onChange={setSelectedDoctor}
              clearable
              className="w-full rounded-md font-bold"
              classNames={{
                input:
                  "placeholder:text-color-accent-dark text-color-accent-dark font-bold",
              }}
              styles={{
                dropdown: { direction: "rtl" },
              }}
            />
            <div className="flex justify-between">
              <DateInput
                clearable
                valueFormat="YYYY/MM/DD"
                value={fromDate}
                onChange={setFromDate}
                placeholder="تاريخ من"
                rightSection={
                  !fromDate && (
                    <IoMdArrowDropdown
                      color="rgb(var(--color-accent-dark))"
                      size={20}
                    />
                  )
                }
                classNames={{
                  input:
                    "placeholder:text-color-accent-dark text-color-accent-dark font-bold",
                }}
              />
              <DateInput
                clearable
                valueFormat="YYYY/MM/DD"
                value={toDate}
                onChange={setToDate}
                placeholder="تاريخ الى"
                rightSection={
                  !toDate && (
                    <IoMdArrowDropdown
                      color="rgb(var(--color-accent-dark))"
                      size={20}
                    />
                  )
                }
                classNames={{
                  input:
                    "placeholder:text-color-accent-dark text-color-accent-dark font-bold",
                }}
              />
            </div>
          </div>

          <div className="mt-12 w-full">
            <Button
              onClick={handleSearch}
              className="mb-4 w-full rounded-lg bg-[#1D52AF] text-white"
            >
              بحث
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-lg"
              onClick={close}
              color="rgb(var(--color-error))"
            >
              إغلاق
            </Button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default ResTable;
