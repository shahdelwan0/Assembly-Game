import React from "react";
import { Header } from "./Header";
import Status from "./Status";
import Langs from "./Langs";
import Keyboard from "./Keyboard";
import NewGame from "./NewGame";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
  return (
    <main className="flex flex-col gap-5 px-14.25 py-18.25 items-center">
      <Header />
      <Langs />
    </main>
  );
}
