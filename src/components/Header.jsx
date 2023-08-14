const Header = ({ headText, left, right }) => {
  return (
    <header className="py-5 flex items-center border-b border-gray-300">
      <div className="flex justify-start w-1/4">{left}</div>
      <div className="flex justify-center w-1/2 text-3xl ">{headText}</div>
      <div className="flex justify-end w-1/4">{right}</div>
    </header>
  );
};

export default Header;
