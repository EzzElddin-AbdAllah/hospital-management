import { Text } from "@mantine/core";

const Banner = () => {
  return (
    <div
      className="relative flex h-[70vh] w-full items-center justify-center
        bg-[url(https://res.cloudinary.com/dmkoec84b/image/upload/v1732019741/about-us-banner-bg_csagck.png)]
        bg-cover bg-center"
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1987D9] from-10% to-[#1A3698] to-65%
          opacity-70"
      ></div>

      <Text className="relative mt-20 text-5xl font-bold text-white lg:text-7xl">
        عنا
      </Text>
    </div>
  );
};

export default Banner;
