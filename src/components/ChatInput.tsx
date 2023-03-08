"use client";

import { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-hot-toast";
import useSWR from "swr";

export default function ChatInput({ chatId }: { chatId: string }) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("MindMate is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        session,
        model,
      }),
    }).then(() => {
      toast.success("MindMate has responded!", {
        id: notification,
      });
    });
  };

  return (
    <>
      <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={sendMessage} className="flex p-5 space-x-5">
          <input
            className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text"
            placeholder="Type your message here ..."
          />

          <button
            className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300"
            type="submit"
            disabled={!prompt || !session}
          >
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
          </button>
        </form>
      </div>
      <div className="flex justify-center text-gray-400 text-sm  mt-4">
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-200"
        >
          ChatGPT Feb 13 Version
        </a>
        <p>
          . Free Research Preview. Our goal is to make AI systems more natural
          and safe to interact with. Your feedback will help us improve.
        </p>
      </div>
    </>
  );
}
