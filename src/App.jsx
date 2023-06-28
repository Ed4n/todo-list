import { useEffect, useState } from "react";

import { allTodos } from "./db.js";

//Components //
import TodoSearch from "./components/TodoSearch";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

//Refresh local storage //
const localStorageTodosInstance = allTodos;
// localStorage.setItem("todos", JSON.stringify(localStorageTodosInstance));

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("todos", []);

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
    <div className=" p-7 flex flex-col gap-3 w-full h-screen justify-start items-center">
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoCounter completedTodos={completedTodos} allTodos={totalTodos} />
      <TodoList>
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
    </div>
  );
}

export default App;
