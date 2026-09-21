function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          My Experience
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Professional Experience
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          My professional experience across full-stack development,
          frontend development, and computer science education.
        </p>
      </div>


      {/* Timeline */}
      <div className="relative">

        {/* Timeline Line */}
        <div className="absolute left-2 top-0 hidden h-full w-px bg-white/10 md:block"></div>


        <div className="space-y-10">


          {/* Bitknox */}
          <ExperienceCard
            date="Sep 2025 – May 2026"
            title="Full Stack Developer Intern"
            company="Bitknox Global Limited"
            description="Worked on full-stack web development using React.js for frontend interfaces and Laravel/PHP for backend development. Developed reusable components, integrated REST APIs, worked with MySQL databases, and tested APIs using Postman."
            technologies={[
              "React.js",
              "Laravel",
              "PHP",
              "MySQL",
              "REST API",
              "Postman",
            ]}
            current
          />


          {/* Teaching */}
          <ExperienceCard
            date="Jan 2024 – Jun 2024"
            title="Computer Science Teacher"
            company="Unique School System, Lahore"
            description="Taught Computer Science to secondary and higher-secondary students, explaining programming concepts through practical examples, exercises, and assessments."
            technologies={[
              "Computer Science",
              "Programming",
              "Problem Solving",
              "Teaching",
            ]}
          />


          {/* Freelance */}
          <ExperienceCard
            date="Jul 2021 – Dec 2021"
            title="Freelance Frontend & UI Developer"
            company="Remote"
            description="Developed responsive frontend interfaces and user-focused web pages using HTML, CSS, JavaScript, and Bootstrap."
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Responsive Design",
            ]}
          />

        </div>
      </div>

    </section>
  );
}


/* Reusable Experience Card */
function ExperienceCard({
  date,
  title,
  company,
  description,
  technologies,
  current,
}) {
  return (
    <div className="relative md:pl-12">

      {/* Timeline Dot */}
      <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-slate-950 md:block"></div>


      {/* Card */}
      <div
        className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
          current
            ? "border-cyan-400/30 bg-cyan-400/5"
            : "border-white/10 bg-white/5"
        }`}
      >

        {/* Date */}
        <p className="text-sm font-semibold text-cyan-400">
          {date}
        </p>


        {/* Title */}
        <h3 className="mt-3 text-2xl font-semibold">
          {title}
        </h3>


        {/* Company */}
        <p className="mt-2 text-lg text-gray-300">
          {company}
        </p>


        {/* Description */}
        <p className="mt-5 max-w-3xl leading-8 text-gray-400">
          {description}
        </p>


        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}


export default Experience;