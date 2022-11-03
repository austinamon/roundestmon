import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import React, { useState } from "react";

const Home: NextPage = () => {

  const [ids, updateIds] = useState(() => getOptionsForVote());

  const[first, second] = ids;

  // Get a pokemon from the database
  const firstPokemon = trpc.pokemon.getPokemonById.useQuery(first);
  const secondPokemon = trpc.pokemon.getPokemonById.useQuery(second);

  if (firstPokemon.isLoading || secondPokemon.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">Which Pokemon is Rounder?</div>
        <div className="p-2"/>
        <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
          <div className="w-64 h-64 flex flex-col">
            <img src={firstPokemon.data?.sprites.front_default} className="w-full"/>
            <div className="text-xl text-center capitalize mt-[-2rem]">{firstPokemon.data?.name}</div>
          </div>
          <div className="p-8">Vs</div>
          <div className="w-64 h-64 flex flex-col">
            <img src={secondPokemon.data?.sprites.front_default} className="w-full"/>
            <div className="text-xl text-center capitalize mt-[-2rem]">{secondPokemon.data?.name}</div>
          </div>
          <div className="p-2"/>
        </div>
      </div>
    </>
  );
};

export default Home;


