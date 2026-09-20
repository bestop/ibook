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
  title: "小明乐学岛 | 一二三四五六年级语文·数学·英语闯关小游戏",
  description:
    "一至六年级闯关学习游戏：语文（统编一上～五上各 8 关；六年级上册分六三制 8 关与五·四学制 7 关两个版本）+ 数学（一至五年级每级分沪教版与人教版两版：沪教版一上 7 关、二上 8 关、三上/四上各 9 关、五上 8 关，人教版为 2024～2026 秋新版六三制教材一上 7 关、二上 7 关、三上 8 关、四上/五上各 9 关；六年级上册分六三制人教版 9 关与五·四学制沪教版 8 关两个版本）+ 英语（一至五年级每级分沪教版与 PEP 人教版两版：沪教版一上 14 关、二上 11 关，三上/四上/五上各 11 关，PEP 人教版一上 6 关、二上 6 关、三上/四上/五上/六上各 7 关，一、二年级为一起点预备级 2024/2025 新版，三年级起为六三制 2024～2026 秋新版；六年级上册分五四学制沪教版 7 关与六三制 PEP 人教版 7 关两个版本），共 258 关 2580 道题。顶部左上角可选年级、上下册与出版社版本；每日 20 分钟、金币兑换亲子奖励（礼物屋）、错题本与成就体系，让孩子在游戏中爱上学习。",
  keywords: ["小明乐学岛", "学习闯关岛", "一年级语文", "一年级数学", "一年级英语", "二年级语文", "二年级数学", "二年级英语", "六年级语文", "六年级数学", "六年级英语", "人教版数学", "人教版PEP英语", "人教版英语", "沪教版数学", "沪教版英语", "沪教版数学预备年级", "沪教版英语预备年级", "人教版一年级数学", "人教版二年级数学", "人教版三年级数学", "人教版四年级数学", "人教版五年级数学", "PEP一年级英语", "PEP二年级英语", "PEP三年级英语", "PEP四年级英语", "PEP五年级英语", "PEP六年级英语", "五四学制", "六三制", "五年级语文", "四年级语文", "三年级语文", "五年级数学", "四年级数学", "三年级数学", "五年级英语", "四年级英语", "三年级英语", "沪教版", "闯关游戏", "随堂测验", "2026新版", "统编版", "沪教版新教材", "亲子奖励", "学习游戏"],
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
