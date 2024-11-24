import { Button, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const MoreInfo = () => {
  return (
    <Group
      className="relative mx-auto mb-20 flex h-[435px] w-[95%] flex-nowrap justify-around
        rounded-[35px] bg-color-accent-dark text-white"
    >
      <Stack align="center">
        <Image
          className="lg:hidden"
          src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/medical-tools_rsumoe.jpg"
          width={200}
          height={200}
          alt="Offer Image"
        />
        <Text className="mx-10 mb-4 text-center text-2xl lg:w-2/3 lg:text-3xl">
          مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ رضيع مصاب بمرض نادر
          وخطير
        </Text>
        <MdArrowForwardIos size={30} />
      </Stack>

      <Button
        variant="filled"
        color="rgb(var(--color-accent-medium))"
        size="xl"
        className="absolute bottom-10 left-20 hidden font-normal lg:block"
      >
        المزيد
      </Button>

      <Image
        className="mr-5 hidden lg:block"
        src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/medical-tools_rsumoe.jpg"
        width={400}
        height={400}
        alt="Offer Image"
      />
    </Group>
  );
};

export default MoreInfo;
