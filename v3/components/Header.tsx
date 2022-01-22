import Link from "next/link";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center w-screen p-5 lg:h-20 bg-gradient-to-b from-black">
      <Link href="/" passHref={true}>
        <span className="p-3 transition-opacity  cursor-pointer w-min bg-opacity-5 hover:opacity-75">
          <span className="font-mono text-2xl font-bold">#</span>
          <span className="font-sans text-2xl font-bold">A</span>
        </span>
      </Link>
      <nav className="flex flex-row pl-5 space-x-5">
        {navLinks.map((item) => (
          <Link href={`#${item}`} key={item} passHref>
            <button type="button" className="sm:text-xl">
              {item}
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
