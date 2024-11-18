import { Divider, Stack, Text } from "@mantine/core";
import React from "react";
import Appointments from "../MyRes/Appointments";

const HistoryRes = () => {
  return (
    <Stack className="" dir="rtl">
      <div className="w-fit">
        <Text className="text-xl font-bold text-color-accent-dark lg:text-3xl">
          الحجوزات السابقة
        </Text>
        <Divider my="md" color="rgb(var(--color-accent-dark))" />
      </div>
      <div>
        <Appointments showCurrent={false} />
      </div>
    </Stack>
  );
};

export default HistoryRes;
