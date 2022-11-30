import { Pokemon } from "@prisma/client";
import { GenerateIncrementalIdUtil } from "../../../src/utils/generatorIncrementalIdUtil";

describe("Testing generator incremental id util", () => {
  const pokemons: Pokemon[] = [
    {
      id: 1,
      name: "first pokemon",
      type: ["fire"].toString(),
      weight: 12.0,
    },
  ];

  it("should be return next id for list pokemons", async () => {
    const idGenerated = GenerateIncrementalIdUtil(pokemons);

    expect(idGenerated).toBe(2);
  });
});
