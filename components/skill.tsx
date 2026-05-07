import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring", "Spring Boot"],
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "Oracle", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Postman", "GPT", "Jira", "Trello", "Figma", "Miro"],
  },
  {
    title: "Interest",
    skills: ["Node.js", "Express", "React", "NestJS", "NextJS", "Kubernetes"],
  },
];

export default function Skill() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2 className="section-title">Skill</h2>
      </div>

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-foreground/65">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="soft-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
