import "./globals.css";
import { ReactNode } from 'react';

// RootLayoutのProps型定義
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <h1>日本食一覧</h1>
        <p>日本の伝統料理とその特徴を紹介するアプリケーション</p>
        {children}
      </body>
    </html>
  );
} 