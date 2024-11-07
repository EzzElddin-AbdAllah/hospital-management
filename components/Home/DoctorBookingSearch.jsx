import { Input, Button, Group, Stack, Text } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

const DoctorBookingSearch = () => {
	return (
		<>
			<div className="h-2 shadow-md"></div>
			<Group justify="center" className="py-10 shadow-md">
				<Stack>
					<Text className="font-bold text-5xl text-center mb-6">
						للحجز لدى دكتور
					</Text>
					<Group className="flex-nowrap mx-4">
						<Input
							size="xl"
							radius={16}
							placeholder="ابحث عن مستشفى"
							leftSection={<CiSearch size={30} color="#6DB5DE" />}
							className="lg:w-[700px]"
						/>
						<Button
							variant="filled"
							color="#1b77cb"
							size="lg"
							className="font-normal lg:ml-4"
						>
							حفظ
						</Button>
					</Group>
				</Stack>
			</Group>
		</>
	);
};

export default DoctorBookingSearch;
