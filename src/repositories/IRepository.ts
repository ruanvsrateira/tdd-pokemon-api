import { Pokemon } from "@prisma/client";
import { IPokemon } from "../interfaces/pokemon";

export interface IRepository {
  getAll(): Promise<Pokemon[]>;
  create(pokemon: IPokemon): Promise<Pokemon>;
  deleteById(id: number): Promise<Pokemon | null>;
  updateById(id: number, pokemon: IPokemon): Promise<Pokemon | null>;
  getById(id: number): Promise<Pokemon | null>;
  getByName(name: string): Promise<Pokemon | null>;
}
