import Image from 'next/image';
import { ReactNode } from 'react';
import { LogoComponent } from '../../components/LogoComponent/LogoComponent';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col gap-2.5 lg:flex-row">
      <section className="lg:max-w-1/2 w-full pt-5">
        <div className="container">
          <div className="flex w-full flex-col gap-10 rounded-default bg-black-accent p-5">
            <LogoComponent />
            <h1 className="lg:-leading-[4px] text-[32px] font-bold leading-none tracking-[0.64px] md:text-[64px]">
              Expand your mind, reading a{' '}
              <span className="text-gray-accent">book</span>
            </h1>
            <div> {children}</div>
          </div>
        </div>
      </section>
      <section className="lg:max-w-1/2 w-full pb-5 md:hidden lg:block">
        <div className="container">
          <div className="rounded-default bg-black-accent p-5 pb-0">
            <Image
              src="/images/phone.png"
              width={393}
              height={821}
              sizes="responsive"
              alt="phone"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
