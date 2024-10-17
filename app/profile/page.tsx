"use client";

import Banner from "@/components/Profile/Banner";
import HistoryRes from "@/components/Profile/HistoryRes";
import PersonalInfo from "@/components/Profile/PersonalInfo";
import { Grid, Stack } from "@mantine/core";

const page = () => {
	return (
		<Stack className="mb-20">
			<Banner />
			<Grid gutter={0} className="pt-10 lg:px-16 px-4">
				<Grid.Col span={7}>
					<HistoryRes />
				</Grid.Col>
				<Grid.Col span={5}>
					<PersonalInfo />
				</Grid.Col>
			</Grid>
		</Stack>
	);
};

export default page;
