import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2022.02 ~ 2023.06",
    company: "(주) 플리드",
    duration: "1년 5개월",
    roles: [
      {
        period: "2023.02 ~ 2023.06",
        title: "똑생 (前 영쩜일) / Co-founder, Backend Developer",
        summary: "의뢰인 맞춤형 개인회생 자동화 서비스 플랫폼 개발",
        points: [
          "NestJS 기반 RESTful API 서버 개발",
          "사용자 인증 및 권한 관리 시스템 개발",
          "법률 서적을 참고하여 개인회생 신청 서류 작성에 필요한 데이터 생성 로직 개발 및 Word파일 생성 기능 개발",
          "데이터 아키텍쳐 설계 및 TypeORM을 활용하여 DB Migration 전담",
          "외부 API(Payple, eformsign, Codef, Google Calender, Aligo, Nice 등) 연동을 위한 기능 개발",
          "AWS 기반 인프라 환경 구축, Slack & CloudWatch를 통한 운영 모니터링 자동화 구성",
        ],
        skills: [
          "JavaScript",
          "TypeScript",
          "NestJS",
          "AWS(S3, Lambda, CloudWatch, Elastic Beanstalk, RDS)",
          "Docker",
          "TypeORM",
        ],
      },
      {
        period: "2022.02 ~ 2023.01",
        title: "플리드 / Co-founder, Backend Developer",
        summary: "변호사 / 의뢰인간 소송에 필요한 모든 자료를 자유롭게 주고받을 수 있도록 지원하는 법률 전용 커뮤니케이션 플랫폼 개발",
        points: [
          "NestJS 기반 RESTful API 서버 개발",
          "사용자 유형(변호사 vs 의뢰인)에 따른 인증 및 접근 제어 구현",
          "PG사 연동을 통한 변호사 수임료 결제 플로우 개발 (결제 내역 조회, 환불 처리 포함)",
          "TypeORM 기반 데이터베이스 설계 및 DB Migration 전담",
          "사용자 피드백 기반 반복 개선을 통해 파일 업로드/다운로드 속도 및 안정성 향상",
        ],
        skills: [
          "JavaScript",
          "TypeScript",
          "NextJS",
          "NestJS",
          "AWS(S3, CloudWatch, Elastic Beanstalk, RDS)",
          "Docker",
          "TypeORM",
        ],
      },
    ],
  },
  {
    period: "2019.09 ~ 2021.09",
    company: "(주) 어바인",
    duration: "2년 1개월",
    roles: [
      {
        period: "2019.09 ~ 2021.09",
        title: "Junior Backend Developer",
        summary: "신한카드 내 청구 그룹에서 주요 배치 작업과 데이터 생성 로직을 개발 및 유지보수 하였으며, 실시간 모니터링 및 카드번호 암호화 프로젝트 참여",
        points: [
          "청구그룹 배치작업 개발 및 스케쥴 조정 및 모니터링 수행",
          "카드번호 암호화 프로젝트 수행 및 명세서 레이아웃 수정",
          "개인 / 법인 고객의 청구내역 산출 로직 개발",
          "온라인 서비스 및 은행 창구 직원용 화면(웹기반) 운영 및 유지보수",
        ],
        skills: [
          "Java",
          "DevOn Framework",
          "Oracle",
          "Linux",
          "SVN",
          "TrustForm",
          "INZent",
          "Control-M",
          "TestOne",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2 className="section-title">Experience</h2>
        <Badge variant="secondary" className="soft-badge">총 3년 8개월</Badge>
      </div>

      <div className="timeline-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="timeline-item">
            <div>
              <p className="timeline-date">{experience.period}</p>
            </div>

            <div className="min-w-0">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <h3 className="entry-title">{experience.company}</h3>
                <Badge variant="secondary" className="soft-badge">{experience.duration}</Badge>
              </div>

              <div className="space-y-8">
                {experience.roles.map((role) => (
                  <div key={role.title}>
                    <div className="mb-3 grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                      <p className="entry-meta">{role.period}</p>
                      <p className="font-semibold leading-7 text-foreground">{role.title}</p>
                    </div>
                    <p className="mb-4 readable-copy">{role.summary}</p>
                    <ul className="clean-list mb-5">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="soft-badge">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
