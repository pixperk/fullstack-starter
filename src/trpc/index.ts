import { prisma } from "@/prisma";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { z } from "zod";
export const appRouter = router({
 
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
