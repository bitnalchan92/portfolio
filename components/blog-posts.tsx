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
    <section className="pb-4">
      <div className="flex items-center justify-between gap-4 mt-16 mb-6">
        <div className="flex items-center gap-3">
          <Rss className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-blue-500">BLOG</h2>
        </div>
        <a
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
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
              className="h-40 rounded-md border border-gray-200 bg-gray-50 animate-pulse dark:border-gray-800 dark:bg-gray-900"
            />
          ))}
        </div>
      ) : error ? (
        <div className="rounded-md border border-gray-200 p-5 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
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
              className="group flex min-h-40 flex-col rounded-md border border-gray-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40 dark:border-gray-800 dark:hover:border-blue-500/60 dark:hover:bg-blue-950/20"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.categories.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="rounded-sm bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {post.title}
              </h3>

              <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {post.summary}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
