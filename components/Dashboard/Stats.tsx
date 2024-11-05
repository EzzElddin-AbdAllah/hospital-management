import { Group } from "@mantine/core";
import React from "react";
import CircleCard from "./CircleCard";

interface Props {
	totalDoctors: number;
	totalappointments: number;
}

const Stats = ({ totalDoctors, totalappointments }: Props) => {
	const stats = [
		{
			label: "اجمالي الاطباء",
			number: totalDoctors,
			circleColor: "#011A77",
			progress: 100,
		},
		{
			label: "اجمالي الحجوزات",
			number: totalappointments,
			circleColor: "#011A77",
			progress: 80,
		},
		{
			label: "اجمالي الحجوزات الملغيه",
			number: 0,
			circleColor: "#6DB5DE",
			progress: 100,
		},
		{
			label: "اجمالي الحجوزات التي تمت",
			number: 0,
			circleColor: "#011A77",
			progress: 100,
		},
	];

	return (
		<Group className="flex items-start justify-around flex-nowrap">
			{stats.map((stat, index) => (
				<CircleCard
					key={index}
					label={stat.label}
					number={stat.number}
					circleColor={stat.circleColor}
					progress={stat.progress}
				/>
			))}
		</Group>
	);
};

export default Stats;
