import { Stack, Text } from "@mantine/core";
import DoctorSVG from "./DoctorSVG";
import MyResButton from "./MyResButton";

const Banner = () => {
  return (
    <div
      className="relative flex h-screen items-center justify-end
        bg-[url(https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/services-blue-bg_tmgxzy.png)]
        bg-cover"
    >
      <div className="absolute bottom-0 w-full">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M361.22 90.9004C169.573 -31.7352 40.5537 5.5978 0 39.5937V156C0 169.807 11.1929 181 25 181H1418C1431.81 181 1443 169.807 1443 156V77.1352C1324.1 45.6003 1262.39 57.0869 1247.97 62.5692C1195.29 82.5913 1135.92 79.2208 1106.86 77.1352C1089.31 77.1352 997.119 36.6738 953.22 16.4431C847.363 -28.1062 717.633 28.3312 666 62.1186C531.044 137.702 406.582 112.8 361.22 90.9004Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-0 hidden lg:-bottom-16 lg:-left-32 lg:block lg:scale-[80%]
          xl:-left-14 xl:bottom-0 xl:scale-100"
      >
        <DoctorSVG />
      </div>

      <Stack className="flex items-center text-center lg:max-w-[60%]">
        <Text
          className="text-nowrap font-bold text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
          }}
        >
          خدمـاتنا وفـقاً لاحتياجاتك
        </Text>

        <Text
          className="text-white"
          style={{
            fontSize: "clamp(1rem, 4vw, 2rem)",
            maxWidth: "50ch",
          }}
        >
          نقدم العديد من الخدمات التي تلبي احتياجات المرضى المختلفة، والمصممة
          خصيصًا لتقديم تجربة مميزة لهم
        </Text>

        <MyResButton />
      </Stack>
    </div>
  );
};

export default Banner;
