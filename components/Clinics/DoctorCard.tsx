"use client";

import {
	Avatar,
	Badge,
	Button,
	Rating,
	Stack,
	Text,
	Title,
	Modal,
	Group,
} from "@mantine/core";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";

interface Doctor {
	_id: string;
	name: string;
	specialty: string;
	price: string;
	rating: number;
	totalReviews: number;
	image: string;
	schedule: {
		day: string;
		date: string;
		times: string[];
	}[];
}

const DoctorCard = () => {
	const [doctors, setDoctors] = useState<Doctor[]>([]);
	const [currentDoctorIndex, setCurrentDoctorIndex] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
	const [resultModalOpen, setResultModalOpen] = useState(false);
	const [resultMessage, setResultMessage] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<string>("");
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

	// Navigation functions
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

	const handleOpenConfirmationModal = (date: string, time: string) => {
		setSelectedDate(date);
		setSelectedTime(time);
		setConfirmationModalOpen(true);
	};

	const handleBookAppointment = async () => {
		setConfirmationModalOpen(false); // Close confirmation modal
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
			setResultModalOpen(true); // Show result modal
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
			<Title order={2} className="text-right text-4xl font-bold mr-24 mt-10">
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
					هل تريد تأكيد حجز موعدك مع الدكتور {currentDoctor?.name} في{" "}
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

			<div className="bg-white lg:px-10 py-10 lg:py-28 rounded-[44px] mt-20 mb-60 mx-5 lg:mx-32 shadow-lg flex lg:flex-row flex-col-reverse justify-between items-center">
				{currentDoctorIndex > 0 ? (
					<MdArrowBackIos
						className="bg-transparent text-gray-500 cursor-pointer"
						size={24}
						style={{ width: 55, height: 55 }}
						onClick={handlePrevDoctor}
					/>
				) : (
					<MdArrowBackIos
						className="text-white"
						size={24}
						style={{ width: 55, height: 55 }}
						onClick={handlePrevDoctor}
					/>
				)}

				<div className="flex-1">
					<Title
						order={3}
						className="text-2xl lg:text-4xl font-bold mt-5 lg:mt-0 mb-8 text-center"
					>
						احجز موعدك
					</Title>

					<div className="grid grid-cols-3 gap-4 mb-4">
						{currentDoctor.schedule.map((daySchedule, index) => {
							const currentYear = new Date().getFullYear();
							const formattedDate = `${daySchedule.date}/${currentYear}`;

							return (
								<div key={index} className="flex flex-col items-center gap-4">
									<Badge className="bg-[#6db5de] text-center text-base pl-8 rounded-lg mb-2 text-black h-10 w-24 leading-none font-medium">
										<span>{daySchedule.day}</span>
										<br />
										<span>{daySchedule.date}</span>
									</Badge>
									{daySchedule.times.map((time, timeIndex) => (
										<Button
											key={timeIndex}
											variant="filled"
											color="#ebedf0"
											className="mb-2 text-base text-black w-24 h-fit rounded-lg"
											dir="rtl"
											onClick={() =>
												handleOpenConfirmationModal(formattedDate, time)
											}
										>
											{time}
										</Button>
									))}
								</div>
							);
						})}
					</div>
				</div>

				{currentDoctorIndex < doctors.length - 1 ? (
					<MdArrowForwardIos
						className="bg-transparent text-gray-500 cursor-pointer"
						size={24}
						style={{ width: 55, height: 55 }}
						onClick={handleNextDoctor}
					/>
				) : (
					<MdArrowForwardIos
						className="text-white"
						size={24}
						style={{ width: 55, height: 55 }}
						onClick={handleNextDoctor}
					/>
				)}

				<div className="flex-1 text-center lg:text-right mr-5 -mt-14">
					<Title order={2} className="text-3xl lg:text-4xl font-bold mb-4">
						{currentDoctor.name}
					</Title>

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

					<Stack className="lg:mr-7 lg:items-end items-center">
						<Rating
							value={currentDoctor.rating}
							fractions={2}
							readOnly
							size={25}
							className="scale-x-[-1]"
						/>
						<Text className="text-xl lg:text-2xl -mt-2">
							التقييم العام من {currentDoctor.totalReviews} زاروا الدكتور
						</Text>
					</Stack>
				</div>

				<Avatar
					src={currentDoctor.image}
					alt="Doctor"
					size={150}
					className="object-contain lg:self-start mb-20 lg:mt-10"
				/>
			</div>
		</div>
	);
};

export default DoctorCard;
