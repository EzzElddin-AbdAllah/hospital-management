"use client";

import { Badge, Container, Group, Rating, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
	return (
		<Container className="flex items-center justify-center h-screen min-w-full p-0">
			<div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-[#1b77cb]"></div>
			<div className="absolute top-0 left-0 -z-10 h-full w-2/3 bg-[#011a77]"></div>
			<Image
				className="absolute scale-x-[-1] bottom-0 right-0 hidden lg:block"
				src={
					"https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-full_czjjdw.png"
				}
				width={800}
				height={800}
				alt="doctor-full"
			/>

			<div className="flex flex-col items-center w-full gap-32">
				<Stack align="start" className="mt-32 lg:mr-auto lg:ml-32">
					<Text className="text-4xl font-bold text-white lg:text-7xl ">
						احجز موعدك الآن
					</Text>
					<Group
						align="center"
						mt={5}
						className="flex-col lg:ml-12 lg:flex-row"
					>
						<Text className="text-xl font-bold text-white lg:text-2xl">
							تقيم المركز لأكثر من 11542 زائر
						</Text>
						<Rating value={4.5} fractions={2} readOnly />
					</Group>
				</Stack>

				<Badge
					color="#1b77cb"
					size="lg"
					rightSection={<FaPhoneAlt size={22} className="ml-4 text-white" />}
					className="flex items-center justify-center px-10 py-10 -mt-10 text-center rounded-full lg:px-20 lg:ml-52"
				>
					<Text className="text-3xl text-white">+971325445622</Text>
				</Badge>
			</div>
		</Container>
	);
};

export default Banner;
