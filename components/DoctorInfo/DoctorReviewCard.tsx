import { Card, Group, Rating, Text, Title } from "@mantine/core";
import { FaQuoteRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";

interface Props {
  name?: string;
  price?: number;
  specialty?: string;
}

const DoctorReviewCard = ({ name, price, specialty }: Props) => {
  return (
    <div className="mx-5 flex justify-center lg:mx-10">
      <Card
        shadow="sm"
        padding="lg"
        radius="xl"
        className="rounded-[44px] bg-white p-6"
        style={{
          boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Doctor's Information */}
        <div className="p-8 text-right">
          <Title order={2} className="mb-4 text-2xl font-bold lg:text-4xl">
            {name}
          </Title>

          <Text className="mb-4 flex items-center justify-end text-lg text-color-accent-medium lg:text-2xl">
            {specialty}
            <GiStethoscope
              size={24}
              className="ml-2 scale-x-[-1] text-gray-700"
            />
          </Text>

          <Text className="mb-4 flex items-center justify-end text-lg text-color-accent-medium lg:text-2xl">
            الكشيفة: {price} درهم اماراتي
            <FcMoneyTransfer size={24} className="ml-2" />
          </Text>

          <Group className="justify-center">
            <Text className="text-lg font-normal text-color-accent-light lg:text-2xl">
              أظهر التعليقات
            </Text>
            <Text className="-mt-2 text-lg font-normal lg:text-2xl">
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
        <div className="mx-auto lg:w-[46%]">
          <Card
            shadow="xs"
            padding="md"
            radius={"none"}
            className="rounded-bl-[48px] rounded-br-[48px] bg-[#e7e7e7] lg:rounded-bl-none
              lg:rounded-tl-[48px]"
          >
            <div className="flex flex-col">
              <Group className="flex flex-nowrap items-start">
                <Text className="mx-auto w-[70%] text-right text-color-accent-medium">
                  طاقم طبي علي مستوي عالي من الحرفيه.. ومتابعه دقيقه من الدكتوره
                  طلال.. الاهتمام الكبير بحالتك يجعلك تحس بأنك في مكان أمين تثق
                  به.. طبعا ناهيك عن النظافه والتعقيم المستمر لكل الأدوات.. ارشح
                  المركز لكل معارفي
                </Text>
                <FaQuoteRight
                  className="mt-2 text-color-accent-medium"
                  size={30}
                />
              </Group>
              <Group className="mt-2 justify-start">
                <Rating
                  value={4.5}
                  fractions={2}
                  readOnly
                  size="sm"
                  className="scale-x-[-1]"
                />
                <Text className="text-sm text-color-accent-medium">زائر</Text>
              </Group>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default DoctorReviewCard;
