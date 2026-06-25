// src/app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">{children}</body>
    </html>
  );
}
export const metadata = {
  title: "Yahia Abdeldjalil",
  description:
    "AI Engineer, Cybersecurity Specialist and Network Engineer",
};