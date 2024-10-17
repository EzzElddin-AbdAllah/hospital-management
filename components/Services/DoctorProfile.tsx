import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

const DoctorProfile = () => {
	return (
		<Group className="lg:p-14 flex-nowrap items-start lg:items-center my-10 lg:my-0">
			<Stack className="max-w-4xl lg:mr-24 ">
				<Text dir="rtl" className="font-bold lg:text-5xl text-2xl lg:mb-4">
					دكتور سليمان الحبيب
				</Text>
				<Text
					dir="rtl"
					className="lg:text-3xl text-xl text-black text-opacity-60  pl-5"
				>
					درس الدكتور سليمان الحبيب الطب في جامعة الملك سعود وحصل على درجة
					البكالوريوس في الطب. وتخصص في طب الأطفال وحصل على شهادة الزمالة من
					الكلية الملكية البريطانية في طب الأطفال عام 1984م، وعلى الدبلومة
					البريطانية في صحة الأطفال وعضو الكلية الملكية البريطانية للأطباء.
				</Text>
			</Stack>

			<Image
				className="rounded-full hidden lg:block"
				src="/doctor-soliman-2.png"
				width={300}
				height={380}
				alt="Doctor Soliman"
			/>

			<Image
				className="rounded-full lg:hidden"
				src="/doctor-soliman-2.png"
				width={150}
				height={150}
				alt="Doctor Soliman"
			/>
		</Group>
	);
};

export default DoctorProfile;
