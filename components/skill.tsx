import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";

export default function Skill() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring", "Spring Boot"]
    },
    {
      title: "Database & Storage",
      skills: ["MySQL", "Oracle", "Redis"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Postman", "GPT", "Jira", "Trello", "Figma", "Miro"]
    },
    {
      title: "Interest",
      skills: ["Node.js", "Express", "React", "NestJS", "NextJS", "Kubernetes"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-3"></span>
        SKILL
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 bg-white dark:bg-gray-800">
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all hover:scale-105 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}