import { Group, Stack, Text } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { PiUserSquareFill } from "react-icons/pi";
import { RxExit } from "react-icons/rx";

const SidePanel = () => {
  const { data: session } = useSession();

  return (
    <Stack
      className="w-[16.5% fixed h-screen w-[inherit] max-w-[inherit] items-center bg-white
        shadow-lg"
    >
      <Group className="m-10 mx-auto">
        <BiSolidLeftArrow
          className="mt-2"
          size={25}
          color="rgb(var(--color-accent-light))"
        />
        <Text className="-mr-2 text-xl font-bold xl:text-2xl">لوحة التحكم</Text>
      </Group>

      <PiUserSquareFill size={150} className="text-gray-300" />
      <Text className="-mt-4 text-2xl font-bold text-color-accent-dark">
        {session?.user?.phone}
      </Text>
      <Text className="text-md -mt-4 text-color-accent-medium">مدير حساب</Text>

      <Group className="m-10 mx-auto">
        <CgMenuGridR className="mt-2" size={25} color="#d9d9d9" />
        <Text className="-mr-2 text-xl font-bold text-color-accent-medium">
          لوحة التحكم
        </Text>
      </Group>

      <Group
        className="m-10 ml-auto mt-auto cursor-pointer"
        onClick={() => signOut()}
      >
        <RxExit
          className="mt-2"
          size={25}
          color="rgb(var(--color-accent-light))"
        />
        <Text className="-mr-2 text-3xl font-bold">خروج</Text>
      </Group>
    </Stack>
  );
};

export default SidePanel;
