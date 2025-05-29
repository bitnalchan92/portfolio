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
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <ThemeToggle/>

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

      {/* 기타 섹션 */}
      <Etc />
    </div>
  )
}
