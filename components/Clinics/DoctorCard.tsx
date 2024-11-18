"use client";

import { Doctor } from "@/types/Doctor";
import {
  Avatar,
  Badge,
  Button,
  Group,
  Modal,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";
import { MdArrowBackIos } from "react-icons/md";

const arabicDays = {
  sunday: "الأحد",
  monday: "الاثنين",
  tuesday: "الثلاثاء",
  wednesday: "الأربعاء",
  thursday: "الخميس",
  friday: "الجمعة",
  saturday: "السبت",
};

const getNextDateForDay = (targetDay: string) => {
  const dayMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const today = new Date();
  const todayDay = today.getDay();
  const targetDayNum = dayMap[targetDay.toLowerCase() as keyof typeof dayMap];

  let daysUntilTarget = targetDayNum - todayDay;
  if (daysUntilTarget < 0) {
    daysUntilTarget += 7;
  }

  const targetDate = new Date();
  targetDate.setDate(today.getDate() + daysUntilTarget);

  const formattedDate = targetDate.toLocaleDateString("en-GB");

  return formattedDate;
};

const DoctorCard = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDayName, setSelectedDayName] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const currentDoctor = doctors[currentDoctorIndex];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctor");
        const data = await response.json();
        if (response.ok) {
          setDoctors(data.doctors);
        } else {
          console.error("Failed to load doctors");
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handlePrevDoctor = () => {
    if (currentDoctorIndex > 0) {
      setCurrentDoctorIndex(currentDoctorIndex - 1);
    }
  };

  const handleNextDoctor = () => {
    if (currentDoctorIndex < doctors.length - 1) {
      setCurrentDoctorIndex(currentDoctorIndex + 1);
    }
  };

  const handleOpenConfirmationModal = (
    dayname: string,
    date: string,
    time: string,
  ) => {
    setSelectedDayName(dayname);
    setSelectedDate(date);
    setSelectedTime(time);
    setConfirmationModalOpen(true);
  };

  const formatHour = (hour: number) => {
    const period = hour < 12 ? "ص" : "م";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}${period}`;
  };

  const handleBookAppointment = async () => {
    setConfirmationModalOpen(false);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: currentDoctor._id,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      if (response.status === 401) {
        window.location.href = "/res";
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        setResultMessage(data.error || "فشل في حجز الموعد.");
      } else {
        setResultMessage("تم حجز الموعد بنجاح.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setResultMessage("حدث خطأ أثناء حجز الموعد.");
    } finally {
      setResultModalOpen(true);
    }
  };

  if (loading) {
    return <p className="text-center">جاري التحميل...</p>;
  }

  if (!currentDoctor) {
    return <p className="text-center">لا يوجد أطباء متاحين.</p>;
  }

  return (
    <div>
      <Title order={2} className="mr-24 mt-10 text-right text-4xl font-bold">
        أطباء العيادات
      </Title>

      {/* Confirmation Modal */}
      <Modal
        dir="rtl"
        opened={confirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        title="تأكيد الحجز"
        centered
      >
        <Text>
          هل تريد تأكيد حجز موعدك مع الدكتور {currentDoctor?.name} في يوم{" "}
          {arabicDays[selectedDayName as keyof typeof arabicDays]}{" "}
          {selectedDate} الساعة {selectedTime}؟
        </Text>
        <Group mt="md" justify="end">
          <Button onClick={handleBookAppointment}>تأكيد</Button>
          <Button
            variant="outline"
            onClick={() => setConfirmationModalOpen(false)}
          >
            إلغاء
          </Button>
        </Group>
      </Modal>

      {/* Result Modal */}
      <Modal
        dir="rtl"
        opened={resultModalOpen}
        onClose={() => setResultModalOpen(false)}
        title="نتيجة الحجز"
        centered
      >
        <Text>{resultMessage}</Text>
        <Group mt="md" justify="end">
          <Button onClick={() => setResultModalOpen(false)}>إغلاق</Button>
        </Group>
      </Modal>

      <div
        dir="rtl"
        className="mx-5 mb-60 mt-20 grid grid-cols-1 rounded-[44px] bg-white py-10 shadow-lg
          lg:grid-cols-2 lg:px-6 lg:py-28 xl:mx-32 xl:px-10"
      >
        <div className="mt-10 flex flex-col items-center text-center lg:flex-row lg:gap-10 lg:text-right">
          <Avatar
            src={currentDoctor.image}
            alt="Doctor"
            size={150}
            className="mb-5 object-contain lg:mb-20 lg:mr-2 lg:self-start"
          />

          <div dir="ltr" className="lg:self-start">
            <Title order={2} className="mb-4 text-3xl font-bold lg:text-4xl">
              {currentDoctor.name}
            </Title>
            <div>
              <div className="mx-5 lg:mx-auto">
                <Text className="mb-4 flex items-center justify-end text-xl text-color-accent-medium lg:text-2xl">
                  {currentDoctor.specialty}
                  <GiStethoscope
                    size={24}
                    className="ml-2 scale-x-[-1] text-gray-700"
                  />
                </Text>
                <Text className="mb-4 flex items-center justify-end text-xl text-color-accent-medium lg:text-2xl">
                  الكشفية: {currentDoctor.price}
                  <FcMoneyTransfer size={24} className="ml-2" />
                </Text>
              </div>
              <Stack className="items-center lg:mr-7 lg:items-end">
                <Rating
                  value={currentDoctor.rating}
                  fractions={2}
                  readOnly
                  size={25}
                  className="scale-x-[-1]"
                />
                <Text className="-mt-2 text-lg lg:text-2xl">
                  التقييم العام من {currentDoctor.totalReviews} زاروا الدكتور
                </Text>
              </Stack>
            </div>
          </div>
        </div>

        <div className="flex flex-nowrap items-center justify-center">
          <div className="ml-auto">
            <MdArrowBackIos
              className={`rotate-180 cursor-pointer bg-transparent text-gray-500
                ${currentDoctorIndex < doctors.length - 1 ? "visible" : "invisible"}`}
              size={24}
              style={{ width: 55, height: 55 }}
              onClick={handleNextDoctor}
            />
          </div>

          <div className="">
            <Title
              order={3}
              className="mb-8 mt-5 text-center text-2xl font-bold lg:mt-0 lg:text-4xl"
            >
              احجز موعدك
            </Title>
            <div
              className={`grid justify-self-center
                grid-cols-${currentDoctor.schedule.length > 3 ? 3 : currentDoctor.schedule.length}
                -ml-3 mb-4 gap-4 lg:-ml-0 lg:gap-20`}
            >
              {currentDoctor.schedule.slice(0, 3).map((daySchedule, index) => {
                const { day, from, to } = daySchedule;
                const arabicDay = arabicDays[day as keyof typeof arabicDays];
                const startHour = parseInt(from.split(":")[0], 10);
                const endHour = parseInt(to.split(":")[0], 10);
                const hours = Array.from(
                  { length: endHour - startHour },
                  (_, i) => startHour + i,
                );

                return (
                  <div
                    key={daySchedule._id}
                    className="flex flex-col items-end gap-4"
                  >
                    <Badge
                      className="mb-2 h-10 w-24 rounded-lg bg-color-accent-light text-center text-base
                        font-medium text-black"
                    >
                      <span>{arabicDay}</span>
                    </Badge>
                    {hours.map((hour) => (
                      <Button
                        key={hour}
                        variant="filled"
                        color="#ebedf0"
                        className="mb-2 h-fit w-24 rounded-lg text-base text-black"
                        dir="rtl"
                        onClick={() =>
                          handleOpenConfirmationModal(
                            day,
                            getNextDateForDay(day),
                            `${formatHour(hour)}`,
                          )
                        }
                      >
                        {formatHour(hour)}
                      </Button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mr-auto">
            <MdArrowBackIos
              className={`cursor-pointer bg-transparent text-gray-500
                ${currentDoctorIndex > 0 ? "visible" : "invisible"}`}
              size={24}
              style={{ width: 55, height: 55 }}
              onClick={handlePrevDoctor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
