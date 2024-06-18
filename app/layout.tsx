import { ReactNode } from "react";
import "../styles/global.css"

export default function RootLayout({
  children
}: {
  children: ReactNode
}){
  return <html lang="en">
    <body className="font-gilroy bg-black-main text-white-main">
     
        {children}
      
    </body>
  </html>
}