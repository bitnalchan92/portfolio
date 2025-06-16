import Image from "next/image";
import {Bell, Facebook, Github, Globe, Mail, Rss} from "lucide-react";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
      <div className="w-64 h-64 relative rounded-md overflow-hidden">
        <Image
          src="/public/profile_img.JPG"
          alt="프로필 이미지"
          width={256}
          height={256}
          className="object-fill"
          priority
        />
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-bold text-blue-500 text-center md:text-left mb-6">김 찬</h1>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-blue-500">Contact.</h2>
          <div className="flex items-center gap-3 ml-4">
            <Mail className="w-5 h-5 text-blue-500" />
            <a href="mailto:bitnalchan92@gmail.com" className="hover:text-blue-500">
              bitnalchan92@gmail.com
            </a>
          </div>

          <h2 className="text-xl font-bold text-blue-500">Channel.</h2>
          <div className="flex items-center gap-3 ml-4">
            <Globe className="w-5 h-5 text-blue-500" />
            <a
              href="https://bitnalchan92.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              https://bitnalchan92.github.io
            </a>
          </div>

          <div className="flex items-center gap-3 ml-4">
            <Github className="w-5 h-5 text-blue-500" />
            <a
              href="https://github.com/bitnalchan92"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              https://github.com/bitnalchan92
            </a>
          </div>

          {/*<div className="flex items-center gap-3">*/}
          {/*  <Rss className="w-5 h-5 text-blue-500" />*/}
          {/*  <a*/}
          {/*    href="https://blog.yourdomain.com"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*    className="hover:text-blue-500"*/}
          {/*  >*/}
          {/*    https://blog.yourdomain.com*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>

        {/*<Alert className="mt-6 bg-gray-100 dark:bg-gray-800">*/}
        {/*  <Bell className="h-4 w-4" />*/}
        {/*  <AlertDescription>현재 구직중이며 백엔드 개발자 포지션에 관심이 있습니다.</AlertDescription>*/}
        {/*</Alert>*/}
      </div>
    </div>
  )
}
