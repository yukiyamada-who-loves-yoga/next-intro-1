import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from './constants.js';

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
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
