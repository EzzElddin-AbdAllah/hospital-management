"use client";

import { Carousel } from "@mantine/carousel";
import { Card, Text, Group, Box } from "@mantine/core";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SpecialOffer = () => {
  return (
    <div className="mx-auto mt-5 flex w-full max-w-[800px] items-center justify-center px-4 lg:px-0">
      <Carousel
        withIndicators
        loop
        nextControlIcon={
          <MdArrowForwardIos
            className="bg-transparent text-gray-300 lg:-mr-44 xl:-mr-72"
            size={24}
            style={{ width: 55, height: 55 }}
          />
        }
        previousControlIcon={
          <MdArrowBackIos
            className="ml-3 bg-transparent text-gray-300 lg:-ml-44 xl:-ml-72"
            size={24}
            style={{ width: 55, height: 55 }}
          />
        }
        classNames={{
          indicators: "hidden",
        }}
      >
        <Carousel.Slide>
          <Card shadow="sm" className="bg-[#89b1dd] text-white">
            <div className="border-[8px] border-white bg-[#8d9acb] p-4 lg:border-[16px]">
              <Text className="mt-5 text-center text-2xl font-bold lg:mt-10 lg:text-5xl">
                عرض خاص
              </Text>
              <Text className="mt-2 text-center text-lg lg:mt-4 lg:text-3xl">
                أشعة مقطعية على القلب
              </Text>
              <Group justify="center" className="my-5 gap-20 lg:my-14">
                <Text dir="rtl" className="text-3xl font-bold lg:text-5xl">
                  50 ريال
                </Text>
                <Box className="relative">
                  <Text
                    dir="rtl"
                    className="text-3xl font-bold text-white lg:text-5xl"
                  >
                    100 ريال
                  </Text>
                  <Box className="absolute -left-3 top-1/2 h-1 w-32 -rotate-12 bg-color-error lg:-left-6 lg:w-60"></Box>
                </Box>
              </Group>
            </div>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="sm" className="bg-[#89b1dd] text-white">
            <div className="border-[8px] border-white bg-[#8d9acb] p-4 lg:border-[16px]">
              <Text className="mt-5 text-center text-2xl font-bold lg:mt-10 lg:text-5xl">
                عرض خاص
              </Text>
              <Text className="mt-2 text-center text-xl lg:mt-4 lg:text-3xl">
                أشعة مقطعية على القلب
              </Text>
              <Group className="my-5 gap-20 lg:my-14" justify="center">
                <Text dir="rtl" className="text-3xl font-bold lg:text-5xl">
                  100 ريال
                </Text>
                <Box className="relative">
                  <Text
                    dir="rtl"
                    className="text-3xl font-bold text-white lg:text-5xl"
                  >
                    300 ريال
                  </Text>
                  <Box className="absolute -left-3 top-1/2 h-1 w-32 -rotate-12 bg-color-error lg:-left-6 lg:w-60"></Box>
                </Box>
              </Group>
            </div>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default SpecialOffer;
