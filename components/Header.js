import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-[60px] bg-indigo-300 flex p-4">
      <Link href={"/"}>Home</Link>
    </header>
  );
};

export default Header;
