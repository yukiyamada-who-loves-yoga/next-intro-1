import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from './constants';
import { ReactNode } from 'react';

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

// RootLayoutのProps型定義
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
} 