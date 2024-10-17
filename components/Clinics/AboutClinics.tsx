"use client";

import { Text, Title, List } from "@mantine/core";

const AboutClinics = () => {
	return (
		<div
			className="bg-white p-8 lg:p-10 rounded-[44px] m-10"
			style={{
				boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
			}}
		>
			{/* Section Title */}
			<Title
				order={2}
				className="text-right text-3xl lg:text-4xl font-bold mb-6"
			>
				عن عيادات المركز
			</Title>

			{/* Main Description */}
			<Text className="text-[#1B77CB] text-right text-lg lg:text-2xl mb-8 lg:px-10">
				أول مركز طبي يقدم خدمات علاجيه بتكنولوجیا عالية ومرخص للعلاج بالاكسجين
				المضغوط. كما تتوفر في المركز خدمات طبية مقدمه على ايدي أطباء ذو خبره في
				مجالات : صحة وعلاج الاسنان - الجلدية والتجميل والليزر - الامراض الباطنية
				- امراض الاطفال - وامراض النساء والولادة والتجميل النسائي الجراحي -
				الأمراض العصبية والعضلية - علاج اضطرابات النوم والدبو - أمراض الصدرية -
				قسم الزيارات المنزلية - الأشعة- المختبرات.
			</Text>

			<Title className="text-right text-2xl font-normal mb-6">
				التخصصات الطبية
			</Title>

			{/* Specialties Section */}
			<div className="text-[#1B77CB] text-right flex justify-end lg:gap-64 lg:px-20 mb-6">
				<List
					className="space-y-3 text-sm lg:text-xl"
					styles={{
						item: {
							listStyleType: "disc",
							paddingInlineStart: "1em",
							listStylePosition: "inside",
							direction: "rtl",
						},
					}}
				>
					<List.Item>صدر وجهاز تنفسي</List.Item>
					<List.Item>الطب العام</List.Item>
					<List.Item>معامل تحاليل</List.Item>
				</List>
				<List
					size="xl"
					className="space-y-3 text-sm lg:text-xl"
					styles={{
						item: {
							listStyleType: "disc",
							paddingInlineStart: "1em",
							listStylePosition: "inside",
							direction: "rtl",
						},
					}}
				>
					<List.Item>أنف وأذن وحنجرة</List.Item>
					<List.Item>باطنية</List.Item>
					<List.Item>نساء وولادة</List.Item>
				</List>
				<List
					size="xl"
					className="space-y-3 text-sm lg:text-xl"
					styles={{
						item: {
							listStyleType: "disc",
							paddingInlineStart: "1em",
							listStylePosition: "inside",
							direction: "rtl",
						},
					}}
				>
					<List.Item>جلدية</List.Item>
					<List.Item>أسنان</List.Item>
					<List.Item>أطفال</List.Item>
					<List.Item>عظام</List.Item>
				</List>
			</div>
		</div>
	);
};

export default AboutClinics;
