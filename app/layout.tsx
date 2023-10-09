import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';



const dmSans = DM_Sans({ subsets: ['latin'], weight: '400', preload: true });

export const metadata: Metadata = {
  title: 'Cesar Rivera',
  description: 'Personal Portfolio',
};


interface Props {
  children: ReactNode
}
export const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" data-theme="dark">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
