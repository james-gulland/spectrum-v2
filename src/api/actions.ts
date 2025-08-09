"use server";

import { usersTable } from "@/db/schema";
import { db } from "..";

export const getUsers = async () => {
  const users = await db.select().from(usersTable);
  return users;
};
