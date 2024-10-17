import Banner from "@/components/Res/Banner";
import BookingForm from "@/components/Res/BookingForm";
import { Stack } from "@mantine/core";

const page = () => {
	return (
		<Stack>
			<Banner />
			<BookingForm />
		</Stack>
	);
};

export default page;
