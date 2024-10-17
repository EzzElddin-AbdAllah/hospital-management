"use client";

import { Text, Title, List } from "@mantine/core";

const AboutDoctor = () => {
	return (
		<div
			className="bg-white px-10 lg:px-20 py-10 rounded-[44px] m-5 lg:m-10"
			style={{
				boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
			}}
		>
			<Title
				order={2}
				className="text-right text-2xl lg:text-4xl font-bold mb-4 lg:mb-6"
			>
				معلومات عن الدكتور
			</Title>

			<Text className="text-[#1B77CB] text-right text-base lg:text-2xl mb-4 lg:mb-8 lg:pl-72">
				الدكتور طلال اسماعيل هو دكتور الأمراض الجلدية، فهو حاصل على درجة
				الماجستير في الأمراض الجلدية من جامعة غرب ميشيغان
				<br />
				يتمتّع الدكتور طلال اسماعيل بخبرةٍ واسعة تتجاوز 10 سنوات
			</Text>

			<Title className="text-right text-xl lg:text-2xl font-normal">
				الشهادات التعليمية
			</Title>

			<div className="text-[#1B77CB] text-right flex justify-end">
				<List
					className="space-y-2 text-lg lg:text-2xl"
					styles={{
						item: {
							listStyleType: "disc",
							paddingInlineStart: "1em",
							listStylePosition: "inside",
							direction: "rtl",
						},
					}}
				>
					<List.Item>ماجستير, جامعة الأزهر, مصر</List.Item>
				</List>
			</div>
		</div>
	);
};

export default AboutDoctor;
