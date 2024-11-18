import { Box, Card, Container, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <Container className="min-w-full p-0">
      <div className="relative flex h-[95vh] items-center justify-center bg-[#999999] bg-opacity-80">
        <Image
          className="absolute left-0 top-0 -z-20"
          src={"/doctor-bg-gray.jpeg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="doctor-bg-gray"
        />

        <Stack align="center" className="mt-32 lg:mt-36">
          <Text className="mb-10 text-5xl font-bold text-color-accent-dark lg:text-7xl">
            احجز الآن
          </Text>

          <div className="relative">
            <div className="relative z-10 p-6">
              <Card shadow="sm" className="bg-[#1D4571] bg-opacity-50 lg:px-32">
                <div className="">
                  <Text className="text-center text-3xl font-bold text-white lg:text-5xl">
                    عرض خاص
                  </Text>
                  <Text className="mt-4 text-center text-xl text-white lg:text-3xl">
                    أشعة مقطعية على القلب
                  </Text>
                  <Group gap={100} my={50} justify="center">
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
        </Stack>
      </div>
    </Container>
  );
};

export default Banner;
