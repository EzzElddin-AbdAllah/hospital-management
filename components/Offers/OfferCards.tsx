import { Card, Group, Box, Text, Stack } from "@mantine/core";
import React from "react";

const OfferCards = () => {
  return (
    <Stack className="mx-5 mb-20 lg:mx-auto lg:mb-44 lg:w-2/3" gap={100}>
      <div className="relative">
        <div className="relative z-10 p-6">
          <Card
            shadow="sm"
            className="bg-[#1D6DC4] bg-opacity-50 lg:px-32 lg:py-10"
          >
            <div className="">
              <Text className="mt-5 text-center text-4xl font-bold text-white lg:mt-10 lg:text-5xl">
                عرض خاص
              </Text>
              <Text className="mt-4 text-center text-xl text-white lg:text-3xl">
                أشعة مقطعية على القلب
              </Text>
              <Group justify="center" className="my-5 gap-20 lg:my-16">
                <Text
                  dir="rtl"
                  className="text-3xl font-bold text-white lg:text-5xl"
                >
                  50 ريال
                </Text>
                <Box className="relative">
                  <Text
                    dir="rtl"
                    className="text-3xl font-bold text-white lg:text-5xl"
                  >
                    100 ريال
                  </Text>
                  <Box className="absolute -left-6 top-1/2 h-1 w-60 -rotate-12 bg-color-error"></Box>
                </Box>
              </Group>
            </div>
          </Card>
        </div>

        <div className="absolute -inset-3 -z-0 border-[20px] border-[#8895C7]"></div>
      </div>

      <div className="relative">
        <div className="relative z-10 p-6">
          <Card
            shadow="sm"
            className="bg-[#1B3598] bg-opacity-50 lg:px-32 lg:py-10"
          >
            <div className="">
              <Text className="mt-5 text-center text-4xl font-bold text-white lg:mt-10 lg:text-5xl">
                عرض خاص
              </Text>
              <Text className="mt-4 text-center text-xl text-white lg:text-3xl">
                أشعة مقطعية على القلب
              </Text>
              <Group justify="center" className="my-5 gap-20 lg:my-16">
                <Text
                  dir="rtl"
                  className="text-3xl font-bold text-white lg:text-5xl"
                >
                  50 ريال
                </Text>
                <Box className="relative">
                  <Text
                    dir="rtl"
                    className="text-3xl font-bold text-white lg:text-5xl"
                  >
                    100 ريال
                  </Text>
                  <Box className="absolute -left-6 top-1/2 h-1 w-60 -rotate-12 bg-color-error"></Box>
                </Box>
              </Group>
            </div>
          </Card>
        </div>

        <div className="absolute -inset-3 -z-0 border-[20px] border-[#89B1DD]"></div>
      </div>

      <div className="relative">
        <div className="relative z-10 p-6">
          <Card
            shadow="sm"
            className="bg-color-accent-light/50 lg:px-32 lg:py-10"
          >
            <div className="">
              <Text
                className="mt-5 text-center text-4xl font-bold text-color-accent-medium lg:mt-10
                  lg:text-5xl"
              >
                عرض خاص
              </Text>
              <Text className="mt-4 text-center text-xl text-color-accent-medium lg:text-3xl">
                أشعة مقطعية على القلب
              </Text>
              <Group justify="center" className="my-5 gap-20 lg:my-16">
                <Text
                  dir="rtl"
                  className="text-3xl font-bold text-color-accent-medium lg:text-5xl"
                >
                  50 ريال
                </Text>
                <Box className="relative">
                  <Text
                    dir="rtl"
                    className="text-3xl font-bold text-color-accent-medium lg:text-5xl"
                  >
                    100 ريال
                  </Text>
                  <Box className="absolute -left-6 top-1/2 h-1 w-60 -rotate-12 bg-color-error"></Box>
                </Box>
              </Group>
            </div>
          </Card>
        </div>

        <div className="absolute -inset-3 -z-0 border-[20px] border-[#89B1DD]"></div>
      </div>
    </Stack>
  );
};

export default OfferCards;
