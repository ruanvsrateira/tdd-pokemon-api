import { Pokemon } from "@prisma/client";

export const GenerateIncrementalIdUtil = (pokemons: Pokemon[]) => {
  if (pokemons.length < 1) return 1;

  return pokemons.reduce((higher, pokemon) => pokemon.id + 1, 0);
};
