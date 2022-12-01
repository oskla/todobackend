import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

export async function TodoRoutes(server) {
  server.route({
    method: "GET",
    url: "/todos",
    schema: schemas.GetTodosSchema,
    handler: controllers.GetTodosController,
  });

  server.route({
    method: "POST",
    url: "/todos",
    schema: schemas.PostTodosSchema,
    handler: controllers.PostTodosController,
  });

  server.route({
    method: "DELETE",
    url: "/todos",
    schema: schemas.DeleteTodosSchema,
    handler: controllers.DeleteTodosController,
  });
}

export default TodoRoutes;
