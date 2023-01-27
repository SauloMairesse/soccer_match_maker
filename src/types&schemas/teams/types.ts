import { teams } from "@prisma/client";

export type Team = Omit<teams, 'id' | 'createdAt'>
