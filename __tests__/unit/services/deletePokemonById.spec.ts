import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { DeletePokemonByIdService } from "../../../src/services/deletePokemonByIdService";

describe("Testing service create new Pokemon", () => {
  it("should be return new pokemon created", async () => {
    const pokemonDeleted = await DeletePokemonByIdService(
      InMemoryRepository,
      12
    );
    expect(pokemonDeleted).toHaveProperty("id");
  });

  it("should be throw error invalid arguments", async () => {
    await expect(
      DeletePokemonByIdService(InMemoryRepository, -1)
    ).rejects.toThrow();
  });

  it("should be throw error pokemon not founded by this id", async () => {
    await expect(
      DeletePokemonByIdService(InMemoryRepository, -12)
    ).rejects.toThrow();
  });
});
