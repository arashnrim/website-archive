import Link from "next/link";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  return (
    <header className="fixed flex z-50 p-5 items-center w-screen lg:h-20 bg-black bg-opacity-[0.025] backdrop-filter backdrop-blur-sm">
      <Link href="/" passHref={true}>
        <span className="p-3 transition-opacity duration-200 cursor-pointer w-min bg-opacity-5 hover:opacity-75">
          <span className="font-mono text-2xl font-bold">#</span>
          <span className="font-sans text-2xl font-bold">A</span>
        </span>
      </Link>
      <nav className="flex flex-row pl-5 space-x-5">
        {navLinks.map((item) => (
          <Link href={`#${item}`} key={item} passHref>
            <button type="button" className="sm:text-xl font-heading">
              {item}
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
