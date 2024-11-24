"use client";

import { Button, Modal, PinInput, Stack, Text } from "@mantine/core";
import { useState } from "react";

interface VerificationCodeModalProps {
  opened: boolean;
  onClose: () => void;
  phoneNumber: string;
  onSuccess: () => void;
}

const VerificationCodeModal = ({
  opened,
  onClose,
  phoneNumber,
  onSuccess,
}: VerificationCodeModalProps) => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, phone: phoneNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        onClose();
        onSuccess();
      } else {
        setErrorMessage(result.error || "OTP verification failed.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Modal
      dir="rtl"
      opened={opened}
      onClose={onClose}
      centered
      title={
        <Text className="text-3xl font-bold text-color-accent-medium">
          كود التحقق
        </Text>
      }
    >
      <Stack className="mt-10">
        <Text className="text-center text-gray-500">
          لقد تم إرسال كود التحقق إلى الرقم{" "}
          <span className="font-bold text-color-accent-medium" dir="ltr">
            +966-{phoneNumber || "XXXXXXXXX"}
          </span>
        </Text>

        {/* Pin Input */}
        <PinInput
          oneTimeCode
          length={4}
          dir="ltr"
          className="mt-6 justify-center space-x-6"
          type="number"
          placeholder=""
          size="lg"
          value={otp}
          onChange={setOtp}
        />

        {errorMessage && (
          <Text className="-mb-2 mt-6 text-center text-color-error">
            {errorMessage}
          </Text>
        )}

        {/* Resend Code & Troubleshooting */}
        <div className="mt-6 flex justify-evenly text-sm text-color-accent-medium">
          <Button
            onClick={() => console.log("Troubleshoot")}
            variant="subtle"
            color="gray"
          >
            لم يصلك كود التحقق؟
          </Button>

          <Button onClick={() => console.log("Resend code")} variant="subtle">
            إعادة إرسال الكود
          </Button>
        </div>

        {/* Verify Button */}
        <Button
          variant="filled"
          className="mx-auto mb-12 mt-8 w-fit rounded-full bg-color-accent-medium px-10 text-white"
          onClick={handleVerifyOtp}
        >
          التحقق
        </Button>
      </Stack>
    </Modal>
  );
};

export default VerificationCodeModal;
