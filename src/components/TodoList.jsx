import React from "react";

export default function TodoList({ children }) {
  return <ul className=" flex flex-col gap-3">{children}</ul>;
}
