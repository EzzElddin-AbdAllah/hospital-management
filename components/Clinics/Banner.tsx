"use client";

import { Badge, Container, Group, Rating, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
	return (
		<Container className="flex justify-center items-center min-w-full h-screen p-0">
			<div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-[#1b77cb]"></div>
			<div className="absolute top-0 left-0 -z-10 h-full w-2/3 bg-[#011a77]"></div>
			<Image
				className="absolute scale-x-[-1] bottom-0 right-0 hidden lg:block"
				src={"/doctor-full.png"}
				width={800}
				height={800}
				alt="doctor-full"
			/>

			<div className="w-full flex flex-col items-center gap-32">
				<Stack align="start" className="lg:mr-auto lg:ml-32 mt-32">
					<Text className="font-bold text-4xl lg:text-7xl text-white ">
						احجز موعدك الآن
					</Text>
					<Group
						align="center"
						mt={5}
						className="lg:ml-12 flex-col lg:flex-row"
					>
						<Text className="font-bold text-xl lg:text-2xl text-white">
							تقيم المركز لأكثر من 11542 زائر
						</Text>
						<Rating value={4.5} fractions={2} readOnly />
					</Group>
				</Stack>

				<Badge
					color="#1b77cb"
					size="lg"
					rightSection={<FaPhoneAlt size={22} className="text-white ml-4" />}
					className="flex justify-center items-center text-center px-10 lg:px-20 py-10 lg:ml-52 -mt-10 rounded-full"
				>
					<Text className="text-3xl text-white">+971325445622</Text>
				</Badge>
			</div>
		</Container>
	);
};

export default Banner;
