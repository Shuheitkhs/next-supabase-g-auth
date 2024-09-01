import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SupabaseListener from "@/components/supabase-listener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Todo-supabase-GOAuth",
  description: "google認証を併用したTodoアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <SupabaseListener />
          <main className={inter.className}>{children}</main>
          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved | Shuhei Takahashi
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
