import { Chat, ChatInput } from "@/components";

type Props = {
  params: {
    id: string;
  };
};

export default function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}
