import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import { Toaster } from "sonner";
import ReduxProvider from "@/providers/redux-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slides",
  description: "Automate DMs and Comments in Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={jakarta.className}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </ReduxProvider>

            <Toaster></Toaster>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
