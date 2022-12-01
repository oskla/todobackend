import Fastify from "fastify";
import TodoRoutes from "./routes.js";
import environment from "./utils/environment.js";
import * as dotenv from "dotenv";
import database from "./utils/db.js";
dotenv.config();

const server = Fastify({ logger: true });

async function start() {
  try {
    await server.register(database);
    await server.register(TodoRoutes);

    await server.listen({ port: environment.PORT, host: "0.0.0.0" });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();
