import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { pokemonRouter } from "./pokemon";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  //Add pokemonRouter to appRouter
  pokemon: pokemonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
