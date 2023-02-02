import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const helloSchemaBroken = z.object({ text: z.string().min(1) });

export const brokenRouter = createTRPCRouter({
  hello: publicProcedure.input(helloSchemaBroken).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
});
