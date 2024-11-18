import { Text } from "@mantine/core";

const DiscountBadge = () => {
  return (
    <div
      className="mx-auto mb-20 mt-10 w-fit rounded-full p-6 lg:rounded-[32px]"
      dir="rtl"
      style={{
        boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Text className="text-5xl font-bold text-color-accent-dark lg:text-6xl">
        خصم 50%
      </Text>
    </div>
  );
};

export default DiscountBadge;
