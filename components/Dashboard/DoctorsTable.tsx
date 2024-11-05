"use client";

import { Doctor, Schedule } from "@/types/Doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Group, Modal, Pagination, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { z } from "zod";
import TimeRangePicker from "./TimeRangePicker";

interface Props {
	setTotalDoctors: (totalDoctors: number) => void;
}

const timeObjectSchema = z.object({
	_id: z.string(),
	day: z.string(),
	from: z.string(),
	to: z.string(),
});

const doctorSchema = z.object({
	name: z.string().min(1, "Name is required"),
	phone: z.string().min(1, "Phone is required"),
	clinic: z.string().min(1, "Clinic is required"),
	specialty: z.string().min(1, "Specialty is required"),
	price: z.string().min(1, "Price is required"),
	schedule: z.array(timeObjectSchema),
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
		},
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
			(times) => times.day === "" || times.from === "" || times.to === ""
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
		<div className="flex mb-5 flex-nowrap">
			<div className="w-1/12 text-center font-bold text-[#1B77CB] select-none">
				الرقم
			</div>
			<div
				onClick={() => handleSort("name")}
				className="w-4/12 text-center font-bold text-[#1B77CB] cursor-pointer select-none"
			>
				الاسم{" "}
				{sortColumn === "name" &&
					(sortDirection === "asc" ? (
						<FaArrowUpLong className="inline text-gray-300" />
					) : (
						<FaArrowDownLong className="inline text-gray-300" />
					))}
			</div>
			<div className="w-4/12 text-center font-bold text-[#1B77CB] select-none">
				المواعيد
			</div>
			<div className="w-3/12 text-center font-bold text-[#1B77CB] select-none"></div>
		</div>
	);

	const startIndex = (activePage - 1) * 5;
	const endIndex = startIndex + 5;

	const rows = doctors?.slice(startIndex, endIndex).map((doctor, index) => (
		<div
			key={doctor._id}
			className="flex flex-nowrap rounded-full border-2 border-gray-200 py-2 font-semibold text-[#011A77]"
		>
			<div className="flex items-center justify-center w-1/12 px-2 text-right">
				{index + 1}
			</div>

			<div className="-my-2 flex w-4/12 items-center border-x-2 border-[#6DB5DE] px-3 text-right">
				{doctor.name}
			</div>

			<div className="flex items-center justify-center w-4/12 text-right">
				{getFormattedSchedule(doctor.schedule)}
			</div>

			<div className="flex w-3/12 gap-1 ml-3">
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
				<span className="text-[#011A77]">|</span>
				<Button
					size="xs"
					variant="subtle"
					color="#1B77CB"
					className="p-0"
					onClick={() => handleOpenModal(doctor)}
				>
					تعديل
				</Button>
				<span className="text-[#011A77]">|</span>
				<Button
					onClick={() => {
						setIsModalReadOnly(true);
						handleOpenModal(doctor);
					}}
					size="xs"
					variant="subtle"
					color="#1B77CB"
					className="p-0"
				>
					عرض
				</Button>
			</div>
		</div>
	));

	return (
		<Card shadow="sm" radius="md" className="p-6 bg-white border">
			<div className="flex items-center justify-between mb-4">
				<Text className="text-2xl font-bold text-[#011A77]">الأطباء</Text>
				<FaPlus
					color="#011A77"
					onClick={() => handleOpenModal()}
					className="cursor-pointer"
				/>
			</div>

			<div className="space-y-2">
				{header}
				{rows}
			</div>

			<Pagination
				total={Math.ceil(doctors.length / 5)}
				value={activePage}
				onChange={setPage}
				className="flex justify-center mt-4"
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
									className="w-full px-4 py-2 border rounded"
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
									className="w-full px-4 py-2 border rounded"
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
									className="w-full px-4 py-2 border rounded"
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
									className="w-full px-4 py-2 border rounded"
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
									className="w-full px-4 py-2 border rounded"
								/>
							)}
						/>

						<div className="w-full mt-12">
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
								color="red"
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
					<Button color="red" onClick={deleteDoctor}>
						حذف
					</Button>
				</Group>
			</Modal>
		</Card>
	);
};

export default DoctorsTable;
