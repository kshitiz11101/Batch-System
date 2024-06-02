import Link from "next/link";
import { BsFire } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="z-10 p-4 lg:p-0 grid grid-flow-col justify-between w-full lg:w-3/5 text-md lg:text-xl font-medium items-center">
      <div className="flex gap-5">
        <Link href="/" className="flex items-center space-x-2">
          <BsFire className="text-2xl text-red-600" />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            uifry
          </span>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="cursor-pointer text-[#FF5555] font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="cursor-pointer hover:text-[#FF5555]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="cursor-pointer hover:text-[#FF5555]">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/features" className="cursor-pointer hover:text-[#FF5555]">
              Features
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-black rounded-md text-white p-4 lg:p-4 cursor-pointer hover:bg-gray-800">
        Download
      </div>
    </div>
  );
};

export default Navbar;
