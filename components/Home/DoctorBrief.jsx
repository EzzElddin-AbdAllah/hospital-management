import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";

const DoctorBrief = () => {
	return (
		<Group className="bg-gray-100 p-14">
			<Stack className="max-w-4xl mr-28">
				<Text dir="rtl" className="font-bold text-5xl mb-4">
					دكتور سليمان الحبيب
				</Text>
				<Text dir="rtl" className="text-3xl text-black text-opacity-60">
					درس الدكتور سليمان الحبيب الطب في جامعة الملك سعود وحصل على درجة
					البكالوريوس في الطب. وتخصص في طب الأطفال وحصل على شهادة الزمالة من
					الكلية الملكية البريطانية في طب الأطفال عام 1984م، وعلى الدبلومة
					البريطانية في صحة الأطفال وعضو الكلية الملكية البريطانية للأطباء.
				</Text>
			</Stack>
			<Image
				src="/doctor-soliman.png"
				width={300}
				height={380}
				alt="Doctor Soliman"
			/>
		</Group>
	);
};

export default DoctorBrief;
