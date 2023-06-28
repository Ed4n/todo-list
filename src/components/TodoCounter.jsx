import React from "react";

export default function TodoCounter({ completedTodos, allTodos }) {
  return (
    <div className=" flex gap-3 text-[25px] items-center text-white">
      <span>
        You have completed {completedTodos} of {allTodos} TODOs
      </span>
    </div>
  );
}
