"use client";

import { Anchor, Button, Drawer, Group, Menu, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Header = () => {
	const { data: session } = useSession();
	const pathname = usePathname();
	const [opened, setOpened] = useState(false);

	const toggleDrawer = () => {
		setOpened(!opened);
	};

	const handleSignOut = () => {
		signOut();
	};

	const handleSignIn = async () => {
		signIn();
	};

	if (pathname === "/dashboard") return null;

	return (
		<>
			<header className="absolute z-10 w-full">
				<Group justify="space-between" className="py-10 px-7 lg:px-14 lg:py-6">
					<Group gap={50} className="hidden lg:flex">
						{session ? (
							<Menu>
								<Menu.Target>
									<Button
										variant="filled"
										size="md"
										radius="md"
										className={"text-lg font-normal text-[#007AFF] bg-white"}
									>
										{session.user?.name}
									</Button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item
										className="text-sm text-right"
										onClick={handleSignOut}
									>
										تسجيل الخروج
									</Menu.Item>
									<Menu.Item className="text-sm text-right">
										<Link href="/profile">الصفحة الشخصية</Link>
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						) : (
							<Button
								variant="filled"
								size="md"
								radius="md"
								className={"text-lg font-normal text-[#007AFF] bg-white"}
								onClick={handleSignIn}
							>
								تسجيل
							</Button>
						)}

						<Anchor href="#" className={"text-lg text-white"}>
							الدكاترة
						</Anchor>
						<Anchor href="#" className={"text-lg text-white"}>
							العروض
						</Anchor>
						<Link href="/">
							<Text className={"text-lg text-white hover:underline"}>
								الرئيسية
							</Text>
						</Link>
					</Group>

					<Group className="justify-between w-full lg:w-auto">
						<HiOutlineMenuAlt2
							size={35}
							onClick={toggleDrawer}
							className="text-white lg:hidden"
						/>
						<Text className="text-4xl font-bold text-white font-roboto">
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
				<div className="absolute top-0 left-0 flex items-center justify-start w-full h-32">
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
						className="absolute top-0 mt-6 text-white"
					/>
				</div>

				<div className="flex flex-col items-center justify-center text-center gap-7 mt-28">
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
							className="px-1 text-lg text-white font-bol"
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

				<div className="w-full h-40 -ml-5">
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
