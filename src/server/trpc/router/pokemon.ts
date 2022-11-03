import { z } from "zod";
import { PokemonClient } from 'pokenode-ts';
import * as trpc from "@trpc/server";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const pokemonRouter = router({
    getPokemonById: publicProcedure
    //Accept number or undefined as input
    .input(z.number().optional())
    .query(async ({ input }) => { 
        const pokemonClient = new PokemonClient();
        let pokemon = await pokemonClient.getPokemonById(input ?? 1)
        return { name: pokemon.name, id: pokemon.id, image: pokemon.sprites.front_default };
    }),
});

export type AppRouter = typeof pokemonRouter;