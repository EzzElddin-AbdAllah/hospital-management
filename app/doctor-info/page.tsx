import AboutDoctor from "@/components/DoctorInfo/AboutDoctor";
import Banner from "@/components/DoctorInfo/Banner";
import DoctorReviewCard from "@/components/DoctorInfo/DoctorReviewCard";
import ResCard from "@/components/DoctorInfo/ResCard";
import { Stack } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <Stack>
      <Banner />
      <DoctorReviewCard />
      <AboutDoctor />
      <ResCard />
    </Stack>
  );
};

export default page;
