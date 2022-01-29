import Link from "next/link";
import Image from "next/image";
import profilePicture from "../public/arash.jpg";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center w-screen h-20 p-5 lg:flex-col lg:h-screen lg:w-20 bg-gradient-to-b lg:bg-gradient-to-r from-black lg:space-y-6">
      <Link href="/" passHref={true} scroll={true}>
        <button className="h-8 w-8 group">
          <Image
            className="pointer-events-none rounded-lg group-hover:rounded-full transition-all"
            src={profilePicture}
            alt="Arash Nur Iman"
            layout="responsive"
            priority
            quality={60}
          />
        </button>
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
