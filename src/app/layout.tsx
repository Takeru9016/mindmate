import { getServerSession } from "next-auth";

import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ClientProvider, Login, SessionProvider, Sidebar } from "@/components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="max-w-xs h-screen overflow-y-auto md:min-w-[20rem] bg-[#202123]">
                <Sidebar />
              </div>
              <ClientProvider/>
              <div className="flex-1 bg-[#343541]">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
