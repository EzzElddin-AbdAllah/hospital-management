"use client";

import { Text, Title, List } from "@mantine/core";

const AboutDoctor = () => {
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

      <Text className="mb-4 text-right text-base text-color-accent-medium lg:mb-8 lg:pl-72 lg:text-2xl">
        الدكتور طلال اسماعيل هو دكتور الأمراض الجلدية، فهو حاصل على درجة
        الماجستير في الأمراض الجلدية من جامعة غرب ميشيغان
        <br />
        يتمتّع الدكتور طلال اسماعيل بخبرةٍ واسعة تتجاوز 10 سنوات
      </Text>

      <Title className="text-right text-xl font-normal lg:text-2xl">
        الشهادات التعليمية
      </Title>

      <div className="flex justify-end text-right text-color-accent-medium">
        <List
          className="space-y-2 text-lg lg:text-2xl"
          styles={{
            item: {
              listStyleType: "disc",
              paddingInlineStart: "1em",
              listStylePosition: "inside",
              direction: "rtl",
            },
          }}
        >
          <List.Item>ماجستير, جامعة الأزهر, مصر</List.Item>
        </List>
      </div>
    </div>
  );
};

export default AboutDoctor;
