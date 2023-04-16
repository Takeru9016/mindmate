/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";

import NewChat from "./NewChat";
import { db } from "../../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

export default function Sidebar() {
  const { data: session } = useSession();
  const [temperature, setTemperature] = useState(0.9);
  const [frequency_penalty, setFrequency_penalty] = useState(0)
  const [presence_penalty, setPresence_penalty] = useState(0)

  const [chats, loading] = useCollection(
    session &&
    query(
      collection(db, "users", session?.user?.email!, "chats"),
      orderBy("createdAt", "asc")
    )
  );

  return (
    <div className="h-screen md:fixed md:inset-y-0 md:flex md:w-[320px] md:flex-col">
      <div className="flex h-full min-h-0 flex-col ">
        <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full w-40 flex-1 flex-col space-y-1 p-2">
            <NewChat />
            <div className="hidden sm:inline">
              <ModelSelection />
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="temperature" className="text-sm text-gray-100">
                  Temperature: {temperature}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  id="temperature"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="temperature" className="text-sm text-gray-100">
                  Frequency_penalty: {frequency_penalty}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={frequency_penalty}
                  onChange={(e) => setFrequency_penalty(parseFloat(e.target.value))}
                  id="frequency_penalty"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="temperature" className="text-sm text-gray-100">
                  Presence_penalty: {presence_penalty}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={presence_penalty}
                  onChange={(e) => setPresence_penalty(parseFloat(e.target.value))}
                  id="presence_penalty"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
              <div className="flex flex-col gap-2 text-gray-100 text-sm">
                {loading && (
                  <div className="animate-pulse text-center text-white">
                    <p>Loading Chats...</p>
                  </div>
                )}

                {chats?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
              </div>
            </div>
            <a
              href="https://help.openai.com/en/collections/3742473-chatgpt"
              target="_blank"
              className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Updates &amp; FAQ
            </a>
            {session && (
              <p
                onClick={() => signOut()}
                className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Log out
              </p>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
