import { Badge } from "@/components/ui/badge";

const projects = [
  {
    period: "2024.07 ~ 2025.02",
    title: "온라인 강사를 위한 LMS 시스템",
    meta: "중앙HTA 국비교육 팀 프로젝트",
    points: [
      "아이디어 제시 및 팀장 역할 수행",
      "AWS를 이용하여 배포 프로세스 작업 수행",
      "관리자용 메뉴(학원 및 강사 추가 및 시스템 공지사항 등록) 기능 개발",
      "파일(일반 & 영상 파일) 업로드 및 다운로드 기능 구현",
      "영상 스트리밍을 위한 FFmpeg을 활용 및 업로드 & 다운로드 기능 구현 및 개선",
      "프로젝트 코드 컨벤션 유지 및 프로젝트 문서 작성",
    ],
    skills: [
      "Java",
      "JavaScript",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "IAM",
      "S3",
      "CloudWatch",
      "EC2",
      "RDS",
      "Docker",
      "Jenkins",
    ],
  },
];

export default function Project() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2 className="section-title">Project</h2>
      </div>

      <div className="timeline-list">
        {projects.map((project) => (
          <article key={project.title} className="timeline-item">
            <div>
              <p className="timeline-date">{project.period}</p>
            </div>

            <div className="min-w-0">
              <h3 className="entry-title mb-2">{project.title}</h3>
              <p className="entry-meta mb-5">{project.meta}</p>

              <ul className="clean-list mb-5">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="soft-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
