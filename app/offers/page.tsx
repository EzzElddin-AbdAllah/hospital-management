import Banner from "@/components/Offers/Banner";
import DiscountBadge from "@/components/Offers/DiscountBadge";
import OfferCards from "@/components/Offers/OfferCards";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack>
      <Banner />
      <DiscountBadge />
      <OfferCards />
    </Stack>
  );
};

export default page;
