"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

import { images } from "@/assets";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-gray-800">
      <div className="w-96 flex flex-col justify-center items-center">
        <div className="mb-3">
          <Image src={images.logo} className="w-12 h-12" alt="logo" />
        </div>
        <div className="mb-5 text-center text-lg text-white">
          Welcome to Mindmate
        </div>
        <div className="flex flex-col w-full gap-3">
          <button
            className="w-full border py-3 rounded-lg text-white flex justify-center gap-2 hover:bg-gray-700"
            onClick={() => signIn("google")}
          >
            <div className="flex items-center justify-center gap-2">
              Log in with Google
              <FcGoogle />
            </div>
          </button>
          <button
            className="w-full border py-3 rounded-lg text-white flex justify-center gap-2 hover:bg-gray-700"
            onClick={() => signIn("github")}
          >
            <div className="flex items-center justify-center gap-2">
              Log in with Github
              <VscGithub />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
