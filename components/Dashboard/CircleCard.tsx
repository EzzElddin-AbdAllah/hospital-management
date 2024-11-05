"use client";

import { RingProgress, Text, Card, Center } from "@mantine/core";

interface TotalBookingsCardProps {
	label: string;
	number: number;
	circleColor: string;
	progress: number;
}

const TotalBookingsCard = ({
	label,
	number,
	circleColor,
	progress,
}: TotalBookingsCardProps) => {
	return (
		<Card
			shadow="sm"
			radius="md"
			className="w-60 h-48 bg-white flex items-center justify-center xl:mt-5 mt-2 rounded-3xl border"
		>
			<Center className="flex flex-col gap-2">
				<RingProgress
					size={100}
					thickness={6}
					roundCaps
					sections={
						progress === 100
							? [{ value: progress, color: circleColor, tooltip: label }]
							: [
									{
										value: progress,
										color: circleColor,
										tooltip: "الحجوزات التي تمت",
									},
									{
										value: 100 - progress,
										color: "#6DB5DE",
										tooltip: "الحجوزات الملغيه",
									},
							  ]
					}
					label={
						<Text size="lg" className="text-center text-[#011A77]">
							{number}
						</Text>
					}
				/>
				<Text size="md" className="text-[#1B77CB] text-center">
					{label}
				</Text>
			</Center>
		</Card>
	);
};

export default TotalBookingsCard;
