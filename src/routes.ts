import { Router } from "express";
import { PokemonController } from "./controllers/pokemonController";

const router = Router();

router.get("/", (req, res) => res.status(200).send({ hello: "world" }));

router.get("/pokemon", PokemonController.getAll);
router.get("/pokemon/:id", PokemonController.getById);
router.post("/pokemon", PokemonController.create);
router.delete("/pokemon/:id", PokemonController.delete);
router.patch("/pokemon/:id", PokemonController.update);

export { router };
