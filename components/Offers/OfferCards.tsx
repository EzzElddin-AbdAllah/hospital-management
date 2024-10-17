import { Card, Group, Box, Text, Stack } from "@mantine/core";
import React from "react";

const OfferCards = () => {
	return (
		<Stack className="lg:w-2/3 mx-5 lg:mx-auto mb-20 lg:mb-44" gap={100}>
			<div className="relative">
				<div className="relative z-10 p-6">
					<Card
						shadow="sm"
						className="bg-[#1D6DC4] bg-opacity-50 lg:px-32 lg:py-10"
					>
						<div className="">
							<Text className="text-white text-4xl lg:text-5xl font-bold text-center mt-5 lg:mt-10">
								عرض خاص
							</Text>
							<Text className="text-white text-xl lg:text-3xl text-center mt-4">
								أشعة مقطعية على القلب
							</Text>
							<Group justify="center" className="gap-20 my-5 lg:my-16">
								<Text
									dir="rtl"
									className="text-white font-bold text-3xl lg:text-5xl"
								>
									50 ريال
								</Text>
								<Box className="relative">
									<Text
										dir="rtl"
										className="text-white font-bold text-3xl lg:text-5xl"
									>
										100 ريال
									</Text>
									<Box className="absolute -left-6 top-1/2 w-60 h-1 bg-red-500 -rotate-12"></Box>
								</Box>
							</Group>
						</div>
					</Card>
				</div>

				<div className="absolute -inset-3 -z-0 border-[20px] border-[#8895C7]"></div>
			</div>

			<div className="relative">
				<div className="relative z-10 p-6">
					<Card
						shadow="sm"
						className="bg-[#1B3598] bg-opacity-50 lg:px-32 lg:py-10"
					>
						<div className="">
							<Text className="text-white text-4xl lg:text-5xl font-bold text-center mt-5 lg:mt-10">
								عرض خاص
							</Text>
							<Text className="text-white text-xl lg:text-3xl text-center mt-4">
								أشعة مقطعية على القلب
							</Text>
							<Group justify="center" className="gap-20 my-5 lg:my-16">
								<Text
									dir="rtl"
									className="text-white font-bold text-3xl lg:text-5xl"
								>
									50 ريال
								</Text>
								<Box className="relative">
									<Text
										dir="rtl"
										className="text-white font-bold text-3xl lg:text-5xl"
									>
										100 ريال
									</Text>
									<Box className="absolute -left-6 top-1/2 w-60 h-1 bg-red-500 -rotate-12"></Box>
								</Box>
							</Group>
						</div>
					</Card>
				</div>

				<div className="absolute -inset-3 -z-0 border-[20px] border-[#89B1DD]"></div>
			</div>

			<div className="relative">
				<div className="relative z-10 p-6">
					<Card
						shadow="sm"
						className="bg-[#6DB5DE] bg-opacity-50 lg:px-32 lg:py-10"
					>
						<div className="">
							<Text className="text-[#1B77CB] text-4xl lg:text-5xl font-bold text-center mt-5 lg:mt-10">
								عرض خاص
							</Text>
							<Text className="text-[#1B77CB] text-xl lg:text-3xl text-center mt-4">
								أشعة مقطعية على القلب
							</Text>
							<Group justify="center" className="gap-20 my-5 lg:my-16">
								<Text
									dir="rtl"
									className="text-[#1B77CB] font-bold text-3xl lg:text-5xl"
								>
									50 ريال
								</Text>
								<Box className="relative">
									<Text
										dir="rtl"
										className="text-[#1B77CB] font-bold text-3xl lg:text-5xl"
									>
										100 ريال
									</Text>
									<Box className="absolute -left-6 top-1/2 w-60 h-1 bg-red-500 -rotate-12"></Box>
								</Box>
							</Group>
						</div>
					</Card>
				</div>

				<div className="absolute -inset-3 -z-0 border-[20px] border-[#89B1DD]"></div>
			</div>
		</Stack>
	);
};

export default OfferCards;
