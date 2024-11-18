import { Group, Stack, Text } from "@mantine/core";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";

const ContactSidebar = () => {
  return (
    <Stack className="mt-10 gap-5 p-4 lg:mr-10 lg:mt-20 lg:gap-20">
      <Group className="mb-4 flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <AiOutlineUser size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">تواصل معنا (مستخدمين)</Text>
          <Text size="sm" className="text-color-accent-medium">
            clients@mail.com
          </Text>
        </div>
      </Group>

      <Group className="mb-4 flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <FaUserDoctor size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">تواصل معنا (أطباء)</Text>
          <Text size="sm" className="text-color-accent-medium">
            doctors@mail.com
          </Text>
        </div>
      </Group>

      <Group className="mb-4 flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <IoBriefcaseOutline size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">تواصل معنا (لحلول الاعمال)</Text>
          <Text size="sm" className="text-color-accent-medium">
            sales@mail.com
          </Text>
        </div>
      </Group>

      <Group className="mb-4 flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <HiOutlineMegaphone size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">اعلان عبر الموقع</Text>
          <Text size="sm" className="text-color-accent-medium">
            share@mail.com
          </Text>
        </div>
      </Group>

      <Group className="mb-4 flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <IoBriefcaseOutline size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">انضم لنا</Text>
          <Text size="sm" className="text-color-accent-medium">
            الوظائف
          </Text>
        </div>
      </Group>

      <Group className="flex-row-reverse text-right">
        <div className="rounded-md bg-[#1d52af] p-2">
          <FiMapPin size={30} className="text-white" />
        </div>
        <div>
          <Text className="text-black">العنوان</Text>
          <Text size="sm" className="text-nowrap text-color-accent-medium">
            الامارات - ابو ظبي
          </Text>
        </div>
      </Group>
    </Stack>
  );
};

export default ContactSidebar;
