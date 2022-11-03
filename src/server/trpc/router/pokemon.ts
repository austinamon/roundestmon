import { z } from "zod";
import { PokemonClient } from 'pokenode-ts';
import * as trpc from "@trpc/server";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const pokemonRouter = router({
    getPokemonById: publicProcedure
    //Accept number or undefined as input
    .input(z.number().optional())
    .query(({ input }) => { 
        const pokemonClient = new PokemonClient();
        return pokemonClient.getPokemonById(input ?? 1);
    }),
});

export type AppRouter = typeof pokemonRouter;