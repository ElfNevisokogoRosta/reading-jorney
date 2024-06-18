import { ReactNode } from "react";
import "../styles/global.css"
import { Metadata } from "next";
import { SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Simple pet project"
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}){
  return <html lang="en">
    <body className="font-gilroy">
      <main>
        {children}
      </main>
    </body>
  </html>
}