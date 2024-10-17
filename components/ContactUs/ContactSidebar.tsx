import { Group, Stack, Text } from "@mantine/core";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";

const ContactSidebar = () => {
	return (
		<Stack className="p-4 lg:mr-10 mt-10 lg:mt-20 gap-5 lg:gap-20">
			<Group className="text-right mb-4 flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<AiOutlineUser size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">تواصل معنا (مستخدمين)</Text>
					<Text size="sm" className="text-[#1B77CB]">
						clients@mail.com
					</Text>
				</div>
			</Group>

			<Group className="text-right mb-4 flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<FaUserDoctor size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">تواصل معنا (أطباء)</Text>
					<Text size="sm" className="text-[#1B77CB]">
						doctors@mail.com
					</Text>
				</div>
			</Group>

			<Group className="text-right mb-4 flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<IoBriefcaseOutline size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">تواصل معنا (لحلول الاعمال)</Text>
					<Text size="sm" className="text-[#1B77CB]">
						sales@mail.com
					</Text>
				</div>
			</Group>

			<Group className="text-right mb-4 flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<HiOutlineMegaphone size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">اعلان عبر الموقع</Text>
					<Text size="sm" className="text-[#1B77CB]">
						share@mail.com
					</Text>
				</div>
			</Group>

			<Group className="text-right mb-4 flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<IoBriefcaseOutline size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">انضم لنا</Text>
					<Text size="sm" className="text-[#1B77CB]">
						الوظائف
					</Text>
				</div>
			</Group>

			<Group className="text-right flex-row-reverse">
				<div className="bg-[#1d52af] rounded-md p-2">
					<FiMapPin size={30} className="text-white" />
				</div>
				<div>
					<Text className="text-black">العنوان</Text>
					<Text size="sm" className="text-[#1B77CB] text-nowrap">
						الامارات - ابو ظبي
					</Text>
				</div>
			</Group>
		</Stack>
	);
};

export default ContactSidebar;
