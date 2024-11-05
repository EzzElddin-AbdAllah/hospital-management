"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ar } from "date-fns/locale";
import { useState } from "react";

interface Props {
	setCalendarDays: (selectedDays: Date[] | undefined) => void;
}

export default function CalendarDemo({ setCalendarDays }: Props) {
	const [selectedDays, setSelectedDays] = useState<Date[] | undefined>([]);
	const [month, setMonth] = useState<Date>(new Date());

	const years = Array.from(
		{ length: 10 },
		(_, i) => new Date().getFullYear() - 5 + i
	);
	const months = [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر",
	];

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between mx-4 mb-4">
				<Select
					value={month.getMonth().toString()}
					onValueChange={(monthIndex) =>
						setMonth(new Date(month.getFullYear(), parseInt(monthIndex)))
					}
				>
					<SelectTrigger className="w-[120px]">
						<SelectValue placeholder="الشهر" />
					</SelectTrigger>
					<SelectContent>
						{months.map((monthName, index) => (
							<SelectItem key={index} value={index.toString()}>
								{monthName}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select
					value={month.getFullYear().toString()}
					onValueChange={(year) =>
						setMonth(new Date(parseInt(year), month.getMonth()))
					}
				>
					<SelectTrigger className="w-[120px]">
						<SelectValue placeholder="السنة" />
					</SelectTrigger>
					<SelectContent>
						{years.map((year) => (
							<SelectItem key={year} value={year.toString()}>
								{year}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<Calendar
				mode="multiple"
				selected={selectedDays}
				onSelect={(days) => {
					setSelectedDays(days);
					setCalendarDays(days);
				}}
				locale={ar}
				month={month}
				onMonthChange={setMonth}
				className=""
				weekStartsOn={6}
				styles={{
					head_cell: {
						width: "70px",
						color: "#1B77CB",
						fontWeight: "bold",
						fontSize: "16px",
					},
					cell: {
						width: "70px",
						height: "25px",
						background: "transparent",
					},
					day: {
						color: "#1B77CB",
						width: "70px",
						borderRadius: 0,
					},
				}}
			/>
			<div className="text-right justify-self-center">
				<Button
					onClick={() => {
						setSelectedDays(undefined);
						setCalendarDays(undefined);
					}}
					variant="outline"
					className="ml-auto"
				>
					إعادة تعيين
				</Button>
			</div>
		</div>
	);
}
