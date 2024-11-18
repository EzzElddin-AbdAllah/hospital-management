import { Box, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

const OfferCard = () => {
  return (
    <Group
      className="m-auto flex h-[435px] w-11/12 justify-around rounded-[35px] bg-[#011A77] p-8
        text-white"
    >
      <Stack ml={50}>
        <Text className="mb-2 text-center text-5xl font-bold">عرض خاص</Text>
        <Text className="mb-4 text-center text-3xl">أشعة مقطعية على القلب</Text>

        <Group gap={100} mt={100}>
          <Text dir="rtl" className="text-5xl font-bold">
            50 ريال
          </Text>
          <Box className="relative">
            <Text dir="rtl" className="text-5xl font-bold text-white">
              100 ريال
            </Text>
            <Box className="absolute -left-6 top-1/2 h-1 w-60 -rotate-12 bg-red-500"></Box>
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
