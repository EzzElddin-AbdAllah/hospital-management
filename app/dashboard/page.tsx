"use client";

import DashboardAuth from "@/components/Dashboard/DashboardAuth";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (status === "loading") return;

    if (session && session.user.role === "admin") {
      setIsAdmin(true);
    }
  }, [session, status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!isAdmin) {
    return <DashboardAuth />;
  }

  return (
    <div>
      <DashboardMain />
    </div>
  );
};

export default DashboardPage;
