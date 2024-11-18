"use client";

import { Anchor, Group, Stack, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/dashboard") return null;

  return (
    <footer
      className="static bg-gradient-to-r from-[#4F85D4] to-[#293894] py-8 text-white
        transition-all duration-300 ease-in-out"
    >
      <Group
        py={80}
        className="flex-col-reverse items-center justify-center gap-14 lg:ml-40 lg:flex-row
          lg:items-start lg:justify-between lg:px-20"
      >
        <Stack align="start" gap={100} className="lg:-mr-32">
          <Anchor
            href="#"
            className="hidden text-xl font-bold text-white lg:block"
          >
            عنا
          </Anchor>

          <Group>
            <FaLink className="cursor-pointer text-xl text-white" />
            <FaLinkedin className="cursor-pointer text-2xl text-white" />
            <AiFillTwitterCircle className="cursor-pointer text-2xl text-white" />
            <FaFacebook className="cursor-pointer text-2xl text-white" />
          </Group>
        </Stack>

        <Anchor
          href="#"
          className="hidden text-xl font-bold text-white lg:block"
        >
          خدماتنا
        </Anchor>

        <Stack spacing={8} align="start" className="hidden lg:flex">
          <Anchor href="/" className="text-xl font-bold text-white">
            الأخبار
          </Anchor>
          <Anchor href="/contact-us" className="text-xl font-bold text-white">
            تواصل معنا
          </Anchor>
        </Stack>

        <Stack spacing={8} align="start" className="hidden lg:flex">
          <Text className="text-xl font-bold">روابط مهمة</Text>
          <Anchor href="#" className="text-lg text-white">
            الأسئلة الشائعة
          </Anchor>
          <Anchor href="#" className="text-lg text-white">
            علاقات المستثمرين
          </Anchor>
          <Anchor href="#" className="text-lg text-white">
            علاقات المستثمرين
          </Anchor>
        </Stack>

        <Stack className="justify-center lg:mt-12">
          <Text className="text-3xl font-bold text-white">لوجو</Text>
        </Stack>
      </Group>

      <Text align="center" className="mt-8 text-xs text-white lg:text-sm">
        جميع الحقوق محفوظة ل مجموعة الدكتور سلمان الحبيب الطبية - 2024 ©
      </Text>
    </footer>
  );
};

export default Footer;
