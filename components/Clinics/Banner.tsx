"use client";

import { Badge, Container, Group, Rating, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <Container
      className="h-screen min-w-full p-0"
      dir="rtl"
      style={{
        background: `linear-gradient(
				to right,
				rgb(var(--color-accent-dark)),
				rgb(var(--color-accent-dark)) calc(200vw / 3),
				rgb(var(--color-accent-medium)) calc(100vw / 3),
				rgb(var(--color-accent-medium))
				)`,
      }}
    >
      <div className="absolute bottom-0 right-0 hidden max-w-[70%] scale-x-[-1] lg:block">
        <Image
          className="w-full"
          src={
            "https://res.cloudinary.com/dmkoec84b/image/upload/v1728984838/doctor-full_czjjdw.png"
          }
          width={800}
          height={800}
          alt="doctor-full"
        />
      </div>

      <div
        className="mr-auto flex h-screen flex-col items-center justify-center gap-32 lg:w-2/3
          lg:items-end"
      >
        <Stack align="center" className="lg:ml-14">
          <Text className="text-4xl font-bold text-white md:text-5xl lg:text-7xl">
            احجز موعدك الآن
          </Text>
          <Group align="center" mt={5} className="flex-col lg:flex-row">
            <Text className="text-xl font-bold text-white md:text-2xl">
              تقيم المركز لأكثر من 11542 زائر
            </Text>
            <Rating
              value={4.5}
              fractions={2}
              readOnly
              dir="ltr"
              className="scale-x-[-1]"
            />
          </Group>
        </Stack>

        <Badge
          dir="ltr"
          color="rgb(var(--color-accent-medium))"
          rightSection={
            <div className="rounded-full bg-[#194ba9] p-2 text-white">
              <FaPhoneAlt size={25} className="" />
            </div>
          }
          className="-mb-8 -mr-8 flex items-center justify-around rounded-full px-10 py-8 shadow-lg
            lg:self-start lg:px-20 lg:py-12"
        >
          <Text className="text-2xl text-white lg:text-3xl">+971325445622</Text>
        </Badge>
      </div>
    </Container>
  );
};

export default Banner;
