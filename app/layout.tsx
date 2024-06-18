import { ReactNode } from 'react';
import '../styles/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black-main font-gilroy text-white-main">
        {children}
      </body>
    </html>
  );
}
