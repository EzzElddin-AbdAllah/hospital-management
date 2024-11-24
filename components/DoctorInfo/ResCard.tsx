"use client";

import { Schedule } from "@/types/Doctor";
import { Badge, Button, Group, Modal, Text, Title } from "@mantine/core";
import { useState } from "react";
import {
  arabicDays,
  formatHour,
  getNextDateForDay,
} from "../Clinics/DoctorCard";

interface Props {
  _id?: string;
  name?: string;
  schedule?: Schedule[];
}

const ResCard = ({ _id, name, schedule }: Props) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDayName, setSelectedDayName] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState<string>("");

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

  const handleBookAppointment = async () => {
    setConfirmationModalOpen(false);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: _id,
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

  return (
    <div
      className="mx-5 mb-32 flex items-center justify-center rounded-[44px] bg-white py-7
        lg:mx-10"
      style={{
        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="mb-10">
        <Title
          order={3}
          className="mb-4 text-center text-3xl font-bold lg:text-4xl"
        >
          احجز موعدك
        </Title>
        <Text className="mx-5 mb-10 text-center text-xl text-color-accent-medium lg:text-2xl">
          احجز اونلاين برقم الهاتف، وبدون الحاجه للتسجيل
        </Text>

        <div className="flex flex-nowrap items-center justify-center">
          <div className="">
            <div
              className={`grid justify-self-center
                grid-cols-${schedule?.length! > 3 ? 3 : schedule?.length} -ml-3 mb-4 gap-4
                lg:-ml-0 lg:gap-20`}
            >
              {schedule?.slice(0, 3).map((daySchedule, index) => {
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
        </div>

        {/* Confirmation Modal */}
        <Modal
          dir="rtl"
          opened={confirmationModalOpen}
          onClose={() => setConfirmationModalOpen(false)}
          title="تأكيد الحجز"
          centered
        >
          <Text>
            هل تريد تأكيد حجز موعدك مع الدكتور {name} في يوم{" "}
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
      </div>
    </div>
  );
};

export default ResCard;
