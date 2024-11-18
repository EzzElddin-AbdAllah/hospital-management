import { Button, Stack, Text, Input, Textarea, Title } from "@mantine/core";

const ContactForm = () => {
  return (
    <div className="ml-5 mt-10 w-[90%] bg-white px-6 py-10 lg:ml-20 lg:w-full">
      <Stack gap={50}>
        <Stack>
          <Title
            order={2}
            className="text-right font-bold text-black lg:text-5xl"
          >
            تواصل معنا
          </Title>
          <Text className="text-right text-color-accent-medium lg:mb-4 lg:text-3xl">
            للإتصال بنا او التواصل معنا عبر الموقع
          </Text>
        </Stack>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
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
          className="mb-32 mt-4 w-full bg-[#1d52af] text-white"
        >
          ارسال
        </Button>
      </Stack>
    </div>
  );
};

export default ContactForm;
