"use client";

import { Text, Title, List } from "@mantine/core";

const AboutClinics = () => {
  return (
    <div
      className="mx-5 mt-10 rounded-[44px] bg-white p-8 lg:p-10 xl:mx-32"
      style={{
        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Section Title */}
      <Title
        order={2}
        className="mb-6 text-right text-3xl font-bold lg:text-4xl"
      >
        عن عيادات المركز
      </Title>

      {/* Main Description */}
      <Text
        className="mb-8 ml-auto text-justify text-lg text-color-accent-medium lg:px-10 lg:text-2xl"
        dir="rtl"
        // style={{
        // 	maxWidth: "65ch",
        // }}
      >
        أول مركز طبي يقدم خدمات علاجيه بتكنولوجیا عالية ومرخص للعلاج بالاكسجين
        المضغوط. كما تتوفر في المركز خدمات طبية مقدمه على ايدي أطباء ذو خبره في
        مجالات : صحة وعلاج الاسنان - الجلدية والتجميل والليزر - الامراض الباطنية
        - امراض الاطفال - وامراض النساء والولادة والتجميل النسائي الجراحي -
        الأمراض العصبية والعضلية - علاج اضطرابات النوم والدبو - أمراض الصدرية -
        قسم الزيارات المنزلية - الأشعة- المختبرات.
      </Text>

      <Title className="mb-6 text-right text-2xl font-normal">
        التخصصات الطبية
      </Title>

      {/* Specialties Section */}
      <div
        className="mb-6 flex justify-end text-right text-color-accent-medium md:gap-24 lg:gap-40
          lg:px-20"
      >
        <List
          className="space-y-3 text-sm lg:text-xl"
          styles={{
            item: {
              listStyleType: "disc",
              paddingInlineStart: "1em",
              listStylePosition: "inside",
              direction: "rtl",
            },
          }}
        >
          <List.Item>صدر وجهاز تنفسي</List.Item>
          <List.Item>الطب العام</List.Item>
          <List.Item>معامل تحاليل</List.Item>
        </List>
        <List
          size="xl"
          className="space-y-3 text-sm lg:text-xl"
          styles={{
            item: {
              listStyleType: "disc",
              paddingInlineStart: "1em",
              listStylePosition: "inside",
              direction: "rtl",
            },
          }}
        >
          <List.Item>أنف وأذن وحنجرة</List.Item>
          <List.Item>باطنية</List.Item>
          <List.Item>نساء وولادة</List.Item>
        </List>
        <List
          size="xl"
          className="space-y-3 text-sm lg:text-xl"
          styles={{
            item: {
              listStyleType: "disc",
              paddingInlineStart: "1em",
              listStylePosition: "inside",
              direction: "rtl",
            },
          }}
        >
          <List.Item>جلدية</List.Item>
          <List.Item>أسنان</List.Item>
          <List.Item>أطفال</List.Item>
          <List.Item>عظام</List.Item>
        </List>
      </div>
    </div>
  );
};

export default AboutClinics;
