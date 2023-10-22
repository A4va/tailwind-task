"use client";
import Sidenav from "@/components/SideNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Image
        className="absolute -z-10 w-screen h-screen"
        src="/bg.svg"
        alt="bg"
        width={1000}
        height={1000}
        
      />
      <Sidenav>

      </Sidenav>
    </main>
  );
}
