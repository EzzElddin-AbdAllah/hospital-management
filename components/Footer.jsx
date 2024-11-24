"use client";

import { Anchor, Group, Stack, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/dashboard") return null;

  return (
    <footer className="bg-gradient-to-r from-[#4F85D4] to-[#293894] py-8">
      <Group
        py={80}
        className="flex-col-reverse items-center justify-center gap-14 lg:ml-40 lg:flex-row
          lg:items-start lg:justify-between lg:px-20"
      >
        <Group>
          <FaLink className="cursor-pointer text-xl text-white" />
          <FaLinkedin className="cursor-pointer text-2xl text-white" />
          <AiFillTwitterCircle className="cursor-pointer text-2xl text-white" />
          <FaFacebook className="cursor-pointer text-2xl text-white" />
        </Group>

        <Anchor
          href="about-us"
          className="hidden text-xl font-bold text-white lg:block"
        >
          عنا
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
          <Text className="text-xl font-bold text-white">روابط مهمة</Text>
          <Anchor href="/offers" className="text-lg text-white">
            العروض
          </Anchor>
          <Anchor href="/clinics" className="text-lg text-white">
            العيادات
          </Anchor>
        </Stack>

        <Stack className="justify-center lg:mt-12">
          <Text className="text-3xl font-bold text-white">لوجو</Text>
        </Stack>
      </Group>

      <Text align="center" className="mt-8 text-xs text-white lg:text-sm">
        جميع الحقوق محفوظة لـ مجموعة الدكتور سلمان الحبيب الطبية - 2024 ©
      </Text>
    </footer>
  );
};

export default Footer;
