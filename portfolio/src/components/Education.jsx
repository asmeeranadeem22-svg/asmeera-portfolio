function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          My Education
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Academic Background
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          My academic journey in Computer Science and Information
          Technology, with a focus on software development and
          Artificial Intelligence.
        </p>
      </div>


      {/* Education Cards */}
      <div className="grid gap-6 lg:grid-cols-2">


        {/* MPhil */}
        <EducationCard
          year="2024 – 2026"
          degree="MPhil Computer Science"
          institute="University of Lahore"
          description="Advanced study and research in Computer Science with a focus on Artificial Intelligence, Machine Learning, Natural Language Processing, and intelligent software systems."
          detail="Research: Speech-to-Text Meeting Summarization Using Machine Learning"
          tags={[
            "AI / ML",
            "NLP",
            "Machine Learning",
            "Speech-to-Text",
            "LLMs",
          ]}
          featured
        />


        {/* Bachelor */}
        <EducationCard
          year="2019 – 2023"
          degree="Bachelor of Information Technology"
          institute="The Government Sadiq Women’s University"
          description="Studied programming, software development, databases, web technologies, computer science fundamentals, and machine learning."
          detail="GPA: 3.35 / 4.0"
          tags={[
            "Programming",
            "Web Development",
            "Databases",
            "Machine Learning",
          ]}
        />

      </div>

    </section>
  );
}


/* Reusable Education Card */
function EducationCard({
  year,
  degree,
  institute,
  description,
  detail,
  tags,
  featured,
}) {
  return (
    <div
      className={`rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
        featured
          ? "border-cyan-400/30 bg-cyan-400/5"
          : "border-white/10 bg-white/5"
      }`}
    >

      {/* Year */}
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        {year}
      </p>


      {/* Degree */}
      <h3 className="mt-4 text-2xl font-semibold">
        {degree}
      </h3>


      {/* Institute */}
      <p className="mt-2 text-lg text-gray-300">
        {institute}
      </p>


      {/* Description */}
      <p className="mt-6 leading-8 text-gray-400">
        {description}
      </p>


      {/* Research / GPA */}
      <div className="mt-6 rounded-xl border border-white/10 bg-black/10 p-4">
        <p className="text-sm font-medium text-gray-300">
          {detail}
        </p>
      </div>


      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-300"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}


export default Education;
