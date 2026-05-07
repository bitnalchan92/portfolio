"use client"

import Profile from "@/components/profile";
import {ThemeToggle} from "@/components/theme-toggle";
import Introduce from "@/components/introduce";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Education from "@/components/education";
import Etc from "@/components/etc";
import BlogPosts from "@/components/blog-posts";

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <ThemeToggle/>

      <Profile/>

      <Introduce />

      <Skill />

      <Experience />

      <Project />

      <Education />

      <Etc />

      <BlogPosts />
    </div>
  )
}
