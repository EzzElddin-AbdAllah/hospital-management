"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Button, Group, Text, Modal } from "@mantine/core";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import NoResSvg from "./NoResSvg";

interface Doctor {
	name: string;
	specialty: string;
	image: string;
	clinic: string;
}

interface Appointment {
	_id: string;
	doctor: Doctor;
	date: string;
	time: string;
}

interface AppointmentsProps {
	showCurrent: boolean;
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

		const timeParts = normalizedTime.match(/(\d+):(\d+)(AM|PM)/);
		if (!timeParts) {
			return false;
		}

		let [, hour, minute, period] = timeParts;
		let intHour = parseInt(hour);
		let intMinute = parseInt(minute);

		if (period === "PM" && intHour < 12) intHour += 12;
		if (period === "AM" && intHour === 12) intHour = 0;

		const appointmentDate = new Date(year, month - 1, day, intHour, intMinute);

		const now = new Date();
		now.setSeconds(0, 0);

		return showCurrent ? appointmentDate >= now : appointmentDate < now;
	});

	const openDeleteConfirmationModal = (id: string) => {
		setSelectedAppointmentId(id);
		openDeleteModal();
	};

	console.log(filteredAppointments);

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

						<Group className="justify-end flex-nowrap pr-3 h-fit">
							<div className="flex flex-col text-right gap-1">
								<Text className="lg:text-xl text-lg font-bold">
									{appointment.doctor.clinic}
								</Text>
								<Text className="text-[#011A77] lg:text-lg text-md">
									{appointment.doctor.name}
								</Text>
								<Text className="text-[#1B77CB] lg:text-lg text-md">
									{appointment.doctor.specialty}
								</Text>

								<Group className="text-gray-500 justify-end gap-1">
									<Text className="text-sm text-black">{appointment.time}</Text>
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
