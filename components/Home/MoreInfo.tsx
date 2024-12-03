"use client";

import { Carousel } from "@mantine/carousel";
import { Button, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const slides = [
  "مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ رضيع مصاب بمرض نادر وخطير",
  "مستشفى الدكتور سليمان الحبيب بالتخصصي يُجري جراحة معقدة لعلاج جنف مضاعف بدرجة '120'",
  "افتتاح أعمال المؤتمر الدولي الثالث للسكري بمستشفى الدكتور سليمان الحبيب بالسويدي مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ نادر وخطير افتتاح أعمال المؤتمر الدولي الثالث للسكري بمستشفى الدكتور سليمان الحبيب بالسويدي مستشفى الدكتور سليمان الحبيب بالخبر ينجح في إنقاذ نادر وخطير",
];

const ExpandableText = ({
  children,
  isExpanded,
}: {
  children: string;
  isExpanded: boolean;
}) => {
  return (
    <Text
      dir="rtl"
      className={`max-w-[75%] text-center text-lg md:text-2xl lg:text-3xl ${
        !isExpanded ? "line-clamp-3" : "" }`}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: !isExpanded ? 3 : "unset",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </Text>
  );
};

const MoreInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Group
      gap={0}
      className="relative mx-auto mb-20 flex h-fit w-[95%] flex-nowrap justify-around
        rounded-[35px] bg-color-accent-dark py-6 text-white md:p-10"
    >
      <Stack align="center">
        <Image
          className="lg:hidden"
          src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/medical-tools_rsumoe.jpg"
          width={200}
          height={200}
          alt="Offer Image"
        />
        <Carousel
          onClick={() => setIsExpanded(false)}
          loop
          draggable={false}
          className="mb-14"
          nextControlIcon={
            <MdArrowForwardIos
              className="bg-transparent text-gray-300"
              size={24}
              style={{ width: 40, height: 40 }}
            />
          }
          previousControlIcon={
            <MdArrowBackIos
              className="ml-3 bg-transparent text-gray-300"
              size={24}
              style={{ width: 40, height: 40 }}
            />
          }
          classNames={{
            indicators: "hidden",
          }}
        >
          {slides.map((text, index) => (
            <Carousel.Slide key={index} className="flex justify-center">
              <ExpandableText isExpanded={isExpanded}>{text}</ExpandableText>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="filled"
        className="absolute bottom-10 left-10 bg-color-accent-medium font-normal lg:m-5
          lg:scale-150"
      >
        {isExpanded ? "إظهار أقل" : "المزيد"}
      </Button>

      <Image
        className="mr-5 hidden lg:block"
        src="https://res.cloudinary.com/dmkoec84b/image/upload/v1728984839/medical-tools_rsumoe.jpg"
        width={400}
        height={400}
        alt="Offer Image"
      />
    </Group>
  );
};

export default MoreInfo;
