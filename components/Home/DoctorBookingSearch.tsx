import { Input, Button, Group, Stack, Text, Anchor } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

const DoctorBookingSearch = () => {
  return (
    <>
      <div className="h-2 shadow-md"></div>
      <Group justify="center" className="py-10 shadow-md">
        <Stack>
          <Text className="mb-6 text-center text-5xl font-bold">
            للحجز لدى دكتور
          </Text>
          <Group className="mx-4 flex-nowrap">
            <Input
              size="xl"
              radius={16}
              placeholder="ابحث عن مستشفى"
              leftSection={
                <CiSearch size={30} color="rgb(var(--color-accent-light))" />
              }
              className="lg:w-[700px]"
            />
            <Anchor href="/res">
              <Button
                variant="filled"
                size="lg"
                className="bg-color-accent-medium font-normal lg:ml-4"
              >
                حجز
              </Button>
            </Anchor>
          </Group>
        </Stack>
      </Group>
    </>
  );
};

export default DoctorBookingSearch;
