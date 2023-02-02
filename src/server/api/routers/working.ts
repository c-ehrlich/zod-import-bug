import { createTRPCRouter, publicProcedure } from "../trpc";
import { helloSchemaWorking } from "./working.schema";

export const workingRouter = createTRPCRouter({
  hello: publicProcedure.input(helloSchemaWorking).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
});
