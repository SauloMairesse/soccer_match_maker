import { fields } from "@prisma/client";

export type Field  = Omit<fields, "id">