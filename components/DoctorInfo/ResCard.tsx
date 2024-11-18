"use client";

import { Badge, Button, Text, Title } from "@mantine/core";
import { MdArrowBackIos } from "react-icons/md";

const ResCard = () => {
  return (
    <div
      className="mx-5 mb-32 flex items-center justify-center rounded-[44px] bg-white py-7
        lg:mx-10"
      style={{
        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="mb-10">
        <Title
          order={3}
          className="mb-4 text-center text-3xl font-bold lg:text-4xl"
        >
          احجز موعدك
        </Title>
        <Text className="mx-5 mb-10 text-center text-xl text-color-accent-medium lg:text-2xl">
          احجز اونلاين برقم الهاتف، وبدون الحاجه للتسجيل
        </Text>

        <div className="-mr-24 grid grid-cols-5 gap-2 lg:mr-36 lg:gap-10">
          <div className="ml-3">
            <Button className="h-fit w-20 rounded-lg bg-color-accent-dark py-1 text-sm text-white">
              يوم آخر
            </Button>
            <MdArrowBackIos
              className="mt-24 bg-transparent text-gray-300"
              size={24}
              style={{ width: 55, height: 55 }}
            />
          </div>

          <div className="hidden flex-col items-center gap-4 lg:flex">
            <Badge
              className="mb-2 h-10 w-20 rounded-lg bg-color-accent-light pl-5 text-base font-medium
                leading-none text-black"
            >
              <span>الثلاثاء</span>
              <br />
              <span className="pl-1">2/8</span>
            </Badge>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              1:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              2:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              3:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              5:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              6:00م
            </Button>
            <Button className="h-fit w-20 rounded-lg bg-[#8AAB58] text-base text-black">
              احجز
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Badge
              className="mb-2 h-10 w-20 rounded-lg bg-color-accent-light pl-5 text-base font-medium
                leading-none text-black"
            >
              <span>الاثنين</span>
              <br />
              <span className="pl-1">1/8</span>
            </Badge>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              1:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              2:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              3:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              5:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              6:00م
            </Button>
            <Button className="h-fit w-20 rounded-lg bg-[#8AAB58] text-base text-black">
              احجز
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Badge
              className="mb-2 h-10 w-20 rounded-lg bg-color-accent-light py-2 pl-7 text-base font-medium
                text-black"
            >
              غداً
            </Badge>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              1:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              2:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              3:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              5:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              6:00م
            </Button>
            <Button className="h-fit w-20 rounded-lg bg-[#8AAB58] text-base text-black">
              احجز
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Badge
              className="mb-2 h-10 w-20 rounded-lg bg-color-accent-light py-2 pl-6 text-base font-medium
                text-black"
            >
              اليوم
            </Badge>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              1:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              2:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              3:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              5:00م
            </Button>
            <Button
              variant="filled"
              color="#ebedf0"
              className="mb-2 h-fit w-20 rounded-lg text-base text-black"
              dir="rtl"
            >
              6:00م
            </Button>
            <Button className="h-fit w-20 rounded-lg bg-[#8AAB58] text-base text-black">
              احجز
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
