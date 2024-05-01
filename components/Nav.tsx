import React from "react";
import { signOut } from "next-auth/react";
import { useUserQuery } from "@/queries/fetch-user";
import Image from "next/image";

const Nav = () => {
  const { data: fetchedUser } = useUserQuery();

  return (
    <nav className="px-12 py-5 flex justify-between items-center">
      <Image src="/vercel.svg" width={24} height={24} className="h-6" alt="Logo" />
      <h2 className="text-5xl text-white">Hello, {fetchedUser?.name ? fetchedUser?.name : `User`}</h2>
      <span
        onClick={() => signOut()}
        className="px-3 py-1 bg-gray-300 rounded-md"
      >
        Sign out
      </span>
    </nav>
  );
};

export default Nav;
