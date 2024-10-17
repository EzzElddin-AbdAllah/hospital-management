import { Card, Group, Rating, Text, Title } from "@mantine/core";
import { FaQuoteRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";

const DoctorReviewCard = () => {
	return (
		<div className="flex justify-center mx-5 lg:mx-10">
			<Card
				shadow="sm"
				padding="lg"
				radius="xl"
				className="bg-white p-6 rounded-[44px]"
				style={{
					boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
				}}
			>
				{/* Doctor's Information */}
				<div className="text-right p-8">
					<Title order={2} className="text-2xl lg:text-4xl font-bold mb-4">
						دكتور طلال اسماعيل
					</Title>

					<Text className="text-[#1B77CB] text-lg lg:text-2xl flex items-center justify-end mb-4">
						أخصائي أمراض جلدية وتجميل وليزر
						<GiStethoscope
							size={24}
							className="ml-2 text-gray-700 scale-x-[-1]"
						/>
					</Text>

					<Text className="text-lg lg:text-2xl flex items-center justify-end text-[#1B77CB] mb-4">
						الكشيفة: 100 درهم اماراتي
						<FcMoneyTransfer size={24} className="ml-2" />
					</Text>

					<Group className="justify-center">
						<Text className="text-lg lg:text-2xl font-normal text-[#6DB5DE]">
							أظهر التعليقات
						</Text>
						<Text className="text-lg lg:text-2xl font-normal -mt-2">
							التقييم العام من 1235 زاروا الدكتور
						</Text>
						<Rating
							value={4.5}
							fractions={2}
							readOnly
							size={25}
							className="scale-x-[-1]"
						/>
					</Group>
				</div>

				{/* Comment Section */}
				<div className="lg:w-[46%] mx-auto">
					<Card
						shadow="xs"
						padding="md"
						radius={"none"}
						className="bg-[#e7e7e7] lg:rounded-tl-[48px] rounded-br-[48px] rounded-bl-[48px] lg:rounded-bl-none"
					>
						<div className="flex flex-col">
							<Group className="flex flex-nowrap items-start">
								<Text className="text-[#1b77cb] text-right w-[70%] mx-auto">
									طاقم طبي علي مستوي عالي من الحرفيه.. ومتابعه دقيقه من الدكتوره
									طلال.. الاهتمام الكبير بحالتك يجعلك تحس بأنك في مكان أمين تثق
									به.. طبعا ناهيك عن النظافه والتعقيم المستمر لكل الأدوات.. ارشح
									المركز لكل معارفي
								</Text>
								<FaQuoteRight className="text-[#1b77cb] mt-2 " size={30} />
							</Group>
							<Group className="justify-start mt-2">
								<Rating
									value={4.5}
									fractions={2}
									readOnly
									size="sm"
									className="scale-x-[-1]"
								/>
								<Text className="text-[#1b77cb] text-sm">زائر</Text>
							</Group>
						</div>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default DoctorReviewCard;
