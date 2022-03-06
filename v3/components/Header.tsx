import Link from "next/link";
import Image from "next/image";
import profilePicture from "../public/arash.jpg";
import { useRouter } from "next/dist/client/router";

const navLinks = ["about", "skills", "works"];

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed z-50 flex items-center w-screen h-20 p-5 lg:flex-col lg:h-screen lg:w-20 bg-gradient-to-b lg:bg-gradient-to-r from-black lg:space-y-6">
      <Link href="/" passHref={true} scroll={true}>
        <button className="w-8 h-8 group">
          <Image
            className="transition-all rounded-lg pointer-events-none group-hover:rounded-full"
            src={profilePicture}
            alt="Arash Nur Iman"
            layout="responsive"
            priority
            quality={60}
          />
        </button>
      </Link>
      {router.pathname === "/" && (
        <nav className="flex flex-row justify-center pl-5 space-x-5 lg:items-center lg:flex-col lg:pl-0 lg:space-x-0 lg:space-y-8 lg:w-full">
          {navLinks.map((item) => (
            <Link href={`#${item}`} key={item} passHref>
              <a className="text-xl text-center underline-offset-0 lg:vertical-text">
                {item}
              </a>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
