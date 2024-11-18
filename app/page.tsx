import Banner from "@/components/Home/Banner";
import DoctorBookingSearch from "@/components/Home/DoctorBookingSearch";
import DoctorProfile from "@/components/Home/DoctorProfile";
import MoreInfo from "@/components/Home/MoreInfo";
import SpecialOffer from "@/components/Home/SpecialOffer";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack>
      <Banner />
      <SpecialOffer />
      <DoctorBookingSearch />
      <DoctorProfile />
      <MoreInfo />
    </Stack>
  );
};

export default page;
