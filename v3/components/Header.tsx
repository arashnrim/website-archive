import Link from "next/link";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center w-screen h-20 p-5 lg:flex-col lg:h-screen lg:w-20 bg-gradient-to-b lg:bg-gradient-to-r from-black lg:space-y-6">
      <Link href="/" passHref={true} scroll={true}>
        <span className="p-3 transition-opacity cursor-pointer lg:p-0 group">
          <span className="font-mono text-2xl font-bold group-hover:font-normal">
            #
          </span>
          <span className="font-sans text-2xl font-extrabold group-hover:font-normal">
            A
          </span>
        </span>
      </Link>
      <nav className="flex flex-row justify-center pl-5 space-x-5 lg:flex-col lg:pl-0 lg:space-x-0 lg:space-y-8 lg:w-full">
        {navLinks.map((item) => (
          <Link href={`#${item}`} key={item} passHref>
            <button
              type="button"
              className="text-xl transition-all hover:font-extrabold lg:vertical-text"
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
