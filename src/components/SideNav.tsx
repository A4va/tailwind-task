import React from "react";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkItemProps {
  name: string;
  path: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", path: "/" },
  { name: "Products", path: "/Products" },
  { name: "Invoices", path: "/Invoices" },
  { name: "Archive", path: "/Archive" },
  { name: "Settings", path: "/Settings" },
];

function Header() {
  return (
    <header
      className={`ms-6 me-3 p-6 h-20 rounded-full bg-white flex items-center justify-between`}>
      <div className="">Yamm</div>
      <div className="flex items-center cursor-pointer p-1 rounded-xl">
        menu
      </div>
    </header>
  );
}

function Sidenav({ children }: { children: ReactNode }) {
  return (
    <div className="flex py-6 mx-6">
      <span className="ms-0 md:ms-44" />
      <nav
        className={`fixed md:w-44 md:block bg-white h-[90%] rounded-xl hidden`}>
        <div className="flex justify-between flex-col h-full">
          <div>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] px-6 pt-10 pb-20 "
              src="/logo.svg"
              alt="Yamm Logo"
              width={180}
              height={37}
              priority
            />
            <ul className="">
              {LinkItems.map((link) => (
                <li
                  className="flex m-2 cursor-pointer font-semibold text-gray-500 hover:bg-gray-200 font hover:text-violet-500 rounded-md"
                  key={link.name}>
                  <Image
                    className="ms-2"
                    src="/home.svg"
                    alt="home Logo"
                    width={24}
                    height={24}
                    priority
                  />
                  <Link href={link.path} className="block p-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="m-2 cursor-pointer mb-2 bg-red-200 rounded-md font-semibold text-red-500">
            <Link href={"/"} className="block p-2">
              Logout
            </Link>
          </div>
        </div>
      </nav>

      <div className="w-full">
        <Header />
        <div className="">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
