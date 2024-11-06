"use client";

import { Grid } from "@mantine/core";
import { useState } from "react";
import DoctorsTable from "./DoctorsTable";
import ResTable from "./ResTable";
import SidePanel from "./SidePanel";
import Stats from "./Stats";

const DashboardMain = () => {
	const [totalDoctors, setTotalDoctors] = useState(0);
	const [totalappointments, setTotalappointments] = useState(0);
	const [appointmentsToday, setAppointmentsToday] = useState(0);

	return (
		<Grid dir="rtl" gutter={0}>
			<Grid.Col span={2} className="w-full">
				<SidePanel />
			</Grid.Col>
			<Grid.Col span={10} className="p-5 xl:p-0">
				<Stats
					totalDoctors={totalDoctors}
					totalappointments={totalappointments}
					appointmentsToday={appointmentsToday}
				/>
				<Grid dir="rtl" gutter={"lg"} className="mt-5 xl:mx-8">
					<Grid.Col span={{ base: 12, xl: 6.5 }}>
						<ResTable
							setTotalappointments={setTotalappointments}
							setAppointmentsToday={setAppointmentsToday}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xl: 5.5 }}>
						<DoctorsTable setTotalDoctors={setTotalDoctors} />
					</Grid.Col>
				</Grid>
			</Grid.Col>
		</Grid>
	);
};

export default DashboardMain;
