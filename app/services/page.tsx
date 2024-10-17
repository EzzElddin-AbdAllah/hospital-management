import Banner from "@/components/Services/Banner";
import DoctorBookingSearch from "@/components/Services/DoctorBookingSearch";
import DoctorProfile from "@/components/Services/DoctorProfile";
import MoreInfo from "@/components/Services/MoreInfo";
import SpecialOffer from "@/components/Services/SpecialOffer";
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
