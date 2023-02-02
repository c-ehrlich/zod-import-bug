import z from "zod";

export const helloSchemaWorking = z.object({ text: z.string().min(1) });
