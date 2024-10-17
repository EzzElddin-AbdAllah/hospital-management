"use client";

import { Carousel } from "@mantine/carousel";
import { Card, Text, Group, Box } from "@mantine/core";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SpecialOffer = () => {
	return (
		<div className="flex items-center justify-center mx-auto mt-5 w-full max-w-[800px] px-4 lg:px-0">
			<Carousel
				withIndicators
				loop
				nextControlIcon={
					<MdArrowForwardIos
						className="lg:-mr-72 bg-transparent text-gray-300"
						size={24}
						style={{ width: 55, height: 55 }}
					/>
				}
				previousControlIcon={
					<MdArrowBackIos
						className="lg:-ml-72 bg-transparent text-gray-300 ml-3"
						size={24}
						style={{ width: 55, height: 55 }}
					/>
				}
				classNames={{
					indicators: "hidden",
				}}
			>
				<Carousel.Slide>
					<Card shadow="sm" className="bg-[#89b1dd] text-white">
						<div className="p-4 bg-[#8d9acb] border-[8px] lg:border-[16px] border-white">
							<Text className="text-2xl lg:text-5xl font-bold text-center mt-5 lg:mt-10">
								عرض خاص
							</Text>
							<Text className="text-lg lg:text-3xl text-center mt-2 lg:mt-4">
								أشعة مقطعية على القلب
							</Text>
							<Group justify="center" className="gap-20 lg:my-14 my-5">
								<Text dir="rtl" className="font-bold text-3xl lg:text-5xl">
									50 ريال
								</Text>
								<Box className="relative">
									<Text
										dir="rtl"
										className="text-white font-bold text-3xl lg:text-5xl"
									>
										100 ريال
									</Text>
									<Box className="absolute -left-3 lg:-left-6 top-1/2 w-32 lg:w-60 h-1 bg-red-500 -rotate-12"></Box>
								</Box>
							</Group>
						</div>
					</Card>
				</Carousel.Slide>
				<Carousel.Slide>
					<Card shadow="sm" className="bg-[#89b1dd] text-white">
						<div className="p-4 bg-[#8d9acb] border-[8px] lg:border-[16px] border-white">
							<Text className="text-2xl lg:text-5xl font-bold text-center mt-5 lg:mt-10">
								عرض خاص
							</Text>
							<Text className="text-xl lg:text-3xl text-center mt-2 lg:mt-4">
								أشعة مقطعية على القلب
							</Text>
							<Group className="gap-20 lg:my-14 my-5" justify="center">
								<Text dir="rtl" className="font-bold text-3xl lg:text-5xl">
									100 ريال
								</Text>
								<Box className="relative">
									<Text
										dir="rtl"
										className="text-white font-bold text-3xl lg:text-5xl"
									>
										300 ريال
									</Text>
									<Box className="absolute -left-3 lg:-left-6 top-1/2 w-32 lg:w-60 h-1 bg-red-500 -rotate-12"></Box>
								</Box>
							</Group>
						</div>
					</Card>
				</Carousel.Slide>
			</Carousel>
		</div>
	);
};

export default SpecialOffer;
