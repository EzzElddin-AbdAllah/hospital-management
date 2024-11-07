import { Box, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

const OfferCard = () => {
	return (
		<Group className="flex justify-around bg-[#011A77] rounded-[35px] p-8 h-[435px] w-11/12 text-white m-auto">
			<Stack ml={50}>
				<Text className="font-bold text-5xl mb-2 text-center">عرض خاص</Text>
				<Text className="text-3xl mb-4 text-center">أشعة مقطعية على القلب</Text>

				<Group gap={100} mt={100}>
					<Text dir="rtl" className="font-bold text-5xl">
						50 ريال
					</Text>
					<Box className="relative">
						<Text dir="rtl" className="text-white font-bold text-5xl">
							100 ريال
						</Text>
						<Box className="absolute -left-6 top-1/2 w-60 h-1 bg-red-500 -rotate-12"></Box>
					</Box>
				</Group>
			</Stack>

			<Box className="relative">
				<Image
					src="/medical-history.jpeg"
					width={300}
					height={300}
					alt="Offer Image"
				/>
			</Box>
		</Group>
	);
};

export default OfferCard;
