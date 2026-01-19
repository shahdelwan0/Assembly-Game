import { useEffect, useMemo, useRef, useState } from "react";
import languages from "./languages.js";
import clsx from "clsx";
import { getFarewellText } from "./utils.js";

export default function Hangman() {
  const prevWrongCountRef = useRef(0);
  const [correctWord, setCorrectWord] = useState("react".split(""));
  const [guessed, setGuessed] = useState([]);
  const guessedSet = useMemo(() => new Set(guessed), [guessed]);
  const correctSet = useMemo(() => new Set(correctWord), [correctWord]);
  // console.log(guessedSet);
  const isLetterGuessed = (letter) => guessedSet.has(letter);
  const isLetterCorrect = (letter) => correctSet.has(letter);
  // for each letter in guessed that is not in correct
  const wrongGuesses = Array.from(guessedSet).filter(
    (letter) => !correctSet.has(letter),
  );
  useEffect(() => {
    prevWrongCountRef.current = wrongGuesses.length;
  }, [wrongGuesses]);

  // console.log(getFarewellText("HTML"))
  const ALPHABETS = "abcdefghijklmnopqrstuvwxyz".split("");
  const LANGUAGES_LIST = languages.map((language, index) => {
    const isLost = index < wrongGuesses.length;
    return (
      <span
        className={clsx(
          "transition-all duration-300",
          isLost && "opacity-40 grayscale line-through",
        )}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
        key={language.name}
      >
        {language.name}
      </span>
    );
  });
  const handleOnClick = (letter) => {
    return setGuessed((prev) => Array.from(new Set([...prev, letter])));
  };
  const isGameWon = [...correctSet].every((letter) => guessedSet.has(letter));
  const isGameLost = wrongGuesses.length >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;
  const gameStat = useMemo(() => {
    // game-ending states first
    if (isGameWon) return "You won 🎉";
    if (isGameLost) return "You lost 💀";

    // detect if a NEW wrong guess happened
    const prevWrongCount = prevWrongCountRef.current;
    const currentWrongCount = wrongGuesses.length;

    if (currentWrongCount > prevWrongCount) {
      const lastWrongLanguage = languages[currentWrongCount - 1]?.name;

      return getFarewellText(lastWrongLanguage);
    }

    return "";
  }, [wrongGuesses, isGameWon, isGameLost]);

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <div className="stat">
        {isGameOver ? "game over" : isGameWon ? "game won" : gameStat}
      </div>
      <div className="langsList">{LANGUAGES_LIST}</div>
      <div className="correctWord mt-5">
        {correctWord.map((char) => {
          const isGuessed = isLetterGuessed(char);
          const isCorrect = isLetterCorrect(char);
          return (
            <span
              className={clsx(
                "bg-gray-200 text-black m-2 p-2",
                isCorrect && isGuessed && "bg-green-500",
                !isCorrect && isGuessed && "bg-red-500",
              )}
              key={char}
            >
              {isCorrect && isGuessed && <span>{char}</span>}
            </span>
          );
        })}
      </div>
      <div className="keyboard mt-5">
        {ALPHABETS.map((letter) => {
          const isGuessed = isLetterGuessed(letter);
          const isCorrect = isLetterCorrect(letter);

          return (
            <button
              onClick={() => handleOnClick(letter)}
              className={clsx(
                "p-2 bg-gray-700 m-1",
                isCorrect && isGuessed && "bg-green-500",
                !isCorrect && isGuessed && "bg-red-500",
              )}
              key={letter}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {isGameOver && (
        <div className="new">
          <button>New Game</button>
        </div>
      )}
    </main>
  );
}
