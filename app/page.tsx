import DoctorBrief from "@/components/Home/DoctorBrief";
import Intro from "@/components/Home/Intro";
import News from "@/components/Home/News";
import OfferCard from "@/components/Home/OfferCard";
import SearchDoctor from "@/components/Home/SearchDoctor";
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
