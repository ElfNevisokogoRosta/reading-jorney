import Header from "../../components/Header";
import { ReactNode } from "react";

export default function DashboardLayout({
  children
}: {children: ReactNode}){
  return <div>
    <Header/>
    <main> {children}</main>
  </div>
}