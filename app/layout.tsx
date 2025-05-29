import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "김찬 | 백엔드 개발자 포트폴리오",
  description: "Spring Boot, Docker, Next.js 등 웹 기술을 활용한 백엔드 개발자 김찬의 포트폴리오입니다.",
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
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow"
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
          <main className="min-h-screen bg-background py-12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
