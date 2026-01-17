import Langs from "./Langs";
import Status from "./Status";

export const Header = () => {
  return (
    <header className="w-[352px] flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl text-[hsl(50_72%_92%)] font-medium">
        Assembly: Endgame
      </h1>
      <p className="text-[hsl(0_0%_56%)] text-sm">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <Status />
    </header>
  );
};
