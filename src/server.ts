import { app } from "./app";
import { SERVER_PORT } from "./settings";

app.listen(SERVER_PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${SERVER_PORT}`);
});
