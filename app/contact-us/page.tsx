"use client";

import Banner from "@/components/ContactUs/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactSidebar from "@/components/ContactUs/ContactSidebar";
import { Grid, Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack gap={0}>
      <Banner />
      <Grid className="bg-[#F2F2F7]" gutter={0}>
        <Grid.Col span={8}>
          <ContactForm />
        </Grid.Col>
        <Grid.Col span={3} offset={1}>
          <ContactSidebar />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default page;
