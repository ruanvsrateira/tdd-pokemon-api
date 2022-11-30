import supertest from "supertest";
import { app } from "../../src/app";

describe("Testings Routes", () => {
  describe("Route /pokemon[POST]", () => {
    it("should be return pokemon created", async () => {
      const response = await supertest(app)
        .post("/pokemon")
        .send({
          name: "created pokemon test",
          type: ["fire"],
          weight: 120.0,
        });

      expect(response.status).toBe(201);
      expect(response.body.pokemonCreated).toHaveProperty("id");
    });

    it("should be return error invalid arguments", async () => {
      const response = await supertest(app)
        .post("/pokemon")
        .send({
          id: "",
          name: "",
          type: [""],
          weight: -1,
        });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "invalid arguments",
      });
    });

    it("should return error pokemon already exists by this name", async () => {
      const response = await supertest(app)
        .post("/pokemon")
        .send({
          name: "created pokemon test",
          type: ["water"],
          weight: 32.0,
        });

      expect(response.status).toBe(403);
      expect(response.body).toEqual({
        error: "pokemon already exists by this name",
      });
    });
  });

  describe("Route /pokemon[GET]", () => {
    it("should be returned all pokemons", async () => {
      const response = await supertest(app).get("/pokemon");

      expect(response.status).toBe(200);
      expect(response.body.pokemons).toBeDefined();
    });
  });

  describe("Route /pokemon/<id>[GET]", () => {
    it("should be return one pokemon", async () => {
      const responsePokemonCreated = await supertest(app)
        .post("/pokemon")
        .send({
          name: "get one test route",
          type: ["sand"],
          weight: 12.3,
        });

      const responseGetOnePokemon = await supertest(app).get(
        `/pokemon/${responsePokemonCreated.body.pokemonCreated.id}`
      );

      expect(responseGetOnePokemon.status).toBe(200);
      expect(responseGetOnePokemon.body.pokemon.id).toBe(
        responsePokemonCreated.body.pokemonCreated.id
      );
    });
  });

  describe("Route /pokemon/<id>[DELETE]", () => {
    it("Should be return pokemon deleted", async () => {
      const responsePokemonCreated = await supertest(app)
        .post("/pokemon")
        .send({
          id: 1000,
          name: "deleted pokemon",
          type: ["any"],
          weight: 43,
        });

      const responsePokemonDeleted = await supertest(app).delete(
        `/pokemon/${responsePokemonCreated.body.pokemonCreated.id}`
      );

      expect(responsePokemonDeleted.status).toBe(200);
      expect(responsePokemonDeleted.body.pokemonDeleted.id).toBe(
        responsePokemonCreated.body.pokemonCreated.id
      );
    });
  });

  it("Should be return error pokemon not founded by this id", async () => {
    const response = await supertest(app).delete(`/pokemon/123123123`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "pokemon not founded by this id",
    });
  });

  describe("Route /pokemon/<id>[PATCH]", () => {
    it("should be return pokemon updated", async () => {
      const responseCreatedPokemon = await supertest(app)
        .post("/pokemon")
        .send({
          name: "pokemon updated",
          type: ["any"],
          weight: 123.0,
        });

      const responseUpdatedPokemon = await supertest(app)
        .patch(`/pokemon/${responseCreatedPokemon.body.pokemonCreated.id}`)
        .send({
          name: "new pokemon updated",
          type: ["new any"],
          weight: 31.0,
        });

      expect(responseUpdatedPokemon.status).toBe(200);
      expect(responseUpdatedPokemon.body.pokemonUpdated.id).toEqual(
        responseCreatedPokemon.body.pokemonCreated.id
      );
      expect(responseUpdatedPokemon.body.pokemonUpdated.name).toEqual(
        "new pokemon updated"
      );
    });

    it("Should be return error invalid arguments", async () => {
      const response = await supertest(app).patch("/pokemon/3").send({
        name: "",
        type: "",
        weight: -1,
      });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "invalid arguments",
      });
    });

    it("should be return return error pokemon not founded by this id", async () => {
      const response = await supertest(app)
        .patch("/pokemon/123123123")
        .send({
          name: "pokemon updated",
          type: ["any"],
          weight: 123.0,
        });

      expect(response.status).toBe(404);

      expect(response.body.error).toBe("pokemon not founded by this id");
    });
  });
});
