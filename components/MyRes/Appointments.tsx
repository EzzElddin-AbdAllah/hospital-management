"use client";

import { Avatar, Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import NoResSvg from "./NoResSvg";
import { Doctor } from "@/types/Doctor";

interface AppointmentsProps {
	showCurrent: boolean;
}

export interface Appointment {
	_id: string;
	doctor: Doctor;
	date: string;
	time: string;
}

const Appointments = ({ showCurrent }: AppointmentsProps) => {
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [selectedAppointmentId, setSelectedAppointmentId] = useState<
		string | null
	>(null);
	const [
		deleteModalOpened,
		{ open: openDeleteModal, close: closeDeleteModal },
	] = useDisclosure(false);
	const [
		feedbackModalOpened,
		{ open: openFeedbackModal, close: closeFeedbackModal },
	] = useDisclosure(false);
	const [feedbackMessage, setFeedbackMessage] = useState<string>("");

	useEffect(() => {
		const fetchAppointments = async () => {
			try {
				const response = await fetch("/api/appointments");
				const data = await response.json();
				setAppointments(data.appointments);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching appointments:", error);
				setLoading(false);
			}
		};

		fetchAppointments();
	}, []);

	const parseArabicTime = (timeString: string) => {
		const normalizedTime = timeString
			.replace("ص", "AM")
			.replace("م", "PM")
			.trim();

		return normalizedTime;
	};

	const filteredAppointments = appointments?.filter((appointment) => {
		const [day, month, year] = appointment.date.split("/").map(Number);

		const normalizedTime = parseArabicTime(appointment.time);

		const timeParts = normalizedTime.match(
			/(\d{1,2})(?::(\d{2}))?(AM|PM|am|pm)/
		);
		if (!timeParts) {
			return false;
		}

		let [, hour, minute, period] = timeParts;
		let intHour = parseInt(hour);
		let intMinute = parseInt(minute) || 0;

		if (period === "PM" && intHour < 12) intHour += 12;
		if (period === "AM" && intHour === 12) intHour = 0;

		const appointmentDate = new Date(year, month - 1, day, intHour, intMinute);

		const now = new Date();
		now.setSeconds(0, 0);

		console.log(appointmentDate);
		console.log(now);

		return showCurrent ? appointmentDate >= now : appointmentDate < now;
	});

	const openDeleteConfirmationModal = (id: string) => {
		setSelectedAppointmentId(id);
		openDeleteModal();
	};

	const handleDelete = async () => {
		if (!selectedAppointmentId) return;

		try {
			const response = await fetch(
				`/api/appointments/${selectedAppointmentId}`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				const error = await response.json();
				setFeedbackMessage(`حدث خطأ: ${error.error}`);
				openFeedbackModal();
				return;
			}

			setAppointments((prevAppointments) =>
				prevAppointments.filter(
					(appointment) => appointment._id !== selectedAppointmentId
				)
			);

			setFeedbackMessage("تم حذف الموعد بنجاح.");
		} catch (error) {
			setFeedbackMessage("حدث خطأ أثناء محاولة حذف الموعد.");
		} finally {
			closeDeleteModal();
			openFeedbackModal();
			setSelectedAppointmentId(null);
		}
	};

	if (loading) {
		return <p className="text-center">جاري التحميل...</p>;
	}

	return (
		<div className={`w-full space-y-6 ${showCurrent ? "mb-20 mt-8 px-4" : ""}`}>
			{filteredAppointments?.length ? (
				filteredAppointments.map((appointment) => (
					<div
						dir="ltr"
						key={appointment._id}
						className={` ${
							showCurrent ? "" : "flex-row-reverse"
						} lg:py-4 rounded-3xl shadow-lg border bg-white lg:min-h-[250px] min-h-[200px] px-2 sm:px-4 flex justify-between items-center`}
					>
						{showCurrent && (
							<Button
								className="place-self-end lg:ml-9 mb-9 text-[#F10005] text-sm hover:text-red-700"
								variant="transparent"
								onClick={() => openDeleteConfirmationModal(appointment._id)}
							>
								<span className="hidden lg:inline">حذف</span>
								<RiDeleteBin5Fill className="inline" />
							</Button>
						)}

						<Group className="justify-end pr-3 flex-nowrap h-fit">
							<div className="flex flex-col gap-1 text-right">
								<Text className="text-lg font-bold lg:text-xl">
									{appointment.doctor.clinic}
								</Text>
								<Text className="text-[#011A77] lg:text-lg text-md">
									{appointment.doctor.name}
								</Text>
								<Text className="text-[#1B77CB] lg:text-lg text-md">
									{appointment.doctor.specialty}
								</Text>

								<Group className="justify-end gap-1 text-gray-500">
									<Text dir="rtl" className="text-sm text-black">
										{appointment.time}
									</Text>
									<Text className="text-sm text-black">{appointment.date}</Text>
									<span role="img" aria-label="calendar">
										📅
									</span>
								</Group>
							</div>

							<Avatar
								src={appointment.doctor.image}
								alt="Doctor"
								size={100}
								className={`object-contain sm:w-[150px] sm:h-[150px] ${
									showCurrent ? "" : "hidden lg:block"
								}`}
							/>
						</Group>
					</div>
				))
			) : showCurrent ? (
				<NoResSvg small={false} />
			) : (
				<NoResSvg small={true} />
			)}

			<Modal
				opened={deleteModalOpened}
				onClose={closeDeleteModal}
				title="تأكيد الحذف"
				centered
				dir="rtl"
			>
				<p>هل أنت متأكد أنك تريد حذف هذا الموعد؟</p>
				<Group mt="md" justify="end">
					<Button variant="default" onClick={closeDeleteModal}>
						إلغاء
					</Button>
					<Button color="red" onClick={handleDelete}>
						حذف
					</Button>
				</Group>
			</Modal>

			<Modal
				opened={feedbackModalOpened}
				onClose={closeFeedbackModal}
				title="تنبيه"
				centered
				dir="rtl"
			>
				<p>{feedbackMessage}</p>
				<Group justify="end" mt="md">
					<Button onClick={closeFeedbackModal}>موافق</Button>
				</Group>
			</Modal>
		</div>
	);
};

export default Appointments;
