import { Container, Text, Group, Stack, Badge } from "@mantine/core";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
  return (
    <Container
      className="relative flex h-screen min-w-full items-center justify-around bg-gradient-to-r
        from-[#1987d9] to-[#1a3698]"
    >
      <Group className="w-[45%] rounded-[120px] bg-white pb-4 pl-2 lg:-ml-20 lg:-mt-10 lg:w-auto">
        <Image
          className="rounded-b-[120px]"
          src={
            "https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/doctor-2-full_h2jsfk.png"
          }
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
        <Text className="text-5xl font-bold text-white lg:text-7xl">
          احجز الآن
        </Text>
        <Text className="mt-5 text-xl font-bold text-white lg:text-2xl">
          دكتور طلال اسماعيل
        </Text>
        <Text className="-mt-2 text-lg text-white">أخصائي نطق وتخاطب</Text>
        <Badge
          color="white"
          size="sm"
          rightSection={
            <div className="ml-4 rounded-full bg-[#194ba9] p-2 text-white">
              <FaPhoneAlt size={15} className="" />
            </div>
          }
          className="flex items-center justify-center rounded-full py-5 text-center lg:px-8"
        >
          <Text className="text-lg text-color-accent-medium lg:text-xl">
            +971325445622
          </Text>
        </Badge>
      </Stack>
    </Container>
  );
};

export default Banner;
