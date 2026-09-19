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
  title: "学习闯关岛 | 一二三四五六年级语文·数学·英语闯关小游戏",
  description:
    "一至六年级闯关学习游戏：语文（统编一上～五上各 8 关；六年级上册分六三制 8 关与五·四学制 7 关两个版本）+ 数学（沪教版一上 7 关、二上 8 关、三上/四上各 9 关、五上 8 关；六年级上册分六三制人教版 9 关与五·四学制沪教版 8 关两个版本）+ 英语（沪教版一上 14 关、二上 11 关，三上/四上/五上各 11 关；六年级上册为 2024 新教材五·四学制预备年级 7 关），共 178 关 1780 道题。顶部左上角可选年级、上下册与学制版本；每日 20 分钟、金币兑换亲子奖励（礼物屋）、错题本与成就体系，让孩子在游戏中爱上学习。",
  keywords: ["一年级语文", "一年级数学", "一年级英语", "二年级语文", "二年级数学", "二年级英语", "六年级语文", "六年级数学", "六年级英语", "人教版数学", "沪教版数学预备年级", "沪教版英语预备年级", "五四学制", "六三制", "五年级语文", "四年级语文", "三年级语文", "五年级数学", "四年级数学", "三年级数学", "五年级英语", "四年级英语", "三年级英语", "沪教版", "闯关游戏", "随堂测验", "2026新版", "统编版", "沪教版新教材", "亲子奖励", "学习游戏"],
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
