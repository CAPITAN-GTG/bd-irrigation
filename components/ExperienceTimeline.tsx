const MILESTONES = [
  {
    title: "Deep roots in irrigation & landscaping",
    body: "Our team brings more than a decade of hands-on experience across residential and commercial projects before launching Big Dawg Irrigation.",
  },
  {
    title: "2023 — Big Dawg Irrigation",
    body: "Founded to serve DFW with faith-driven workmanship, transparent communication, and reliable year-round care.",
  },
  {
    title: "Today",
    body: "Licensed service, efficient systems, and maintenance programs designed for Texas weather and your property goals.",
  },
] as const;

export function ExperienceTimeline() {
  return (
    <ol className="experience-timeline">
      {MILESTONES.map(({ title, body }, i) => (
        <li key={title} className="experience-timeline__item">
          <span className="experience-timeline__marker" aria-hidden>
            {i + 1}
          </span>
          <div>
            <h3 className="experience-timeline__title">{title}</h3>
            <p className="experience-timeline__body">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
