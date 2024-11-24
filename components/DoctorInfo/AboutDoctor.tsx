"use client";

import { Text, Title, List } from "@mantine/core";

interface Props {
  intro?: string;
  certificates?: { title: string }[];
}

const AboutDoctor = ({ intro, certificates }: Props) => {
  return (
    <div
      className="m-5 rounded-[44px] bg-white px-10 py-10 lg:m-10 lg:px-20"
      style={{
        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Title
        order={2}
        className="mb-4 text-right text-2xl font-bold lg:mb-6 lg:text-4xl"
      >
        معلومات عن الدكتور
      </Title>

      <Text
        dir="rtl"
        className="mb-4 text-right text-base text-color-accent-medium lg:mb-8 lg:pl-72 lg:text-2xl"
      >
        {intro}
      </Text>

      <Title className="text-right text-xl font-normal lg:text-2xl">
        الشهادات التعليمية
      </Title>

      <div className="flex justify-end text-right text-color-accent-medium">
        <List
          className="space-y-2 text-base lg:text-2xl"
          styles={{
            item: {
              listStyleType: "disc",
              paddingInlineStart: "1em",
              listStylePosition: "inside",
              direction: "rtl",
            },
          }}
        >
          {certificates?.map((certificate, index) => (
            <List.Item key={index}>{certificate.title}</List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default AboutDoctor;
