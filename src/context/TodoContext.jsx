import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Instancia del context
const TodoContext = createContext();

// Provider
function TodoProvider({ children }) {
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
  const [openModal, setModal] = useState(true);

  //FUNCTIONS // ==========================================
  /**
   * Filtra los todos de acuerdo al valor de searchValue
   * @type {Array}
   * @returns {Array} Todos filtrados
   */
  const searchedTodos = todos.filter((todo) => {
    // convierte el texto del todo y el texto del search a minusculas
    const todoText = todo.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    // retorna los todos que incluyan el texto del search
    return todoText.includes(searchText);
  });

  /**
   *
   * @param {*} text
   * @description Completa un todo
   * @example
   * completeTodos("Aprender React")
   * @returns {Array} Todos filtrados
   */
  const completeTodos = (text) => {
    // describe el indice del todo que se va a completar
    const todoIndex = todos.findIndex((todo) => todo.title === text);
    // crea un nuevo array con los todos
    const newTodos = [...todos];
    // cambia el estado de completed a true
    newTodos[todoIndex].completed = true;
    // guarda el nuevo array en el local storage
    saveTodos(newTodos);
  };

  /**
   * @param {*} text
   * @description Elimina un todo
   * @example
   * deleteTodos("Aprender React")
   * @returns {Array} Todos filtrados
   * */
  const deleteTodos = (text) => {
    // describe el indice del todo que se va a eliminar
    const todoIndex = todos.findIndex((todo) => todo.title === text);
    // crea un nuevo array con los todos
    const newTodos = [...todos];
    // cambia el estado de completed a true
    newTodos[todoIndex].completed = true;
    // elimina el todo del array
    newTodos.splice(todoIndex, 1);
    // guarda el nuevo array en el local storage
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodos,
        deleteTodos,
        loading,
        error,
        openModal,
        setModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
