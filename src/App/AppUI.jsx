import React, { useContext } from "react";

//Components //
import TodoSearch from "../components/TodoSearch";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import { TodoContext } from "../context/TodoContext";
import Modal from "../components/Modal";

// Hooks //

export default function AppUI() {
  const {
    searchedTodos,
    completeTodos,
    deleteTodos,
    loading,
    error,
    openModal,
    setModal,
  } = useContext(TodoContext);

  return (
    <div className=" p-7 flex flex-col gap-3 w-full h-screen justify-start items-center">
      <TodoSearch />

      <TodoCounter />

      <TodoList>
        {/* In this case the && menas that if the first condition is true, then the second one will be executed */}
        {loading && <p> Cargando...</p>}
        {error && <p> Error...</p>}
        {searchedTodos.length === 0 && !loading && <p> Crea tu primer TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.title}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.title)}
            onDelete={() => deleteTodos(todo.title)}
          />
        ))}
      </TodoList>

      <AddTodo />

      {openModal && (
        <Modal>
          <p>Esto es un modal</p>
        </Modal>
      )}
    </div>
  );
}
