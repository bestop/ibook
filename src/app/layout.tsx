import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFF7ED",
};

export const metadata: Metadata = {
  title: "语文闯关大冒险 | 2026新版五年级上册随堂知识点小游戏",
  description:
    "2026 新版统编语文五年级上册知识点闯关游戏：万物有灵、古典名著、民间故事、爱国情怀、说明文、父母之爱、自然之景、读书明理 8 大单元主题，每日 20 分钟学习任务、随堂测验式闯关、金币星星奖励与错题本复习，让孩子在游戏中爱上语文。",
  keywords: ["五年级语文", "闯关游戏", "随堂测验", "小学语文", "2026新版", "统编版", "知识点"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
