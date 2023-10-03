import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';



const dmSans = DM_Sans({ subsets: ['latin'], weight: '400', preload: true });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};


interface Props {
  children: ReactNode
}
export const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;