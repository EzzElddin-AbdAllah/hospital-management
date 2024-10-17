"use client";

import { Badge, Button, Text, Title } from "@mantine/core";
import { MdArrowBackIos } from "react-icons/md";

const ResCard = () => {
	return (
		<div
			className="bg-white py-7 rounded-[44px] mb-32 mx-5 lg:mx-10 flex justify-center items-center"
			style={{
				boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
			}}
		>
			<div className="mb-10">
				<Title
					order={3}
					className="text-3xl lg:text-4xl font-bold mb-4 text-center"
				>
					احجز موعدك
				</Title>
				<Text className="text-[#1B77CB] text-center text-xl lg:text-2xl mb-10 mx-5">
					احجز اونلاين برقم الهاتف، وبدون الحاجه للتسجيل
				</Text>

				<div className="grid grid-cols-5 gap-2 lg:gap-10 lg:mr-36 -mr-24">
					<div className="ml-3">
						<Button className="bg-[#011A77] text-white rounded-lg text-sm w-20 h-fit py-1">
							يوم آخر
						</Button>
						<MdArrowBackIos
							className="bg-transparent text-gray-300 mt-24"
							size={24}
							style={{ width: 55, height: 55 }}
						/>
					</div>

					<div className="lg:flex flex-col items-center gap-4 hidden">
						<Badge className="bg-[#6db5de] text-base pl-5 rounded-lg mb-2 text-black h-10 w-20 leading-none font-medium">
							<span>الثلاثاء</span>
							<br />
							<span className="pl-1">2/8</span>
						</Badge>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							1:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							2:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							3:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							5:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							6:00م
						</Button>
						<Button className="bg-[#8AAB58] rounded-lg text-base text-black w-20 h-fit">
							احجز
						</Button>
					</div>

					<div className="flex flex-col items-center gap-4">
						<Badge className="bg-[#6db5de] text-base pl-5 rounded-lg mb-2 text-black h-10 w-20 leading-none font-medium">
							<span>الاثنين</span>
							<br />
							<span className="pl-1">1/8</span>
						</Badge>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							1:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							2:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							3:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							5:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							6:00م
						</Button>
						<Button className="bg-[#8AAB58] rounded-lg text-base text-black w-20 h-fit">
							احجز
						</Button>
					</div>

					<div className="flex flex-col items-center gap-4">
						<Badge className="bg-[#6db5de] text-base py-2 pl-7 rounded-lg mb-2 text-black h-10 w-20 font-medium">
							غداً
						</Badge>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							1:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							2:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							3:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							5:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							6:00م
						</Button>
						<Button className="bg-[#8AAB58] rounded-lg text-base text-black w-20 h-fit">
							احجز
						</Button>
					</div>

					<div className="flex flex-col items-center gap-4">
						<Badge className="bg-[#6db5de] text-base py-2 pl-6 rounded-lg mb-2 text-black h-10 w-20 font-medium">
							اليوم
						</Badge>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							1:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							2:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							3:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							5:00م
						</Button>
						<Button
							variant="filled"
							color="#ebedf0"
							className="mb-2 text-base text-black w-20 h-fit rounded-lg"
							dir="rtl"
						>
							6:00م
						</Button>
						<Button className="bg-[#8AAB58] rounded-lg text-base text-black w-20 h-fit">
							احجز
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResCard;
