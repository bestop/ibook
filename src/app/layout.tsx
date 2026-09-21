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
  title: "童学冒险岛 | 一至六年级语数外闯关小游戏",
  description:
    "童学冒险岛：语文一至六年级上下册、数学英语一至六年级上册闯关学习游戏，覆盖统编/沪教/人教（PEP）2024～2026 最新教材，共 38 个科目岛、311 关 3110 道精选题，每题带详细解析（语文六年级分六三制/五四学制）。每日 20 分钟、金币兑换亲子奖励（礼物屋）、错题本与成就体系，让孩子在游戏中爱上学习。",
  keywords: ["童学冒险岛", "小明乐学岛", "学习闯关岛", "一年级语文", "一年级数学", "一年级英语", "二年级语文", "二年级数学", "二年级英语", "六年级语文", "六年级数学", "六年级英语", "人教版数学", "人教版PEP英语", "人教版英语", "沪教版数学", "沪教版英语", "沪教版数学预备年级", "沪教版英语预备年级", "人教版一年级数学", "人教版二年级数学", "人教版三年级数学", "人教版四年级数学", "人教版五年级数学", "PEP一年级英语", "PEP二年级英语", "PEP三年级英语", "PEP四年级英语", "PEP五年级英语", "PEP六年级英语", "五四学制", "六三制", "五年级语文", "四年级语文", "三年级语文", "五年级数学", "四年级数学", "三年级数学", "五年级英语", "四年级英语", "三年级英语", "沪教版", "闯关游戏", "随堂测验", "2026新版", "统编版", "沪教版新教材", "亲子奖励", "学习游戏"],
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
