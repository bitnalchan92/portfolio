"use client"

import Profile from "@/components/profile";
import {ThemeToggle} from "@/components/theme-toggle";
import Introduce from "@/components/introduce";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Education from "@/components/education";
import Etc from "@/components/etc";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="fixed top-8 right-8 z-50">
          <ThemeToggle/>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* 프로필 섹션 */}
          <Profile/>

          {/* 소개 섹션 */}
          <Introduce />

          {/* 기술 스택 섹션 */}
          <Skill />

          {/* 경력 섹션 */}
          <Experience />

          {/* 프로젝트 섹션 */}
          <Project />

          {/* 교육 섹션 */}
          <Education />

          {/* 자격증 섹션 */}
          <Etc />
        </div>

        {/* Footer */}
        <footer className="mt-20 py-8 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Chan Kim. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
