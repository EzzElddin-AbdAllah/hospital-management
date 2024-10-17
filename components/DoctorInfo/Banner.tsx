import { Container, Text, Group, Stack, Badge } from "@mantine/core";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
	return (
		<Container className="relative min-w-full h-screen bg-gradient-to-r from-[#1987d9] to-[#1a3698] flex justify-around items-center">
			<Group className="bg-white rounded-[120px] pb-4 pl-2 lg:-ml-20 lg:-mt-10 w-[45%] lg:w-auto">
				<Image
					className="rounded-b-[120px]"
					src={"/doctor-2-full.png"}
					width={280}
					height={280}
					alt="doctor-full"
				/>
			</Group>

			<div className="absolute bottom-0 w-full overflow-hidden">
				<svg
					width="110%"
					height="auto"
					viewBox="15 -10 1440 181"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M361.22 90.9004C169.573 -31.7352 40.5537 5.5978 0 39.5937V156C0 169.807 11.1929 181 25 181H1418C1431.81 181 1443 169.807 1443 156V77.1352C1324.1 45.6003 1262.39 57.0869 1247.97 62.5692C1195.29 82.5913 1135.92 79.2208 1106.86 77.1352C1089.31 77.1352 997.119 36.6738 953.22 16.4431C847.363 -28.1062 717.633 28.3312 666 62.1186C531.044 137.702 406.582 112.8 361.22 90.9004Z"
						fill="white"
					/>
				</svg>
			</div>

			<Stack align="center" className="">
				<Text className="text-white text-5xl lg:text-7xl font-bold">
					احجز الآن
				</Text>
				<Text className="text-white text-xl lg:text-2xl font-bold mt-5">
					دكتور طلال اسماعيل
				</Text>
				<Text className="text-white text-lg -mt-2">أخصائي نطق وتخاطب</Text>
				<Badge
					color="white"
					size="sm"
					rightSection={
						<div className="text-white bg-[#194ba9] rounded-full p-2 ml-4">
							<FaPhoneAlt size={15} className="" />
						</div>
					}
					className="flex justify-center items-center text-center lg:px-8 py-5 rounded-full"
				>
					<Text className="text-lg lg:text-xl text-[#1B77CB]">
						+971325445622
					</Text>
				</Badge>
			</Stack>
		</Container>
	);
};

export default Banner;
