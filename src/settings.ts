import { config } from "dotenv";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env.example",
});

export const SERVER_PORT = Number(process.env.SERVER_PORT);
export const DB_URL = process.env.DB_URL;
