// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import {
// 	Button,
// 	Container,
// 	Group,
// 	PasswordInput,
// 	Text,
// 	TextInput,
// } from "@mantine/core";
// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { FaLock } from "react-icons/fa";
// import { MdAlternateEmail } from "react-icons/md";
// import { z } from "zod";

// const signInSchema = z.object({
// 	email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
// 	password: z
// 		.string()
// 		.min(6, { message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل" }),
// });

// type SignInFormData = z.infer<typeof signInSchema>;

// const SignIn = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm<SignInFormData>({
// 		resolver: zodResolver(signInSchema),
// 	});

// 	const onSubmit = async (data: SignInFormData) => {
// 		const res = await signIn("credentials", {
// 			email: data.email,
// 			password: data.password,
// 			callbackUrl: "/services",
// 		});

// 		if (res?.error) {
// 			alert("خطأ في تسجيل الدخول");
// 		}
// 	};

// 	return (
// 		<Container
// 			className="lg:w-[30%] lg:mx-auto mx-5 mt-28 mb-10 p-8 bg-gray-100 rounded-lg shadow-md"
// 			dir="rtl"
// 		>
// 			<Text size="xl" className="mb-10 text-center font-bold">
// 				تسجيل الدخول إلى حسابك
// 			</Text>

// 			<form onSubmit={handleSubmit(onSubmit)} className=" space-y-10">
// 				<TextInput
// 					size="md"
// 					leftSection={<MdAlternateEmail />}
// 					placeholder="أدخل بريدك الإلكتروني"
// 					label="البريد الإلكتروني"
// 					withAsterisk
// 					{...register("email")}
// 					error={errors.email?.message}
// 					className="mb-4"
// 				/>

// 				<PasswordInput
// 					size="md"
// 					leftSection={<FaLock />}
// 					placeholder="أدخل كلمة المرور"
// 					label="كلمة المرور"
// 					withAsterisk
// 					{...register("password")}
// 					error={errors.password?.message}
// 					className="mb-4"
// 				/>

// 				<Group className="mb-4">
// 					<Text size="sm">
// 						ليس لديك حساب؟{" "}
// 						<Link href="/auth/signup" className="text-[#007AFF]">
// 							أنشئ حساب جديد
// 						</Link>
// 					</Text>
// 				</Group>

// 				<Button
// 					type="submit"
// 					fullWidth
// 					size="md"
// 					className="bg-gradient-to-r from-[#4F85D4] to-[#293894] hover:bg-gray-100"
// 				>
// 					تسجيل الدخول
// 				</Button>
// 			</form>
// 		</Container>
// 	);
// };

// export default SignIn;

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
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { z } from "zod";

const signInSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "رقم الجوال يجب أن يكون 10 أرقام على الأقل" })
    .regex(/^\d+$/, { message: "يرجى إدخال رقم هاتف صالح" }),
  password: z
    .string()
    .min(6, { message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    const res = await signIn("credentials", {
      phone: data.phone,
      password: data.password,
      callbackUrl: "/services",
    });

    if (res?.error) {
      alert("خطأ في تسجيل الدخول");
    }
  };

  return (
    <Container
      className="mx-5 mb-10 mt-28 rounded-lg bg-gray-100 p-8 shadow-md lg:mx-auto lg:w-[30%]"
      dir="rtl"
    >
      <Text size="xl" className="mb-10 text-center font-bold">
        تسجيل الدخول إلى حسابك
      </Text>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <TextInput
          placeholder="أدخل رقم الجوال"
          label="رقم الجوال"
          {...register("phone")}
          error={errors.phone?.message}
          classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
          size="lg"
        />

        <PasswordInput
          leftSection={<FaLock />}
          placeholder="أدخل كلمة المرور"
          label="كلمة المرور"
          {...register("password")}
          error={errors.password?.message}
          classNames={{ input: "text-right rounded-full lg:rounded-lg" }}
          size="lg"
        />

        <Group className="mb-4">
          <Text size="sm">
            ليس لديك حساب؟{" "}
            <Link href="/auth/signup" className="text-[#007AFF]">
              أنشئ حساب جديد
            </Link>
          </Text>
        </Group>

        <Button
          type="submit"
          fullWidth
          size="md"
          className="bg-gradient-to-r from-[#4F85D4] to-[#293894] hover:bg-gray-100"
        >
          تسجيل الدخول
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
