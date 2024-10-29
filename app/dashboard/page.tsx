import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DashboardPresentations from "@/components/DashboardPresentations";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  const presentations = await db.generatedPowerpoints.findMany({
    where: {
      ownerId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <MaxWidthWrapper>
        <h1 className="text-4xl font-bold px-4 text-gray-800 mb-12">
          Your Presentations
        </h1>
        <DashboardPresentations presentations={presentations} />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
