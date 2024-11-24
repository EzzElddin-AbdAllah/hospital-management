"use client";

import AboutDoctor from "@/components/DoctorInfo/AboutDoctor";
import Banner from "@/components/DoctorInfo/Banner";
import DoctorReviewCard from "@/components/DoctorInfo/DoctorReviewCard";
import ResCard from "@/components/DoctorInfo/ResCard";
import { Doctor } from "@/types/Doctor";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { doctorId: string } }) => {
  const doctorId = params.doctorId;

  const [doctor, setDoctor] = useState<Doctor>();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/doctor/${doctorId}`);
        const data = await response.json();
        if (response.ok) {
          setDoctor(data.doctor);
        } else {
          console.error("Failed to load doctor");
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    fetchDoctor();
  }, []);

  return (
    <Stack>
      <Banner
        name={doctor?.name}
        specialty={doctor?.specialty}
        phone={doctor?.phone}
      />
      <DoctorReviewCard
        name={doctor?.name}
        specialty={doctor?.specialty}
        price={doctor?.price}
      />
      <AboutDoctor intro={doctor?.intro} certificates={doctor?.certificates} />
      <ResCard
        _id={doctor?._id}
        name={doctor?.name}
        schedule={doctor?.schedule}
      />
    </Stack>
  );
};

export default Page;
