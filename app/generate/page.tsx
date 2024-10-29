import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { redirect } from "next/navigation";
import GenerateForm from "@/components/GenerateForm";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    redirect("/auth-callback");
  }

  return <GenerateForm />;
};

export default Page;
