import { Button, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const MoreInfo = () => {
	return (
		<Group className="relative flex justify-around flex-nowrap bg-[#011A77] rounded-[35px] h-[435px] text-white mx-auto mb-20 w-[95%]">
			<Stack align="center">
				<Image
					className="lg:hidden"
					src="/medical-tools.jpeg"
					width={200}
					height={200}
					alt="Offer Image"
				/>
				<Text className="lg:text-3xl text-2xl mb-4 text-center lg:w-2/3 mx-10">
					مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ رضيع مصاب بمرض نادر
					وخطير
				</Text>
				<MdArrowForwardIos size={30} />
			</Stack>

			<Button
				variant="filled"
				color="#1b77cb"
				size="xl"
				className="font-normal absolute bottom-10 left-20 hidden lg:block"
			>
				المزيد
			</Button>

			<Image
				className="mr-5 hidden lg:block"
				src="/medical-tools.jpeg"
				width={400}
				height={400}
				alt="Offer Image"
			/>
		</Group>
	);
};

export default MoreInfo;
