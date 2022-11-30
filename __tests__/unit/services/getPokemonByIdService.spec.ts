import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { GetPokemonByIdService } from "../../../src/services/getPokemonByIdService";

describe("Testing get pokemon by id service", () => {
  it("should be returned pokemon", async () => {
    const pokemonFounded = await GetPokemonByIdService(InMemoryRepository, 19);

    expect(pokemonFounded).toHaveProperty("id");
    expect(pokemonFounded.id).toEqual(19);
  });

  it("should be throw Error invalid arguments", async () => {
    await expect(
      GetPokemonByIdService(InMemoryRepository, -1)
    ).rejects.toThrow();
  });

  it("should be throw Error pokemon not founded by this id", async () => {
    await expect(
      GetPokemonByIdService(InMemoryRepository, 9999)
    ).rejects.toThrow();
  });
});
