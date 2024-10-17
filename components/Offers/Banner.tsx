import { Box, Card, Container, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<Container className="min-w-full p-0">
			<div className="relative flex justify-center items-center h-[95vh] bg-[#999999] bg-opacity-80">
				<Image
					className="absolute top-0 left-0 -z-20"
					src={"/doctor-bg-gray.jpeg"}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "100%" }}
					alt="doctor-bg-gray"
				/>

				<Stack align="center" className="mt-32 lg:mt-36">
					<Text className="font-bold text-5xl lg:text-7xl text-[#011A77] mb-10">
						احجز الآن
					</Text>

					<div className="relative">
						<div className="relative z-10 p-6">
							<Card shadow="sm" className="bg-[#1D4571] bg-opacity-50 lg:px-32">
								<div className="">
									<Text className="text-white text-3xl lg:text-5xl font-bold text-center">
										عرض خاص
									</Text>
									<Text className="text-white text-xl lg:text-3xl text-center mt-4">
										أشعة مقطعية على القلب
									</Text>
									<Group gap={100} my={50} justify="center">
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
				</Stack>
			</div>
		</Container>
	);
};

export default Banner;
