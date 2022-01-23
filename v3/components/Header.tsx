import Link from "next/link";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center lg:flex-col h-20 w-screen p-5 lg:h-screen lg:w-20 bg-gradient-to-b lg:bg-gradient-to-r from-black lg:space-y-6">
      <Link href="/" passHref={true} scroll={true}>
        <span className="p-3 lg:p-0 transition-opacity cursor-pointer group">
          <span className="font-mono text-2xl font-bold group-hover:font-normal">
            #
          </span>
          <span className="font-sans text-2xl font-extrabold group-hover:font-normal">
            A
          </span>
        </span>
      </Link>
      <nav className="flex-row lg:flex-col pl-5 lg:pl-0 space-x-5 lg:space-x-0 lg:space-y-12 flex lg:w-full justify-center">
        {navLinks.map((item) => (
          <Link href={`#${item}`} key={item} passHref>
            <button
              type="button"
              className="text-xl transition-all hover:font-extrabold lg:rotate-90"
            >
              {item}
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
