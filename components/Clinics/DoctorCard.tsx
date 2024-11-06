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
		time: string
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
				window.location.href = "/auth/signin";
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
			<Title order={2} className="mt-10 mr-24 text-4xl font-bold text-right">
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

			{/* <div className="bg-white lg:px-10 py-10 lg:py-28 rounded-[44px] mt-20 mb-60 mx-5 lg:mx-32 shadow-lg flex lg:flex-row flex-col-reverse justify-between items-center"> */}
			<div
				dir="rtl"
				className="bg-white lg:px-10 py-10 lg:py-28 rounded-[44px] mt-20 mb-60 mx-5 lg:mx-32 shadow-lg grid grid-cols-1 lg:grid-cols-2"
			>
				<div className="flex flex-col items-center mt-10 text-center lg:flex-row lg:gap-10 lg:text-right">
					<Avatar
						src={currentDoctor.image}
						alt="Doctor"
						size={150}
						className="object-contain mb-5 lg:mb-20 lg:mr-2 lg:self-start"
					/>

					<div dir="ltr" className="lg:self-start">
						<Title order={2} className="mb-4 text-3xl font-bold lg:text-4xl">
							{currentDoctor.name}
						</Title>
						<div>
							<div className="mx-5 lg:mx-auto">
								<Text className="text-[#1B77CB] text-xl lg:text-2xl flex items-center justify-end mb-4">
									{currentDoctor.specialty}
									<GiStethoscope
										size={24}
										className="ml-2 text-gray-700 scale-x-[-1]"
									/>
								</Text>
								<Text className="text-xl lg:text-2xl flex items-center justify-end text-[#1B77CB] mb-4">
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

				<div className="flex items-center justify-center flex-nowrap">
					<div className="ml-auto">
						<MdArrowBackIos
							className={`text-gray-500 rotate-180 bg-transparent cursor-pointer ${currentDoctorIndex < doctors.length - 1 ? "visible" : "invisible"}`}
							size={24}
							style={{ width: 55, height: 55 }}
							onClick={handleNextDoctor}
						/>
					</div>

					<div className="">
						<Title
							order={3}
							className="mt-5 mb-8 text-2xl font-bold text-center lg:text-4xl lg:mt-0"
						>
							احجز موعدك
						</Title>
						<div
							className={`grid justify-self-center grid-cols-${currentDoctor.schedule.length > 3 ? 3 : currentDoctor.schedule.length} gap-4 mb-4 -ml-3 lg:-ml-0 lg:gap-20`}
						>
							{currentDoctor.schedule.slice(0, 3).map((daySchedule, index) => {
								const { day, from, to } = daySchedule;
								const arabicDay = arabicDays[day as keyof typeof arabicDays];
								const startHour = parseInt(from.split(":")[0], 10);
								const endHour = parseInt(to.split(":")[0], 10);
								const hours = Array.from(
									{ length: endHour - startHour },
									(_, i) => startHour + i
								);

								return (
									<div
										key={daySchedule._id}
										className="flex flex-col items-end gap-4"
									>
										<Badge className="bg-[#6db5de] text-center text-base rounded-lg mb-2 text-black h-10 w-24 font-medium">
											<span>{arabicDay}</span>
										</Badge>
										{hours.map((hour) => (
											<Button
												key={hour}
												variant="filled"
												color="#ebedf0"
												className="w-24 mb-2 text-base text-black rounded-lg h-fit"
												dir="rtl"
												onClick={() =>
													handleOpenConfirmationModal(
														day,
														getNextDateForDay(day),
														`${formatHour(hour)}`
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
							className={`text-gray-500 bg-transparent cursor-pointer ${currentDoctorIndex > 0 ? "visible" : "invisible"}`}
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
