import { createTRPCRouter } from "./trpc";
import { workingRouter } from "./routers/working";
import { brokenRouter } from "./routers/broken";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  working: workingRouter,
  broken: brokenRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
