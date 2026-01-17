import { use, useState } from "react";
import languages from "./languages";
import Word from "./Word";
import Keyboard from "./Keyboard";
const Langs = () => {
  const [langs] = useState(languages);
  const [currWord, setCurrWord] = useState(["r", "e", "a", "c", "t"]);
  const [guessed, setGuessed] = useState([]);
  const langElems = langs.map((lang) => (
    <span
      key={lang.name}
      className="inline-flex items-center p-[4.5px] rounded-sm font-bold whitespace-nowrap"
      style={{
        backgroundColor: lang.backgroundColor,
        color: lang.color,
      }}
    >
      {lang.name}
    </span>
  ));
  const handleOnClick = (letter) => {
    setGuessed((prev) => Array.from(new Set([...prev, letter])));
    currWord.map((char) => {
      if (char === letter) {
        console.log("true");
      }
      // console.log("false");
    });
  };
  console.log(guessed);
  const checkLetter = () => {};
  return (
    <>
      <div className="flex flex-wrap gap-1 max-w-[420px] justify-center">
        {langElems}
      </div>

      <Word curr={currWord} />
      <Keyboard onClick={handleOnClick} />
    </>
  );
};
export default Langs;
