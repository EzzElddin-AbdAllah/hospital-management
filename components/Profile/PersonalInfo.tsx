import { zodResolver } from "@hookform/resolvers/zod";
import {
	Button,
	Divider,
	Modal,
	Stack,
	Text,
	TextInput,
	Alert,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface User {
	name: string;
	nationality: string;
	phone: string;
	age: string;
	gender: string;
}

const userSchema = z.object({
	name: z.string().min(2, { message: "الاسم يجب أن يكون على الأقل 2 أحرف" }),
	nationality: z.string().min(2, { message: "يرجى إدخال الجنسية" }),
	phone: z
		.string()
		.min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل" })
		.regex(/^\d+$/, { message: "يرجى إدخال رقم هاتف صالح" }),
	age: z
		.number()
		.int({ message: "يرجى إدخال عمر صالح" })
		.min(1, { message: "العمر يجب أن يكون على الأقل 1" }),
	gender: z.string().min(1, { message: "يرجى تحديد الجنس" }),
});

type UserFormData = z.infer<typeof userSchema>;

const PersonalInfoModal = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [
		resultModalOpened,
		{ open: openResultModal, close: closeResultModal },
	] = useDisclosure(false);
	const [userData, setUserData] = useState<User>();
	const [updateResult, setUpdateResult] = useState<string>("");

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserFormData>({
		resolver: zodResolver(userSchema),
	});

	const fetchUserData = async () => {
		try {
			const response = await fetch("/api/user");
			const data = await response.json();
			setUserData(data.user);
			reset(data.user);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const onSubmit = async (formData: UserFormData) => {
		try {
			const response = await fetch("/api/user", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setUpdateResult("تم تحديث البيانات بنجاح");
				fetchUserData();
			} else {
				setUpdateResult("حدث خطأ أثناء تحديث البيانات");
			}

			openResultModal();
			close();
		} catch (error) {
			console.error("Error updating user data:", error);
			setUpdateResult("حدث خطأ أثناء تحديث البيانات");
			openResultModal();
		}
	};

	useEffect(() => {
		fetchUserData();
	});

	return (
		<>
			<Stack dir="rtl">
				<div className="w-fit">
					<Text className="text-[#011A77] lg:text-3xl text-xl font-bold">
						{userData?.name}
					</Text>
					<Divider my="md" color="#011A77" />
				</div>
				<Text className="mb-4 text-gray-500">{userData?.nationality}</Text>
				<Text className="mb-4 text-gray-500">{userData?.phone}</Text>
				<Text className="mb-4 text-gray-500">{userData?.age} سنه</Text>
				<Text className="mb-4 text-gray-500">{userData?.gender}</Text>

				<Button
					onClick={open}
					className="bg-[#1D52AF] hover:bg-blue-800 text-white rounded-full lg:rounded-lg w-fit px-8"
				>
					تعديل
				</Button>
			</Stack>

			<Modal opened={opened} onClose={close} centered dir="rtl">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack>
						<Controller
							name="name"
							control={control}
							render={({ field }) => (
								<TextInput
									classNames={{
										input: "text-right rounded-full lg:rounded-lg",
									}}
									size="md"
									{...field}
									label="الاسم"
									error={errors.name?.message}
									className="text-right"
								/>
							)}
						/>
						<Controller
							name="nationality"
							control={control}
							render={({ field }) => (
								<TextInput
									classNames={{
										input: "text-right rounded-full lg:rounded-lg",
									}}
									size="md"
									{...field}
									label="الجنسية"
									error={errors.nationality?.message}
									className="text-right"
								/>
							)}
						/>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<TextInput
									classNames={{
										input: "text-right rounded-full lg:rounded-lg",
									}}
									size="md"
									{...field}
									label="رقم الهاتف"
									error={errors.phone?.message}
									className="text-right"
								/>
							)}
						/>
						<Controller
							name="age"
							control={control}
							render={({ field }) => (
								<TextInput
									classNames={{
										input: "text-right rounded-full lg:rounded-lg",
									}}
									size="md"
									{...field}
									type="number"
									label="العمر"
									error={errors.age?.message}
									className="text-right"
								/>
							)}
						/>
						<Controller
							name="gender"
							control={control}
							render={({ field }) => (
								<TextInput
									classNames={{
										input: "text-right rounded-full lg:rounded-lg",
									}}
									size="md"
									{...field}
									label="الجنس"
									error={errors.gender?.message}
									className="text-right"
								/>
							)}
						/>
						<Button
							type="submit"
							className="bg-[#1D52AF] hover:bg-blue-800 text-white rounded-full lg:rounded-lg w-full mt-4"
						>
							حفظ
						</Button>
					</Stack>
				</form>
			</Modal>

			<Modal
				opened={resultModalOpened}
				onClose={closeResultModal}
				centered
				dir="rtl"
				withCloseButton={false}
			>
				<Alert title="نتيجة التحديث" color="blue">
					{updateResult}
				</Alert>
				<div className="flex justify-end">
					<Button className="mt-2" onClick={closeResultModal}>
						موافق
					</Button>
				</div>
			</Modal>
		</>
	);
};

export default PersonalInfoModal;
