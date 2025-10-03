import React from "react";
import Box from "./Box";

type Todo = {
  id: number;
  todo: string;
};

const RequestMemoization = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  });
  const todo: Todo = await res.json();

  return (
    <Box>
      <h2>Request Memoization</h2>
      <dl>
        <dt>ID</dt>
        <dd>{todo.id}</dd>
        <dt>Todo</dt>
        <dd>{todo.todo}</dd>
      </dl>
    </Box>
  );
};

export default RequestMemoization;
