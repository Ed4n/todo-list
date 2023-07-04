import { useEffect, useState } from "react";

import { allTodos } from "../db.js";

// Hooks //
import useLocalStorage from "../hooks/useLocalStorage.js";
import AppUI from "./AppUI.JSX";

//Refresh local storage //
const localStorageTodosInstance = allTodos;
// localStorage.setItem("todos", JSON.stringify(localStorageTodosInstance));

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos", []);

  //STATES // ==========================================
  const [searchValue, setSearchValue] = useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.title.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.title === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
      loading={loading}
      error={error}
    />
  );
}

export default App;
