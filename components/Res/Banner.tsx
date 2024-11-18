import { Container, Text } from "@mantine/core";

const Banner = () => {
  return (
    <Container
      dir="rtl"
      fluid
      className="flex h-[70vh] w-screen items-end justify-start
        bg-[url(https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/res-blue-bg_pzwuhs.png)]
        bg-cover pb-20 pr-10 lg:p-40"
    >
      <Text
        className="text-nowrap font-bold text-white min-[300px]:text-2xl min-[330px]:text-4xl
          md:text-7xl"
      >
        احجز الآن
      </Text>
    </Container>
  );
};

export default Banner;
