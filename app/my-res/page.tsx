import { Stack } from "@mantine/core";
import Banner from "@/components/MyRes/Banner";
import Appointments from "@/components/MyRes/Appointments";

const Res = () => {
  return (
    <Stack>
      <Banner />
      <Appointments showCurrent={true} />
    </Stack>
  );
};

export default Res;
