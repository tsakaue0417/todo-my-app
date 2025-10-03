import React from "react";
import Box from "./Box";

type Todo = {
  id: number;
  todo: string;
};

const DataCache1 = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache",
  });
  const todo: Todo = await res.json();

  return (
    <Box>
      <h2>Data Cache1 Fetch</h2>
      <dl>
        <dt>ID</dt>
        <dd>{todo.id}</dd>
        <dt>Todo</dt>
        <dd>{todo.todo}</dd>
      </dl>
    </Box>
  );
};

export default DataCache1;
