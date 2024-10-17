import { Text } from "@mantine/core";

const DiscountBadge = () => {
	return (
		<div
			className="rounded-full lg:rounded-[32px] p-6 w-fit mx-auto mt-10 mb-20"
			dir="rtl"
			style={{
				boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.25)",
			}}
		>
			<Text className="text-[#011A77] text-5xl lg:text-6xl font-bold">
				خصم 50%
			</Text>
		</div>
	);
};

export default DiscountBadge;
