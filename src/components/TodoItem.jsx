import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="flex gap-3 items-center">
      <BsFillCheckCircleFill
        className="cursor-pointer hover:fill-green-400"
        onClick={onComplete}
        color={completed ? "green" : "white"}
        size={30}
      />
      <span
        onClick={onComplete}
        className={`cursor-pointer ${
          completed && "line-through"
        } text-white text-[20px]`}
      >
        {text}
      </span>

      <button
        onClick={onDelete}
        className=" bg-red-500 w-[30px] h-[30px] text-[15px] rounded-full text-white flex justify-center items-center"
      >
        x
      </button>
    </li>
  );
}
