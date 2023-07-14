import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div className=" flex gap-3 text-[25px] items-center text-white">
      <span>
        You have completed {completedTodos} of {totalTodos} TODOs
      </span>
    </div>
  );
}
