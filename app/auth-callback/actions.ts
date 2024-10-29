"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { db } from "@/db";

export async function CreateUserIfNull() {
  try {
    const { getUser } = getKindeServerSession();
    const user: KindeUser<object> | null = await getUser();

    if (!user) {
      return { success: false };
    }

    const existingUser = await db.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!existingUser && user.email) {
      await db.user.create({
        data: {
          id: user.id,
          name: user.given_name + " " + user.family_name,
          email: user.email,
        },
      });

      return { success: true };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false };
  }
}
