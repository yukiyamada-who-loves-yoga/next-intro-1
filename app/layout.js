import "./globals.css";

export const metadata = {
  title: "日本食一覧",
  description: "日本の伝統料理とその特徴を紹介するアプリケーション",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
