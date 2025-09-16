import { createTRPCRouter } from '../init';
import { messageRouter } from '@/modules/messages/server/procedures';

// Define the app router with TRPC
export const appRouter = createTRPCRouter({
  message: messageRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;