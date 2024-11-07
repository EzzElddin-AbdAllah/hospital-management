"use client";

import { Container } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
	name: string;
}

const Banner = () => {
	const [userData, setUserData] = useState<User>();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch("/api/user");
				const data = await response.json();
				setUserData(data.user);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	return (
		<Container className="relative min-w-full p-0">
			<div className="relative flex items-center justify-center bg-black lg:h-screen h-96 bg-opacity-65">
				<Image
					className="absolute top-0 left-0 -z-20"
					src={
						"https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/waiting-area_kpbbij.png"
					}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "100%" }}
					alt="doctor-bg-gray"
				/>
			</div>

			<div className="absolute bottom-0 w-full">
				<svg
					width="100%"
					height="auto"
					viewBox="0 0 1434 170"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M346.957 90.9004C160.755 -31.7352 78.9014 33.0041 39.5 67L2.53526 145.037C-5.35195 161.687 6.86917 180.859 25.2931 180.738L1425.05 171.533C1428.22 171.512 1431.26 170.243 1433.5 168L1423 121.5L1399 77.1352C1283.48 45.6003 1222.52 57.0869 1208.51 62.5692C1157.33 82.5913 1099.65 79.2208 1071.42 77.1352C1054.35 77.1352 964.787 36.6738 922.136 16.4431C819.287 -28.1062 693.243 28.3312 643.077 62.1186C511.956 137.702 391.03 112.8 346.957 90.9004Z"
						fill="white"
						fill-opacity="0.25"
					/>
				</svg>
			</div>

			<div className="absolute bottom-0 w-full">
				<div className="relative flex justify-center lg:top-32 top-16">
					<div className="flex items-center justify-center text-[#011A77] lg:text-5xl text-xl font-bold bg-[#D9D9D9] border-[5px] border-[#1B77CB] rounded-full lg:w-56 lg:h-56 w-28 h-28">
						{userData?.name.split(" ")[0]}
					</div>
				</div>
				<svg
					width="100%"
					height="auto"
					viewBox="0 0 1434 412"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M721 0.500001C325.012 0.500036 -1.20706e-05 273.929 0 412L1434 412C1434 273.929 1116.99 0.499967 721 0.500001Z"
						fill="#1B77CB"
						fill-opacity="0.46"
					/>
				</svg>
			</div>
		</Container>
	);
};

export default Banner;
