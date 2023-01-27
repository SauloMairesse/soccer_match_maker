import { players } from "@prisma/client";

export type Player = Omit <players, "id" >