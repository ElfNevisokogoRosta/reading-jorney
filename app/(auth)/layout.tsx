import { LogoComponent } from "../../components/LogoComponent/LogoComponent";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({
  children
}: {
  children: ReactNode
}){
  return <main className="flex flex-col lg:flex-row gap-2.5">
        <section className="pt-5 w-full lg:max-w-1/2">
          <div className="container ">
            <div className="bg-black-accent rounded-default p-5 w-full flex flex-col gap-10">
              <LogoComponent/>
          <h1 className="font-bold leading-none text-[32px] tracking-[0.64px] md:text-[64px] lg:-leading-[4px]">Expand your mind, reading a <span className="text-gray-accent">book</span></h1>
            <div> {children}</div>
            </div>
           </div>
        </section>
          <section className="pb-5 md:hidden lg:block w-full lg:max-w-1/2">
             <div className="container">
              <div className="bg-black-accent p-5 rounded-default pb-0">
                 <Image src='/images/phone.png' width={393} height={821} sizes="responsive"  alt="phone"/>
              </div>
           
          </div>
          </section>
         
        </main>
}