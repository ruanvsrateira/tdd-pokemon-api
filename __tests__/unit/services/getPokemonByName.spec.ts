import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { GetPokemonByNameService } from "../../../src/services/getPokemonByNameService";

describe("Testing get pokemon by id service", () => {
  it("should be returned pokemon", async () => {
    const pokemonFounded = await GetPokemonByNameService(
      InMemoryRepository,
      "test for get by name and by id service"
    );

    expect(pokemonFounded).toHaveProperty("id");
    expect(pokemonFounded.name).toEqual(
      "test for get by name and by id service"
    );
  });

  it("should be throw Error invalid arguments", async () => {
    await expect(
      GetPokemonByNameService(InMemoryRepository, "")
    ).rejects.toThrow();
  });

  it("should be return throw Error pokemon not founded by this name", async () => {
    await expect(
      GetPokemonByNameService(InMemoryRepository, "edafaefaefaef")
    ).rejects.toThrow();
  });
});
