import DoctorBrief from "@/components/OldHome/DoctorBrief";
import Intro from "@/components/OldHome/Intro";
import News from "@/components/OldHome/News";
import OfferCard from "@/components/OldHome/OfferCard";
import SearchDoctor from "@/components/OldHome/SearchDoctor";
import { Stack } from "@mantine/core";

const Home = () => {
  return (
    <Stack gap={40} mt={200} mb={60}>
      <Intro />
      <OfferCard />
      <SearchDoctor />
      <DoctorBrief />
      <News />
    </Stack>
  );
};

export default Home;
