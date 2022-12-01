export async function GetTodosController(request, response) {
  try {
    const { Todo } = request.db.models;
    const todos = await Todo.find({});

    response.status(200);

    return todos;
  } catch (error) {
    await response.status(500).send("an error occured");
  }
}

export async function PostTodosController(request, response) {
  try {
    const { Todo } = request.db.models;

    const newTodo = await Todo.create(request.body);

    response.status(201);

    return { success: true, message: `Todo uploaded with id: ${newTodo.id}` };
  } catch (error) {
    response.log.error(error);
    await response.status(500).send("an error occured");
  }
}

export async function DeleteTodosController(request, response) {
  try {
    const { Todo } = request.db.models;

    const { deletedCount } = await Todo.deleteOne({
      title: request.body.title,
    });

    if (deletedCount == 0) {
      response.code(404);
      return { success: false, message: "Todo could not be found!" };
    }
    return { success: true, message: "Todo has been deleted" };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("an error occured");
  }
}
