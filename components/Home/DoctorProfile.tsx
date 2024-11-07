import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

const DoctorProfile = () => {
	return (
		<Group className="items-start my-10 lg:p-14 flex-nowrap lg:items-center lg:my-0">
			<Stack className="max-w-4xl lg:mr-24 ">
				<Text dir="rtl" className="text-2xl font-bold lg:text-5xl lg:mb-4">
					دكتور سليمان الحبيب
				</Text>
				<Text
					dir="rtl"
					className="pl-5 text-xl text-black lg:text-3xl text-opacity-60"
				>
					درس الدكتور سليمان الحبيب الطب في جامعة الملك سعود وحصل على درجة
					البكالوريوس في الطب. وتخصص في طب الأطفال وحصل على شهادة الزمالة من
					الكلية الملكية البريطانية في طب الأطفال عام 1984م، وعلى الدبلومة
					البريطانية في صحة الأطفال وعضو الكلية الملكية البريطانية للأطباء.
				</Text>
			</Stack>

			<Image
				className="hidden rounded-full lg:block"
				src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-soliman-2_lgkmc0.png"
				width={300}
				height={380}
				alt="Doctor Soliman"
			/>

			<Image
				className="rounded-full lg:hidden"
				src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-soliman-2_lgkmc0.png"
				width={150}
				height={150}
				alt="Doctor Soliman"
			/>
		</Group>
	);
};

export default DoctorProfile;
