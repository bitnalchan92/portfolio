const educations = [
  {
    period: "2024.07 ~ 2025.02",
    title: "중앙 HTA 국비과정",
    description: "Public Cloud 활용 자바(JAVA) 웹 애플리케이션(Spring, Docker) 개발자 양성과정 수료",
  },
  {
    period: "2018.05 ~ 2018.11",
    title: "더조은 컴퓨터아카데미 국비과정",
    description: "아두이노를 활용한 자바기반의 사물인터넷(IOT)개발자 양성과정 수료",
  },
  {
    period: "2011.03 ~ 2018.02",
    title: "대진 대학교",
    description: "영어영문학과 / 미디어커뮤니케이션학과(부전공) 학사 졸업",
  },
  {
    period: "2008.03 ~ 2011.02",
    title: "선덕 고등학교",
    description: "인문계 졸업",
  },
];

export default function Education() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline-list">
        {educations.map((education) => (
          <article key={education.title} className="timeline-item">
            <div>
              <p className="timeline-date">{education.period}</p>
            </div>
            <div>
              <h3 className="entry-title mb-2">{education.title}</h3>
              <p className="entry-meta">{education.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
