import { Updock } from "next/font/google";
import Link from "next/link";

const updock = Updock({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50">
      <nav>
        <h1
          className={
            updock.className + " text-4xl md:text-5xl font-bold text-white text-center pt-3"
          }
        >
          Chennada Okka
        </h1>
        <ul className="list-none flex justify-center items-center gap-4 w-full h-10 z-50 text-white text-sm md:text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact-form" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
