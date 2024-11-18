import AboutClinics from "@/components/Clinics/AboutClinics";
import Banner from "@/components/Clinics/Banner";
import DoctorCard from "@/components/Clinics/DoctorCard";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack gap={0}>
      <Banner />
      <Stack className="bg-[#f2f2f7]">
        <AboutClinics />
        <DoctorCard />
      </Stack>
    </Stack>
  );
};

export default page;
