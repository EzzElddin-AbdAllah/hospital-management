"use client";

import { Group, Card, Text } from "@mantine/core";
import Image from "next/image";

const News = () => {
  return (
    <Group
      direction="column"
      align="center"
      justify="center"
      className="space-y-4"
    >
      <Text className="text-5xl font-bold">الأخبار</Text>
      <Group gap={30} wrap="nowrap">
        {[
          {
            img: "/family.png",
            text: "مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ رضيع مصاب بمرض نادر وخطير",
          },
          {
            img: "/family.png",
            text: "افتتاح أعمال المؤتمر الدولي الثالث للسكري بمستشفى الدكتور سليمان الحبيب بالسويدي",
          },
          {
            img: "/family.png",
            text: "مستشفى الدكتور سليمان الحبيب بالتخصصي يُجري جراحة معقدة لعلاج جنف مضاعف بدرجة 120",
          },
        ].map((props, index) => (
          <Card
            radius={"none"}
            key={index}
            mx={20}
            bg={"#C5CAE0"}
            className={`w-1/3 ${
            index === 0
                ? "rounded-tl-[66px]"
                : index === 2
                  ? "rounded-tr-[66px]"
                  : ""
            }`}
          >
            <Card.Section className="flex justify-center">
              <Image
                src={props.img}
                width={180}
                height={180}
                alt={`News image ${index}`}
                className="m-16 rotate-3"
              />
            </Card.Section>
            <Text className="px-8 pb-16 text-center text-2xl font-semibold">
              {props.text}
            </Text>
          </Card>
        ))}
      </Group>
    </Group>
  );
};

export default News;
