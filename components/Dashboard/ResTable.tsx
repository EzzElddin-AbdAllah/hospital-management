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
		new Set(appointments?.map((a) => a.DoctorName))
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
						isToday(appointment.date)
					).length
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
		<div className="flex mb-5 flex-nowrap">
			<div className="w-1/12 text-center font-bold text-[#1B77CB] select-none">
				الرقم
			</div>
			<div
				className="w-2/12 text-center font-bold text-[#1B77CB] cursor-pointer select-none"
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
				className="w-3/12 text-center font-bold text-[#1B77CB] cursor-pointer select-none"
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
				className="w-2/12 text-center font-bold text-[#1B77CB] cursor-pointer select-none"
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
				className="w-2/12 text-center font-bold text-[#1B77CB] cursor-pointer select-none"
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
			<div className="w-2/12 text-center font-bold text-[#1B77CB] select-none">
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
				className="text-[#011A77] font-semibold border-2 py-2 border-gray-200 rounded-full flex flex-nowrap"
			>
				<div className="self-center w-1/12 px-5 -my-2 text-right">
					{index + 1}
				</div>
				<div className="w-2/12 border-r-2 border-[#6DB5DE] px-2 flex items-center -my-2">
					{appointment.PatientName}
				</div>
				<div className="w-3/12 text-right border-x-2 border-[#6DB5DE] px-2 flex items-center justify-center -my-2">
					{appointment.clinic}
				</div>
				<div className="flex items-center w-2/12 px-2 text-right">
					{appointment.DoctorName}
				</div>
				<div className="w-2/12 text-right border-x-2 border-[#6DB5DE] flex items-center justify-center -my-2">
					{appointment.appointment}
				</div>
				<div className="flex items-center justify-center w-2/12 text-right">
					{appointment.price} ريال
				</div>
			</div>
		));

	return (
		<Card shadow="sm" radius="md" className="p-6 bg-white border">
			<div className="flex items-center justify-between mb-4">
				<Text className="text-[#011A77] text-2xl font-bold">الحجوزات</Text>
				<VscSettings
					color="#011A77"
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
				className="flex justify-center my-8"
				radius="xl"
			/>

			<div className="flex justify-center border-[#6DB5DE] border-2 rounded-lg w-full">
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
							className="w-full font-bold rounded-md "
							classNames={{
								input: "placeholder:text-[#011A77] text-[#011A77] font-bold",
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
							className="w-full font-bold rounded-md"
							classNames={{
								input: "placeholder:text-[#011A77] text-[#011A77] font-bold",
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
									!fromDate && <IoMdArrowDropdown color="#011A77" size={20} />
								}
								classNames={{
									input: "placeholder:text-[#011A77] text-[#011A77] font-bold",
								}}
							/>
							<DateInput
								clearable
								valueFormat="YYYY/MM/DD"
								value={toDate}
								onChange={setToDate}
								placeholder="تاريخ الى"
								rightSection={
									!toDate && <IoMdArrowDropdown color="#011A77" size={20} />
								}
								classNames={{
									input: "placeholder:text-[#011A77] text-[#011A77] font-bold",
								}}
							/>
						</div>
					</div>

					<div className="w-full mt-12">
						<Button
							onClick={handleSearch}
							className="bg-[#1D52AF] text-white w-full rounded-lg mb-4"
						>
							بحث
						</Button>
						<Button
							variant="outline"
							className="w-full rounded-lg"
							onClick={close}
							color="red"
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
