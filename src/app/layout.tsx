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
  title: "学习闯关岛 | 五年级上册语文·数学随堂知识点小游戏",
  description:
    "五年级上册双科闯关游戏：语文（2026 新版统编教材 8 大单元主题）+ 数学（沪教版上海教育出版社五年级第一学期 8 大关卡），共 160 道随堂精选题。每日 20 分钟学习任务、随堂测验式闯关、金币星星奖励、错题本复习与温柔惩罚机制，让孩子在游戏中爱上学习。",
  keywords: ["五年级语文", "五年级数学", "沪教版", "闯关游戏", "随堂测验", "2026新版", "统编版", "知识点", "学习游戏"],
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
