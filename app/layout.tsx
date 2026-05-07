import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "김찬 | Portfolio",
  description: "금융권, 스타트업, 웹 서비스 개발 경험을 정리한 김찬의 포트폴리오입니다.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  generator: "Next.js",
  keywords: [
    "백엔드 개발자",
    "Spring Boot",
    "Next.js",
    "Docker",
    "포트폴리오",
    "이력서",
    "웹 개발자",
    "김찬"
  ],
  authors: [{ name: "김찬", url: "https://github.com/bitnalchan92" }],
  creator: "김찬",
  robots: "index, follow"
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f7f2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
