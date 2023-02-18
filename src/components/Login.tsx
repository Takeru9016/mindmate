"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import { images } from "@/assets";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#11a37f] h-screen">
      <Image src={images.logo} width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use MindMate
      </button>
    </div>
  );
}
