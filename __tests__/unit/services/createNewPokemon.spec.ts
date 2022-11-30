import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { CreatePokemonService } from "../../../src/services/createPokemonService";

describe("Testing service create new Pokemon", () => {
  it("should be return new pokemon created", async () => {
    const pokemonTest = {
      id: 123,
      name: "pokemonUnitTest",
      type: ["unitTest"],
      weight: 13.0,
    };

    const pokemonCreated = await CreatePokemonService(
      InMemoryRepository,
      pokemonTest
    );

    expect(pokemonCreated).toHaveProperty("id");
    expect(pokemonCreated.id).toEqual(pokemonTest.id);
    expect(pokemonCreated.name).toEqual(pokemonTest.name);
  });

  it("should be return throw error, already pokemon on this name", async () => {
    const pokemonTest = {
      id: 123,
      name: "pokemonUnitTest",
      type: ["unitTest"],
      weight: 13.0,
    };

    await expect(
      CreatePokemonService(InMemoryRepository, pokemonTest)
    ).rejects.toThrow();
  });
});
