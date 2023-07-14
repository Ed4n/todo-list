import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const handleOnChangeEvent = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <div>
      <input
        className=" bg-slate-300 rounded-md"
        value={searchValue}
        onChange={handleOnChangeEvent}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
