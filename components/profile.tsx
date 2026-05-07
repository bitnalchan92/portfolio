import Image from "next/image";
import {Github, Globe, Mail} from "lucide-react";

export default function Profile() {
  return (
    <section className="grid gap-8 pb-12 pt-4 md:grid-cols-[13rem_1fr] md:items-end md:pt-8">
      <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-sm border border-border bg-card shadow-sm md:mx-0 md:w-52">
        <Image
          src="/profile.jpg"
          alt="프로필 이미지"
          fill
          sizes="(min-width: 768px) 208px, 176px"
          className="object-cover"
          priority
        />
      </div>

      <div className="min-w-0">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</p>
        <h1 className="mb-5 text-center text-5xl font-bold leading-tight text-foreground md:text-left">김찬</h1>
        <p className="mb-8 max-w-2xl text-center text-base leading-8 text-foreground/70 md:text-left">
          금융권 운영 경험과 스타트업 제품 개발 경험을 바탕으로, 문제를 구조화하고 안정적으로 구현하는 개발자입니다.
        </p>

        <div className="grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
          <div className="flex min-w-0 items-center gap-3">
            <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
            <a href="mailto:bitnalchan92@gmail.com" className="hover:text-blue-500">
              bitnalchan92@gmail.com
            </a>
          </div>

          <div className="flex min-w-0 items-center gap-3">
            <Globe className="h-4 w-4 flex-shrink-0 text-primary" />
            <a
              href="https://bitnalchan92.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate hover:text-primary"
            >
              bitnalchan92.github.io
            </a>
          </div>

          <div className="flex min-w-0 items-center gap-3 sm:col-span-2">
            <Github className="h-4 w-4 flex-shrink-0 text-primary" />
            <a
              href="https://github.com/bitnalchan92"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate hover:text-primary"
            >
              github.com/bitnalchan92
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
