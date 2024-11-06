"use client";

import Banner from "@/components/Profile/Banner";
import HistoryRes from "@/components/Profile/HistoryRes";
import PersonalInfo from "@/components/Profile/PersonalInfo";
import { Grid, Stack } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
	return (
		<Stack className="mb-20">
			<Banner />
			<Grid gutter={0} className="px-4 pt-10 lg:px-16">
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

const page = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "loading") return;

		if (!session || !session.user) {
			router.push("/res");
		}
	}, [session, status, router]);

	if (status === "loading" || !session) {
		return <div className="z-30 h-screen overflow-hidden bg-white"></div>;
	}

	return <Profile />;
};

export default page;
