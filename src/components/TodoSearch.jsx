import React from "react";

export default function TodoSearch({ searchValue, setSearchValue }) {
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
