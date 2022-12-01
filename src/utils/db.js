import mongoose from "mongoose";
import fp from "fastify-plugin";
import Todo from "../model/Todo.js";

async function database(server, options) {
  try {
    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "MongoDB" }, "Connected!!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "MongoDB" }, "disconnected!!");
    });

    await mongoose.connect(
      "mongodb+srv://oskar:GZaGTYeN7bjLzCS8@cluster0.ob31qwl.mongodb.net/?retryWrites=true&w=majority"
    );

    const models = { Todo };

    server.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });
  } catch (error) {}
}

export default fp(database);
