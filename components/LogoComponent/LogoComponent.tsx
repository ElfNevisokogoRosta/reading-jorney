import { SITE_NAME } from "@/constants";
import Image from "next/image";

export const LogoComponent = () => {
  return (
    <div className="flex gap-1">
       <Image src='/logo.svg' width={42} height={17} alt='logo' sizes="responsive"/>
       <span className="capitalize font-bold text-white-main tracking-[0.64px] hidden md:block">{SITE_NAME}</span>
    </div>
  )
}
