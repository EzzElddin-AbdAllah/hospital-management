"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	Button,
	Container,
	Group,
	PasswordInput,
	Text,
	TextInput,
} from "@mantine/core";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { z } from "zod";

const signUpSchema = z
	.object({
		username: z
			.string()
			.min(2, { message: "الاسم يجب أن يكون على الأقل 2 أحرف" }),
		email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
		password: z
			.string()
			.min(6, { message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل" }),
		confirmPassword: z
			.string()
			.min(6, { message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "كلمتا المرور غير متطابقتين",
		path: ["confirmPassword"],
	});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
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
				setErrorMessage(
					result.error === "User already exists"
						? "هذا الحساب مسجل بالفعل"
						: result.error
				);
				return;
			}

			setErrorMessage(null);

			const res = await signIn("credentials", {
				email: data.email,
				password: data.password,
				callbackUrl: "/services",
			});

			if (res?.error) {
				alert("خطأ في تسجيل الدخول");
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setErrorMessage("حدث خطأ أثناء تسجيل الحساب. حاول مرة أخرى.");
		}
	};

	return (
		<Container
			className="lg:w-[30%] lg:mx-auto mx-5 mt-28 mb-10 p-8 bg-gray-100 rounded-lg shadow-md"
			dir="rtl"
		>
			<Text size="xl" className="mb-10 text-center font-bold">
				إنشاء حساب جديد
			</Text>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
				<TextInput
					size="md"
					leftSection={<FaUserAlt />}
					placeholder="أدخل اسمك"
					label="الاسم"
					withAsterisk
					{...register("username")}
					error={errors.username?.message}
					className="mb-4"
				/>

				<TextInput
					size="md"
					leftSection={<MdAlternateEmail />}
					placeholder="أدخل بريدك الإلكتروني"
					label="البريد الإلكتروني"
					withAsterisk
					{...register("email")}
					error={errors.email?.message}
					className="mb-4"
				/>

				<PasswordInput
					size="md"
					leftSection={<FaLock />}
					placeholder="أدخل كلمة المرور"
					label="كلمة المرور"
					withAsterisk
					{...register("password")}
					error={errors.password?.message}
					className="mb-4"
				/>

				<PasswordInput
					size="md"
					leftSection={<FaLock />}
					placeholder="تأكيد كلمة المرور"
					label="تأكيد كلمة المرور"
					withAsterisk
					{...register("confirmPassword")}
					error={errors.confirmPassword?.message}
					className="mb-4"
				/>

				{errorMessage && <p className="text-red-500">{errorMessage}</p>}

				<Group className="mb-4">
					<Text size="sm">
						لديك حساب بالفعل؟{" "}
						<Link href="/auth/signin" className="text-[#007AFF]">
							سجل الدخول
						</Link>
					</Text>
				</Group>

				<Button
					type="submit"
					fullWidth
					size="md"
					className="bg-gradient-to-r from-[#4F85D4] to-[#293894] hover:bg-gray-100"
				>
					إنشاء الحساب
				</Button>
			</form>
		</Container>
	);
};

export default SignUp;
