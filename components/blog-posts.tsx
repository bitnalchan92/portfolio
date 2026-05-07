"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Rss } from "lucide-react"

type BlogPost = {
  title: string
  url: string
  summary: string
  publishedAt: string
  categories: string[]
}

const BLOG_FEED_URL = "https://bitnalchan92.github.io/feed.xml"
const BLOG_URL = "https://bitnalchan92.github.io"

function getText(entry: Element, selector: string) {
  return entry.querySelector(selector)?.textContent?.trim() ?? ""
}

function decodeHtml(value: string) {
  const textarea = document.createElement("textarea")
  textarea.innerHTML = value
  return textarea.value
}

function formatDate(value: string) {
  if (!value) return ""

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value))
}

function parseFeed(xml: string) {
  const document = new DOMParser().parseFromString(xml, "application/xml")
  const entries = Array.from(document.querySelectorAll("entry"))

  return entries.slice(0, 5).map((entry) => ({
    title: decodeHtml(getText(entry, "title")),
    url: entry.querySelector("link[rel='alternate']")?.getAttribute("href") ?? BLOG_URL,
    summary: decodeHtml(getText(entry, "summary")),
    publishedAt: getText(entry, "published"),
    categories: Array.from(entry.querySelectorAll("category"))
      .map((category) => category.getAttribute("term"))
      .filter((category): category is string => Boolean(category)),
  }))
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      try {
        const response = await fetch(BLOG_FEED_URL, {
          signal: controller.signal,
          cache: "no-store",
        })

        if (!response.ok) {
          throw new Error("블로그 글을 불러오지 못했습니다.")
        }

        const xml = await response.text()
        setPosts(parseFeed(xml))
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") {
          return
        }

        setError("블로그 글을 잠시 불러올 수 없습니다.")
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()

    return () => controller.abort()
  }, [])

  return (
    <section className="portfolio-section pb-4">
      <div className="section-heading justify-between">
        <div className="flex items-center gap-3">
          <Rss className="h-4 w-4 text-primary" />
          <h2 className="section-title">Blog</h2>
        </div>
        <a
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          전체 글
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-40 animate-pulse rounded-sm border border-border bg-card"
            />
          ))}
        </div>
      ) : error ? (
        <div className="rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground">
          {error}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-40 flex-col rounded-sm border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/60"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.categories.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="rounded-sm border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground/65"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-7 text-foreground group-hover:text-primary">
                {post.title}
              </h3>

              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.summary}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
