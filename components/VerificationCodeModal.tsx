"use client";

import { Modal, Stack, Button, Text } from "@mantine/core";
import { PinInput } from "@mantine/core";

interface VerificationCodeModalProps {
  opened: boolean;
  onClose: () => void;
  phoneNumber: string;
}

const VerificationCodeModal = ({
  opened,
  onClose,
  phoneNumber,
}: VerificationCodeModalProps) => {
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
          onComplete={(value) => console.log("Code entered:", value)}
        />

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
          onClick={() => console.log("Verified!")}
        >
          التحقق
        </Button>
      </Stack>
    </Modal>
  );
};

export default VerificationCodeModal;
