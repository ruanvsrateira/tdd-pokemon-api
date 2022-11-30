import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { InMemoryRepository } from "../repositories/in-memory/InMemoryRepository";
import { PrismaRepository } from "../repositories/prisma/PrismaRepository";
import { CreatePokemonService } from "../services/createPokemonService";
import { DeletePokemonByIdService } from "../services/deletePokemonByIdService";
import { GetAllPokemonsService } from "../services/getAllPokemonsService";
import { GetPokemonByIdService } from "../services/getPokemonByIdService";
import { UpdatePokemonService } from "../services/updatePokemonService";

class pokemonController {
  constructor() {}

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const pokemons = await GetAllPokemonsService(PrismaRepository);

      return res.status(200).send({ pokemons });
    } catch (err) {
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const pokemon = await GetPokemonByIdService(PrismaRepository, Number(id));

      return res.status(200).send({ pokemon });
    } catch (err) {
      if (err == "Error: pokemon not founded by this id")
        return res.status(404).send({
          error: "pokemon not founded by this id",
        });

      return res.status(500).send({ error: "unknown error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, type, weight } = req.body;

      const pokemonCreated = await CreatePokemonService(PrismaRepository, {
        name,
        type,
        weight,
      });

      return res.status(201).send({ pokemonCreated });
    } catch (err) {
      if (err == "Error: invalid arguments")
        return res.status(400).send({ error: "invalid arguments" });

      if (err == "Error: pokemon already exists by this name")
        return res
          .status(403)
          .send({ error: "pokemon already exists by this name" });

      return res.status(500).send({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (!id) throw new Error("id invalid");

      const pokemonDeleted = await DeletePokemonByIdService(
        PrismaRepository,
        Number(id)
      );

      return res.status(200).send({ pokemonDeleted });
    } catch (err) {
      if (err == "Error: id not valid")
        return res.status(400).send({ error: "id invalid" });

      if (err == "Error: pokemon not founded by this id")
        return res.status(404).send({ error: "pokemon not founded by this id" });

      return res.status(500).send({ error: "unknown error" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, type, weight } = req.body;

      if (!id) throw new Error("id invalid");

      const pokemonUpdated = await UpdatePokemonService(
        PrismaRepository,
        Number(id),
        {
          name,
          type,
          weight,
        }
      );

      return res.status(200).send({ pokemonUpdated });
    } catch (err) {
      if (err == "Error: id not valid")
        return res.status(400).send({ error: "id invalid" });

      if (err == "Error: invalid arguments")
        return res.status(400).send({ error: "invalid arguments" });

      if (err == "Error: pokemon not founded by this id")
        return res
          .status(404)
          .send({ error: "pokemon not founded by this id" });

      return res.status(500).send({ error: "unknown error" });
    }
  }
}

export const PokemonController = new pokemonController();
