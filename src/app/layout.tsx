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
  viewportFit: "cover",
  themeColor: "#FFF7ED",
};

export const metadata: Metadata = {
  title: "学习闯关岛 | 四五年级语文·数学·英语闯关小游戏",
  description:
    "四·五年级闯关学习游戏：语文（2026 新版统编四上/五上各 8 关，四上新增文化遗产单元）+ 数学（沪教版五年级第一学期 8 关）+ 英语（2026 新版沪教版五四学制五上 11 关），共 35 关 350 道题。每日 20 分钟、金币兑换亲子奖励（礼物屋）、错题本与成就体系，让孩子在游戏中爱上学习。",
  keywords: ["五年级语文", "四年级语文", "五年级数学", "五年级英语", "沪教版", "闯关游戏", "随堂测验", "2026新版", "统编版", "亲子奖励", "学习游戏"],
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
