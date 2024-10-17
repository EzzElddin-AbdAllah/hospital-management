"use client";

import { Anchor, Button, Drawer, Group, Text, Menu } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { signOut, useSession, signIn } from "next-auth/react";

const Header = () => {
	const { data: session } = useSession();
	const pathname = usePathname();
	const [isSpecialPage, setIsSpecialPage] = useState(false);
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		setIsSpecialPage(pathname === "/" || pathname.includes("/auth"));
	}, [pathname]);

	const toggleDrawer = () => {
		setOpened(!opened);
	};

	const handleSignOut = () => {
		signOut();
	};

	const handleSignIn = async () => {
		signIn();
	};

	return (
		<>
			<header className="absolute w-full z-10">
				<Group justify="space-between" className="px-7 py-10 lg:px-14 lg:py-6">
					<Group gap={50} className="hidden lg:flex">
						{session ? (
							<Menu>
								<Menu.Target>
									<Button
										variant="filled"
										size="md"
										radius="md"
										className={`text-lg font-normal ${
											isSpecialPage
												? "text-[#F2F2F7] bg-[#007AFF]"
												: "text-[#007AFF] bg-white"
										}`}
									>
										{session.user?.name}
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item
										className="text-right text-sm"
										onClick={handleSignOut}
									>
										تسجيل الخروج
									</Menu.Item>
									<Menu.Item className="text-right text-sm">
										<Link href="/profile">الصفحة الشخصية</Link>
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						) : (
							<Button
								variant="filled"
								size="md"
								radius="md"
								className={`text-lg font-normal ${
									isSpecialPage
										? "text-[#F2F2F7] bg-[#007AFF]"
										: "text-[#007AFF] bg-white"
								}`}
								onClick={handleSignIn}
							>
								تسجيل
							</Button>
						)}

						<Anchor
							href="#"
							className={`text-lg ${
								isSpecialPage ? "text-[#007AFF]" : "text-white"
							}`}
						>
							الدكاترة
						</Anchor>
						<Anchor
							href="#"
							className={`text-lg ${
								isSpecialPage ? "text-[#007AFF]" : "text-white"
							}`}
						>
							العروض
						</Anchor>
						<Link href="/services">
							<Text
								className={`text-lg hover:underline ${
									isSpecialPage ? "text-[#007AFF]" : "text-white"
								}`}
							>
								الرئيسية
							</Text>
						</Link>
					</Group>

					<Group className="w-full justify-between lg:w-auto">
						<HiOutlineMenuAlt2
							size={35}
							onClick={toggleDrawer}
							className={`lg:hidden ${
								isSpecialPage ? "text-[#007AFF]" : "text-white"
							}`}
						/>
						<Text
							className={`font-roboto font-bold text-4xl ${
								isSpecialPage ? "text-[#007AFF]" : "text-white"
							}`}
						>
							لوجو
						</Text>
					</Group>
				</Group>
			</header>

			<Drawer
				opened={opened}
				onClose={toggleDrawer}
				size="30%"
				withCloseButton={false}
				className="items-center"
			>
				<div className="absolute top-0 left-0 h-32 w-full flex items-center justify-start">
					<svg
						width="300"
						height="300"
						viewBox="27 10 134 126"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M-20 126L188 58.3676V0H-20V126Z" fill="#1987D8" />
					</svg>
					<IoIosClose
						size={50}
						onClick={toggleDrawer}
						className="text-white absolute top-0 mt-6"
					/>
				</div>

				<div className="flex flex-col justify-center items-center gap-7 mt-28 text-center">
					<Anchor href="/" className="text-lg font-bold text-[#485B78]">
						الرئيسية
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						العروض
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						الدكاترة
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						تواصل معانا
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						الأسئلة الشائعة
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						خدماتنا
					</Anchor>
					<Anchor href="#" className="text-lg font-bold text-[#485B78]">
						عنا
					</Anchor>
					{session ? (
						<Button
							variant="gradient"
							className="text-lg font-bol text-white px-1"
							onClick={handleSignOut}
						>
							تسجيل الخروج
						</Button>
					) : (
						<Button
							variant="gradient"
							className="text-lg font-bold text-white"
							onClick={handleSignIn}
						>
							التسجيل
						</Button>
					)}
				</div>

				<div className="h-40 w-full -ml-5">
					<svg
						width="300"
						height="300"
						viewBox="20 15 134 126"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M-12 0L196 67.6324V126H-12V0Z" fill="#1987D8" />
					</svg>
				</div>
			</Drawer>
		</>
	);
};

export default Header;
