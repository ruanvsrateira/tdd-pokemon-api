import { InMemoryRepository } from "../../../src/repositories/in-memory/InMemoryRepository";
import { GetAllPokemonsService } from "../../../src/services/getAllPokemonsService";

describe("Testing service create new Pokemon", () => {
  it("should be return new pokemon created", async () => {
    const pokemons = await GetAllPokemonsService(InMemoryRepository);

    expect(pokemons).toBeDefined();
  });
});
