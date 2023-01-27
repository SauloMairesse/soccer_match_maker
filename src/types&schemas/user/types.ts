import { users } from ".prisma/client";

export type User  = Omit<users, "id" | "createdAt">