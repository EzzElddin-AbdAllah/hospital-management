import { Group, Stack, Text } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { PiUserSquareFill } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const SidePanel = () => {
	const { data: session } = useSession();

	return (
		<Stack className="fixed items-center h-screen bg-white shadow-lg w-[16.5% w-[inherit] max-w-[inherit]">
			<Group className="m-10 mx-auto ">
				<BiSolidLeftArrow className="mt-2" size={25} color="#6DB5DE" />
				<Text className="-mr-2 text-xl font-bold xl:text-2xl">لوحة التحكم</Text>
			</Group>

			<PiUserSquareFill size={150} className="text-gray-300" />
			<Text className="text-[#011A77] text-2xl font-bold -mt-4">
				{session?.user?.phone}
			</Text>
			<Text className="text-[#1B77CB] text-md -mt-4">مدير حساب</Text>

			<Group className="m-10 mx-auto">
				<CgMenuGridR className="mt-2" size={25} color="#d9d9d9" />
				<Text className="text-[#1B77CB] text-xl font-bold -mr-2">
					لوحة التحكم
				</Text>
			</Group>

			<Group
				className="m-10 mt-auto ml-auto cursor-pointer"
				onClick={() => signOut()}
			>
				<RxExit className="mt-2" size={25} color="#6DB5DE" />
				<Text className="-mr-2 text-3xl font-bold">خروج</Text>
			</Group>
		</Stack>
	);
};

export default SidePanel;
