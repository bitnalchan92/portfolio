import Image from "next/image";
import {Github, Globe, Mail} from "lucide-react";
import {Card} from "@/components/ui/card";

export default function Profile() {
  return (
    <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 shadow-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-48 h-48 relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100 dark:ring-blue-900">
          <Image
            src="/profile.jpg"
            alt="프로필 이미지"
            width={192}
            height={192}
            className="object-fill"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center md:text-left mb-2">김 찬</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center md:text-left mb-8">Backend Developer</p>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="w-1 h-5 bg-blue-500 mr-2"></span>
                Contact
              </h2>
              <div className="flex items-center gap-3 ml-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:bitnalchan92@gmail.com" className="hover:text-blue-500 transition-colors break-all">
                  bitnalchan92@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <span className="w-1 h-5 bg-blue-500 mr-2"></span>
                Channel
              </h2>
              <div className="space-y-2 ml-3">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                  <Globe className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://bitnalchan92.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors break-all"
                  >
                    bitnalchan92.github.io
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">
                  <Github className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://github.com/bitnalchan92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors break-all"
                  >
                    github.com/bitnalchan92
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
