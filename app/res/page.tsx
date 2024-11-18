import Banner from "@/components/Res/Banner";
import BookingForm from "@/components/Res/BookingForm";
import DoctorSVG from "@/components/Res/DoctorSVG";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack gap={0} className="relative isolate">
      <div className="z-0">
        <Banner />
      </div>

      <div
        className="absolute left-10 top-[20%] z-10 scale-150 md:left-0 md:top-[10%] md:scale-100
          lg:-left-32 lg:top-0 lg:scale-75 xl:left-0 xl:scale-100"
      >
        <DoctorSVG />
      </div>

      <div>
        <BookingForm />
      </div>
    </Stack>
  );
};

export default page;
