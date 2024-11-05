"use client";

import { ActionIcon, Card, Group, Select, Stack } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const dayOptions = [
	{ value: "saturday", label: "السبت" },
	{ value: "sunday", label: "الاحد" },
	{ value: "monday", label: "الاثنين" },
	{ value: "tuesday", label: "الثلاثاء" },
	{ value: "wednesday", label: "الاربعاء" },
	{ value: "thursday", label: "الخميس" },
	{ value: "friday", label: "الجمعة" },
];

type TimeRange = {
	_id: string;
	day: string;
	from: string;
	to: string;
};

interface TimeRangePickerProps {
	timeRangesInput?: TimeRange[];
	isModalReadOnly: boolean;
	onChange: (timeRanges: TimeRange[]) => void;
}

const TimeRangePicker = ({
	timeRangesInput,
	isModalReadOnly,
	onChange,
}: TimeRangePickerProps) => {
	const [timeRanges, setTimeRanges] = useState<TimeRange[]>(
		timeRangesInput || [{ _id: "1", day: "", from: "", to: "" }]
	);

	const fromRefs = useRef<Map<string, HTMLInputElement>>(new Map());
	const toRefs = useRef<Map<string, HTMLInputElement>>(new Map());

	useEffect(() => {
		onChange([...timeRanges]);
	}, [timeRanges, onChange]);

	const addTimeRange = () => {
		setTimeRanges((prev) => [
			...prev,
			{ _id: (prev.length + 1).toString(), day: "", from: "", to: "" },
		]);
	};

	const removeTimeRange = (_id: string) => {
		setTimeRanges((prev) => prev.filter((range) => range._id !== _id));
	};

	const updateTimeRange = (
		_id: string,
		field: keyof TimeRange,
		value: string | null
	) => {
		setTimeRanges((prev) =>
			prev.map((range) =>
				range._id === _id ? { ...range, [field]: value || "" } : range
			)
		);
	};

	const pickerControl = (_id: string, type: "from" | "to") => (
		<ActionIcon
			variant="subtle"
			color="gray"
			disabled={isModalReadOnly}
			onClick={() =>
				type === "from"
					? fromRefs.current.get(_id)?.showPicker()
					: toRefs.current.get(_id)?.showPicker()
			}
		>
			<CiClock2 />
		</ActionIcon>
	);

	console.log(timeRanges);

	return (
		<Card>
			<Stack>
				{timeRanges.map((range) => (
					<Group key={range._id} align="center" className="-mx-2 flex-nowrap">
						<span className="text-sm text-gray-400 text-nowrap">
							مواعيد الطبيب
						</span>
						{/* From Time Picker */}
						<TimeInput
							disabled={isModalReadOnly}
							label=""
							ref={(el) => {
								if (el) fromRefs.current.set(range._id, el);
							}}
							value={range.from}
							onChange={(event) =>
								updateTimeRange(range._id, "from", event.currentTarget.value)
							}
							withSeconds={false}
							rightSection={pickerControl(range._id, "from")}
						/>

						<span className="text-sm text-gray-400">الى</span>

						{/* To Time Picker */}
						<TimeInput
							disabled={isModalReadOnly}
							label=""
							ref={(el) => {
								if (el) toRefs.current.set(range._id, el);
							}}
							value={range.to}
							onChange={(event) =>
								updateTimeRange(range._id, "to", event.currentTarget.value)
							}
							withSeconds={false}
							rightSection={pickerControl(range._id, "to")}
						/>

						{/* Day of the Week Dropdown */}
						<Select
							disabled={isModalReadOnly}
							data={dayOptions}
							placeholder="اليوم"
							value={range.day}
							onChange={(value) => updateTimeRange(range._id, "day", value)}
							className="w-28"
						/>

						{/* Add New Row Button */}
						{!isModalReadOnly && (
							<ActionIcon color="blue" variant="subtle" onClick={addTimeRange}>
								<FaPlus />
							</ActionIcon>
						)}

						{/* Delete Row Button */}
						{!isModalReadOnly && (
							<ActionIcon
								className="mb-[1px] -mr-2"
								color="red"
								variant="subtle"
								onClick={() => removeTimeRange(range._id)}
							>
								<RiDeleteBin5Fill size={20} />
							</ActionIcon>
						)}
					</Group>
				))}
			</Stack>
		</Card>
	);
};

export default TimeRangePicker;
