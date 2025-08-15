// import "./globals.css";
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
/*
export const metadata = {
  title: "Web Dev 2",
  description: "Sait's software development diploma Web Dev 2 course",
};
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
