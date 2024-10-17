import { Divider, Stack, Text } from "@mantine/core";
import React from "react";
import Appointments from "../MyRes/Appointments";

const HistoryRes = () => {
	return (
		<Stack className="" dir="rtl">
			<div className="w-fit">
				<Text className="text-[#011A77] lg:text-3xl text-xl font-bold">
					الحجوزات السابقة
				</Text>
				<Divider my="md" color="#011A77" />
			</div>
			<div>
				<Appointments showCurrent={false} />
			</div>
		</Stack>
	);
};

export default HistoryRes;
