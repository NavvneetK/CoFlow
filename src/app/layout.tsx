import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoFlow",
  icons: {
    icon: "/assets/images/logo-icon-img.png",
  },
  description: "Your go-to collaborative editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider 
    appearance={{
      baseTheme: dark,
      variables: {
        colorPrimary: "#3371ff",
        fontSize: "16px"
      },
    }}
  >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        
        
      </body>
    </html>
  </ClerkProvider>
  );
}
