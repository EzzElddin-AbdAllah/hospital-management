"use client";

import { Anchor, Group, Stack, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const pathname = usePathname();
	const [isHomePage, setIsHomePage] = useState(true);
	const [isSpecialPage, setIsSpecialPage] = useState(false);

	useEffect(() => {
		setIsHomePage(pathname === "/");
	}, [pathname]);

	useEffect(() => {
		setIsSpecialPage(
			pathname.includes("/auth") || pathname.includes("/dashboard")
		);
	}, [pathname]);

	if (pathname === "/dashboard") return null;

	return (
		<footer
			className={`py-8 transition-all duration-300 ease-in-out static ${
				isHomePage
					? "bg-gray-100"
					: "bg-gradient-to-r from-[#4F85D4] to-[#293894] text-white"
			}`}
		>
			<Group
				py={80}
				className="flex-col-reverse items-center justify-center lg:ml-40 lg:justify-between lg:px-20 lg:flex-row lg:items-start gap-14"
			>
				<Stack align="start" gap={100} className="lg:-mr-32">
					<Anchor
						href="#"
						className={`font-bold text-xl hidden lg:block ${
							isHomePage ? "text-black" : "text-white"
						}`}
					>
						عنا
					</Anchor>

					<Group>
						<FaLink
							className={`text-xl cursor-pointer ${
								isHomePage ? "text-blue-900" : "text-white"
							}`}
						/>
						<FaLinkedin
							className={`text-2xl cursor-pointer ${
								isHomePage ? "text-blue-900" : "text-white"
							}`}
						/>
						<AiFillTwitterCircle
							className={`text-2xl cursor-pointer ${
								isHomePage ? "text-blue-900" : "text-white"
							}`}
						/>
						<FaFacebook
							className={`text-2xl cursor-pointer ${
								isHomePage ? "text-blue-900" : "text-white"
							}`}
						/>
					</Group>
				</Stack>

				<Anchor
					href="#"
					className={`font-bold text-xl hidden lg:block ${
						isHomePage ? "text-black" : "text-white"
					}`}
				>
					خدماتنا
				</Anchor>

				<Stack spacing={8} align="start" className="hidden lg:flex">
					<Text className="text-xl font-bold">الأخبار</Text>
					<Anchor
						href="#"
						className={`font-bold text-xl ${
							isHomePage ? "text-black" : "text-white"
						}`}
					>
						تواصل معنا
					</Anchor>
				</Stack>

				<Stack spacing={8} align="start" className="hidden lg:flex">
					<Text className="text-xl font-bold">روابط مهمة</Text>
					<Anchor
						href="#"
						className={`text-lg ${
							isHomePage ? "text-[#212121]" : "text-white"
						}`}
					>
						الأسئلة الشائعة
					</Anchor>
					<Anchor
						href="#"
						className={`text-lg ${
							isHomePage ? "text-[#212121]" : "text-white"
						}`}
					>
						علاقات المستثمرين
					</Anchor>
					<Anchor
						href="#"
						className={`text-lg ${
							isHomePage ? "text-[#212121]" : "text-white"
						}`}
					>
						علاقات المستثمرين
					</Anchor>
				</Stack>

				<Stack className="justify-center lg:mt-12">
					<Text
						className={`font-bold text-3xl ${
							isHomePage ? "text-blue-900" : "text-white"
						}`}
					>
						لوجو
					</Text>
				</Stack>
			</Group>

			<Text
				align="center"
				className={`mt-8 text-xs lg:text-sm ${
					isHomePage ? "text-gray-400" : "text-white"
				}`}
			>
				جميع الحقوق محفوظة ل مجموعة الدكتور سلمان الحبيب الطبية - 2024 ©
			</Text>
		</footer>
	);
};

export default Footer;
