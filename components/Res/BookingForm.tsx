"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput, Title } from "@mantine/core";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
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

type SignUpFormData = z.infer<typeof signUpSchema>;

const BookingForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = async (data: SignUpFormData) => {
		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				setErrorMessage(result.error);
				return;
			}

			setErrorMessage(null);

			const res = await signIn("credentials", {
				phone: data.phone,
				callbackUrl: "/services",
			});

			if (res?.error) {
				alert("Error signing in");
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setErrorMessage("An error occurred during sign-up. Please try again.");
		}
	};

	return (
		<div
			className="flex flex-col items-center justify-center bg-[#f6f6fa] -mt-80"
			dir="rtl"
		>
			<div className="w-full max-w-5xl bg-white mt-10 p-5 z-20">
				<Title order={2} className="mb-20 mt-10 font-bold text-5xl text-right">
					إنشاء حساب جديد
				</Title>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-16 mb-32">
					<TextInput
						placeholder="الاسم"
						{...register("name")}
						error={errors.name?.message}
						size="lg"
						classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
					/>
					<TextInput
						placeholder="الجنسية"
						{...register("nationality")}
						error={errors.nationality?.message}
						size="lg"
						classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
					/>
					<TextInput
						placeholder="رقم الجوال"
						{...register("phone")}
						error={errors.phone?.message}
						size="lg"
						classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
					/>
					<TextInput
						placeholder="العمر"
						{...register("age", { valueAsNumber: true })}
						error={errors.age?.message}
						size="lg"
						classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
					/>
					<TextInput
						placeholder="الجنس"
						{...register("gender")}
						error={errors.gender?.message}
						size="lg"
						classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
					/>

					{errorMessage && <p className="text-red-500">{errorMessage}</p>}

					<Button
						type="submit"
						fullWidth
						size="lg"
						className="bg-[#1D52AF] hover:bg-blue-800 text-white rounded-full lg:rounded-lg"
					>
						إنشاء الحساب
					</Button>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
