"use client";

import { Button, Input, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VerificationCodeModal from "../VerificationCodeModal";

const MyResButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [phoneModalOpened, { open: openPhoneModal, close: closePhoneModal }] =
    useDisclosure(false);
  const [codeModalOpened, { open: openCodeModal, close: closeCodeModal }] =
    useDisclosure(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    if (session && session.user) {
      router.push("/my-res");
    } else {
      openPhoneModal();
    }
  };

  const handlePhoneSubmit = async () => {
    if (phoneNumber.trim()) {
      try {
        const response = await fetch(`/api/user/${phoneNumber}`);

        if (response.ok) {
          closePhoneModal();
          openCodeModal();
        } else {
          router.push("/res");
        }
      } catch (error) {
        router.push("/res");
      }
    } else {
      alert("يرجى إدخال رقم الهاتف");
    }
  };

  const handleOtpSuccess = async () => {
    if (!phoneNumber) return;

    try {
      const res = await signIn("credentials", {
        identifier: phoneNumber,
        callbackUrl: "/my-res",
      });
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="white"
        size="lg"
        className="mt-4 flex w-fit items-center justify-center rounded-2xl px-4 py-2 shadow-md
          hover:bg-gray-100"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_88_852)">
            <path
              d="M4.92733 4.14111C3.19569 4.14111 1.78632 5.55049 1.78632 7.28213V8.85479C1.78632 9.28877 2.13866 9.64111 2.57264 9.64111H21.4316C21.8656 9.64111 22.218 9.28877 22.218 8.85479V7.28213C22.218 5.55049 20.8086 4.14111 19.0769 4.14111C15.141 4.14111 8.93632 4.14111 4.92733 4.14111Z"
              fill="#6DB5DE"
            />
            <path
              d="M7.28633 1C6.85234 1 6.5 1.35234 6.5 1.78633V3.35898H4.92734C2.76602 3.35898 1 5.125 1 7.28633V9.64531C1 10.0793 1.35234 10.4316 1.78633 10.4316H22.2137C22.6477 10.4316 23 10.0793 23 9.64531V7.28633C23 5.125 21.234 3.35898 19.0727 3.35898H17.5V1.78633C17.5 1.35234 17.1477 1 16.7137 1C16.2797 1 15.9273 1.35234 15.9273 1.78633V3.35898H8.07266V1.78633C8.07266 1.35234 7.72031 1 7.28633 1ZM4.92734 4.92734H6.5V6.5C6.5 6.93398 6.85234 7.28633 7.28633 7.28633C7.72031 7.28633 8.07266 6.93398 8.07266 6.5V4.92734H15.9316V6.5C15.9316 6.93398 16.284 7.28633 16.718 7.28633C17.152 7.28633 17.5 6.93398 17.5 6.5V4.92734H19.0727C20.3918 4.92734 21.4316 5.96719 21.4316 7.28633V8.85898H2.57266V7.28633C2.57266 5.96719 3.6082 4.92734 4.92734 4.92734ZM1.78633 12C1.35234 12 1 12.3523 1 12.7863V19.0727C1 21.234 2.76602 23 4.92734 23H19.0684C21.2297 23 22.9957 21.234 22.9957 19.0727V12.7863C22.9957 12.3523 22.6434 12 22.2094 12C21.7754 12 21.423 12.3523 21.423 12.7863V19.0727C21.423 20.3918 20.3832 21.4316 19.0641 21.4316H4.92734C3.6082 21.4316 2.56836 20.3918 2.56836 19.0727V12.7863C2.57266 12.3523 2.22031 12 1.78633 12Z"
              fill="#011A77"
              stroke="#F4F6FB"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_88_852">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span className="ml-2 font-normal text-color-accent-dark">حجوزاتي</span>
      </Button>

      {/* Modal */}
      <Modal
        dir="rtl"
        opened={phoneModalOpened}
        onClose={closePhoneModal}
        centered
        title={
          <Text className="text-3xl font-bold text-color-accent-medium">
            حجوزاتي
          </Text>
        }
      >
        <Stack className="mt-10">
          {/* Input Field */}
          <div className="rounded-md border px-5 focus-within:ring-2">
            <Input
              dir="ltr"
              rightSection={
                <span
                  dir="ltr"
                  className="flex h-full items-center border-r-2 border-gray-100 pr-2 text-gray-500"
                >
                  +966
                </span>
              }
              data-autofocus
              placeholder="ادخل رقم الهاتف"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              classNames={{
                input:
                  "ml40 w-full h-12 rounded-md text-left border-transparent pl-14",
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            variant="filled"
            className="mx-auto mb-12 mt-8 w-fit rounded-full bg-color-accent-medium px-10 text-white"
            onClick={handlePhoneSubmit}
          >
            إرسال كود التفعيل
          </Button>
        </Stack>
      </Modal>

      {/* Verification Code Modal */}
      <VerificationCodeModal
        opened={codeModalOpened}
        onClose={closeCodeModal}
        phoneNumber={phoneNumber}
        onSuccess={handleOtpSuccess}
      />
    </>
  );
};

export default MyResButton;
