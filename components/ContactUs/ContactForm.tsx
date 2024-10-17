import { Button, Stack, Text, Input, Textarea, Title } from "@mantine/core";

const ContactForm = () => {
	return (
		<div className="bg-white px-6 py-10 ml-5 lg:ml-20 w-[90%] lg:w-full mt-10">
			<Stack gap={50}>
				<Stack>
					<Title
						order={2}
						className="text-black text-right lg:text-5xl font-bold"
					>
						تواصل معنا
					</Title>
					<Text className="text-[#1B77CB] lg:mb-4 text-right lg:text-3xl">
						للإتصال بنا او التواصل معنا عبر الموقع
					</Text>
				</Stack>
				<div className="grid lg:grid-cols-2 gap-10 lg:gap-4">
					<Input
						radius="md"
						placeholder="الاسم الثاني"
						className="w-full"
						size="md"
						dir="rtl"
						styles={{
							input: { textAlign: "right" },
						}}
					/>
					<Input
						radius="md"
						placeholder="الاسم الاول"
						className="w-full"
						size="md"
						dir="rtl"
						styles={{
							input: { textAlign: "right" },
						}}
					/>
				</div>
				<Input
					radius="md"
					placeholder="البريد الالكتروني"
					className="w-full"
					size="md"
					dir="rtl"
					styles={{
						input: { textAlign: "right" },
					}}
				/>
				<Textarea
					radius="md"
					placeholder="ادخل النص هنا"
					h={300}
					dir="rtl"
					styles={{
						wrapper: { height: "100%" },
						input: { height: "100%", textAlign: "right" },
					}}
				/>
				<Button
					radius="md"
					size="lg"
					className="bg-[#1d52af] w-full text-white mt-4 mb-32"
				>
					ارسال
				</Button>
			</Stack>
		</div>
	);
};

export default ContactForm;
