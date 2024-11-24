"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDisclosure } from "@mantine/hooks";
import VerificationCodeModal from "../VerificationCodeModal";
import { signIn } from "next-auth/react";

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
  const [formData, setFormData] = useState<SignUpFormData | null>(null);
  const [codeModalOpened, { open: openCodeModal, close: closeCodeModal }] =
    useDisclosure(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    setFormData(data);
    openCodeModal();
  };

  const handleOtpSuccess = async () => {
    if (!formData) return;

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error);
        return;
      }

      setErrorMessage(null);

      const res = await signIn("credentials", {
        identifier: formData.phone,
        callbackUrl: "/",
      });

      if (res?.error) {
        alert("Error signing in");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage("An error occurred during sign-up. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#f6f6fa]"
      dir="rtl"
    >
      <div className="z-20 my-10 w-[80%] bg-white p-5 lg:mb-0">
        <Title
          order={2}
          className="mb-20 mt-10 text-right text-3xl font-bold md:text-5xl"
        >
          إنشاء حساب جديد
        </Title>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-32 space-y-16">
          <TextInput
            placeholder="الاسم"
            {...register("name")}
            error={errors.name?.message}
            size="lg"
            classNames={{ input: "text-right rounded-full md:rounded-lg" }}
          />
          <TextInput
            placeholder="الجنسية"
            {...register("nationality")}
            error={errors.nationality?.message}
            size="lg"
            classNames={{ input: "text-right rounded-full md:rounded-lg" }}
          />
          <TextInput
            placeholder="رقم الجوال"
            {...register("phone")}
            error={errors.phone?.message}
            size="lg"
            classNames={{ input: "text-right rounded-full md:rounded-lg" }}
          />
          <TextInput
            placeholder="العمر"
            {...register("age", { valueAsNumber: true })}
            error={errors.age?.message}
            size="lg"
            classNames={{ input: "text-right rounded-full md:rounded-lg" }}
          />
          <TextInput
            placeholder="الجنس"
            {...register("gender")}
            error={errors.gender?.message}
            size="lg"
            classNames={{ input: "text-right rounded-full md:rounded-lg" }}
          />

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <Button
            type="submit"
            fullWidth
            size="lg"
            className="rounded-full bg-[#1D52AF] text-white hover:bg-blue-800 md:rounded-lg"
          >
            إنشاء الحساب
          </Button>
        </form>
      </div>

      {/* Verification Code Modal */}
      <VerificationCodeModal
        opened={codeModalOpened}
        onClose={closeCodeModal}
        phoneNumber={formData?.phone!}
        onSuccess={handleOtpSuccess}
      />
    </div>
  );
};

export default BookingForm;
