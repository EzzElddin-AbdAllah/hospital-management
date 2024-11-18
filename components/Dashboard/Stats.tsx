import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import CircleCard from "./CircleCard";

interface Props {
  totalDoctors: number;
  totalappointments: number;
  appointmentsToday: number;
}

const Stats = ({
  totalDoctors,
  totalappointments,
  appointmentsToday,
}: Props) => {
  const [totalPatients, setTotalPatients] = useState(0);
  useEffect(() => {
    const fetchotalPatients = async () => {
      try {
        const data = await fetch("/api/admin/user");
        const totalUsers = await data.json();
        setTotalPatients(totalUsers.totalUsers - 1);
      } catch (error) {
        console.error("Error fetching totalPatients:", error);
      }
    };

    fetchotalPatients();
  }, []);
  const stats = [
    {
      label: "اجمالي الاطباء",
      number: totalDoctors,
      circleColor: "rgb(var(--color-accent-dark))",
      progress: 100,
    },
    {
      label: "اجمالي الحجوزات",
      number: totalappointments,
      circleColor: "rgb(var(--color-accent-dark))",
      progress: 100,
    },
    {
      label: "اجمالي عدد المرضى",
      number: totalPatients,
      circleColor: "rgb(var(--color-accent-light))",
      progress: 100,
    },
    {
      label: "عدد الحجوزات اليوم",
      number: appointmentsToday,
      circleColor: "rgb(var(--color-accent-dark))",
      progress: 100,
    },
  ];

  return (
    <Group className="flex flex-nowrap items-start justify-around">
      {stats.map((stat, index) => (
        <CircleCard
          key={index}
          label={stat.label}
          number={stat.number}
          circleColor={stat.circleColor}
          progress={stat.progress}
        />
      ))}
    </Group>
  );
};

export default Stats;
