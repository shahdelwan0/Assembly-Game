import { useState } from "react";
import NewGame from "./NewGame";

const Keyboard = ({ onClick }) => {
  const alphabetList = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
    <button
      onClick={() => onClick(letter)}
      className="cursor-pointer flex justify-center items-center text-[#1E1E1E] w-10 h-10 uppercase bg-[#FCBA29] p-1 rounded-sm border-2 border-[#D7D7D7]"
      key={letter}
    >
      {letter}
    </button>
  ));
  return (
    <>
      <div className="flex flex-wrap gap-2 max-w-[600px] h-[164px] justify-center">
        {alphabetList}
      </div>
      <NewGame />
    </>
  );
};
export default Keyboard;
