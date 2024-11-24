import Banner from "@/components/AboutUs/Banner";
import Intro from "@/components/AboutUs/Intro";
import OurVision from "@/components/AboutUs/OurVision";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack gap={0} className="bg-white">
      <Banner />
      <Intro />
      <OurVision />
    </Stack>
  );
};

export default page;
