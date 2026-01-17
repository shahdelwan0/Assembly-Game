const Word = ({ curr }) => {
  return (
    <div className="uppercase flex gap-0.5">
      {[...curr].map((char, index) => (
        <span
          className="w-10 h-10 bg-[#323232] text-[#F9F4DA] font-bold text-center flex justify-center items-center border-b"
          key={index}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
export default Word;
