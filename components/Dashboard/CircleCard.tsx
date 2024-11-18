"use client";

import { RingProgress, Text, Card, Center } from "@mantine/core";

interface TotalBookingsCardProps {
  label: string;
  number: number;
  circleColor: string;
  progress: number;
}

const TotalBookingsCard = ({
  label,
  number,
  circleColor,
  progress,
}: TotalBookingsCardProps) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      className="mt-2 flex h-48 w-60 items-center justify-center rounded-3xl border bg-white
        xl:mt-5"
    >
      <Center className="flex flex-col gap-2">
        <RingProgress
          size={100}
          thickness={6}
          roundCaps
          sections={[{ value: progress, color: circleColor, tooltip: label }]}
          label={
            <Text size="lg" className="text-center text-color-accent-dark">
              {number}
            </Text>
          }
        />
        <Text size="md" className="text-center text-color-accent-medium">
          {label}
        </Text>
      </Center>
    </Card>
  );
};

export default TotalBookingsCard;
