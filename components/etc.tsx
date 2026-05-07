const certifications = [
  {
    date: "2025.9",
    title: "정보처리기사",
    issuer: "한국산업인력공단",
  },
  {
    date: "2023.12",
    title: "SQLD 자격증",
    issuer: "한국데이터베이스진흥센터",
  },
];

export default function Etc() {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <h2 className="section-title">Etc</h2>
      </div>

      <div className="timeline-list">
        {certifications.map((certification) => (
          <article key={certification.title} className="timeline-item">
            <div>
              <p className="timeline-date">{certification.date}</p>
            </div>
            <div>
              <h3 className="entry-title mb-2">{certification.title}</h3>
              <p className="entry-meta">{certification.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
