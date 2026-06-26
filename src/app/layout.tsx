// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                const resolved = theme === 'system' 
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                if (resolved === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#050816] text-white antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="9ba1d0b8-dfdb-4a4e-a33c-940421f6ca95"></script>      </body>
    </html>
  );
}
export const metadata = {
  title: "Yahia Abdeldjalil",
  description:
    "AI Engineer, Cybersecurity Specialist and Network Engineer",
};