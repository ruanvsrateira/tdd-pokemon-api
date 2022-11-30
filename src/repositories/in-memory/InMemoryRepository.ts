import { Pokemon } from "@prisma/client";
import { IPokemon } from "../../interfaces/pokemon";
import { GenerateIncrementalIdUtil } from "../../utils/generatorIncrementalIdUtil";
import { IRepository } from "../IRepository";

class inMemoryRepository implements IRepository {
  pokemons: Pokemon[] = [
    {
      id: 12,
      name: "example",
      type: ["any"].toString(),
      weight: 12.0,
    },
    {
      id: 20,
      name: "test for updated service",
      type: ["any"].toString(),
      weight: 14.0,
    },
    {
      id: 19,
      name: "test for get by name and by id service",
      type: ["any"].toString(),
      weight: 155.1,
    },
  ];

  async getAll() {
    return this.pokemons;
  }

  async create(pokemonData: IPokemon) {
    const pokemon = {
      id: pokemonData.id
        ? pokemonData.id
        : GenerateIncrementalIdUtil(this.pokemons),
      name: pokemonData.name,
      type: pokemonData.type.toString(),
      weight: pokemonData.weight,
    };

    this.pokemons.push(pokemon);

    return pokemon;
  }

  async deleteById(id: number): Promise<Pokemon | null> {
    const pokemonDeletedIndex = this.pokemons.findIndex(
      (pokemon) => pokemon.id == id
    );

    let pokemonDeleted;

    if (pokemonDeletedIndex > -1) {
      pokemonDeleted = this.pokemons[pokemonDeletedIndex];

      this.pokemons.splice(pokemonDeletedIndex, 1);
    } else {
      pokemonDeleted = null;
    }

    return pokemonDeleted;
  }

  async updateById(id: number, pokemon: IPokemon) {
    let pokemonUpdated = this.pokemons.find((pokemon) => pokemon.id == id);

    if (!pokemonUpdated) return null;

    pokemonUpdated = {
      id,
      name: pokemon.name,
      type: pokemon.type.toString(),
      weight: pokemon.weight,
    };

    return pokemonUpdated;
  }

  async getByName(name: string) {
    const pokemonFounded = this.pokemons.find(
      (pokemon) => pokemon.name == name
    );

    if (!pokemonFounded) return null;

    return pokemonFounded;
  }

  async getById(id: number) {
    const pokemonFounded = this.pokemons.find((pokemon) => pokemon.id == id);

    if (!pokemonFounded) throw new Error("pokemon not founded by this id");

    return pokemonFounded;
  }
}

export const InMemoryRepository = new inMemoryRepository();
