import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { UpdatePokemonService } from "../../../src/services/updatePokemonService";

describe("Testing update pokemon by id service", () => {
  it("should be return updated pokemon", async () => {
    const pokemonData = {
      name: "another pokemon",
      type: ["anotherType"],
      weight: 12.0,
    };

    const pokemonUpdated = await UpdatePokemonService(
      InMemoryRepository,
      20,
      pokemonData
    );

    expect(pokemonUpdated).toEqual({
      id: 20,
      name: pokemonData.name,
      type: pokemonData.type.toString(),
      weight: pokemonData.weight,
    });
  });

  it("should be throw error invalid arguments", async () => {
    const pokemonData = {
      name: "",
      type: [""],
      weight: -12,
    };

    await expect(
      UpdatePokemonService(InMemoryRepository, 20, pokemonData)
    ).rejects.toThrow();
  });

  it("should be throw Error pokemon not founded by this id", async () => {
    const pokemonTest = {
      name: "another name",
      type: ["another type"],
      weight: 12.0,
    };

    await expect(
      UpdatePokemonService(InMemoryRepository, -12, pokemonTest)
    ).rejects.toThrow();
  });
});
