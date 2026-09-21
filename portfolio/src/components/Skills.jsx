function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">

      {/* Section Heading */}
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          My Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies & Tools
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          My technical skills cover frontend and backend development,
          databases, AI/ML research, and modern development tools.
        </p>
      </div>


      {/* Skills Categories */}
      <div className="grid gap-6 md:grid-cols-2">


        {/* Frontend */}
        <SkillCategory
          title="Frontend Development"
          description="Building responsive and interactive user interfaces."
          skills={[
            "React.js",
            "JavaScript ES6+",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Responsive Design",
          ]}
        />


        {/* Backend */}
        <SkillCategory
          title="Backend Development"
          description="Developing APIs and server-side applications."
          skills={[
            "Laravel",
            "PHP",
            "REST APIs",
            "API Integration",
            "Authentication",
            "CRUD Operations",
          ]}
        />


        {/* Database & Tools */}
        <SkillCategory
          title="Database & Development Tools"
          description="Working with databases and modern development workflows."
          skills={[
            "MySQL",
            "SQL",
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
            "Laragon",
            "Jupyter Notebook",
          ]}
        />


        {/* AI / ML */}
        <SkillCategory
          title="AI / ML & NLP"
          description="Research and development using modern AI technologies."
          skills={[
            "Python",
            "Machine Learning",
            "NLP",
            "Speech-to-Text",
            "Text Summarization",
            "Whisper",
            "BART",
            "PEGASUS",
            "RAG",
            "FAISS",
            "LLMs",
            "Generative AI",
          ]}
        />

      </div>


      {/* MERN + AI Tools */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">


        {/* MERN */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Currently Expanding
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            MERN Stack
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Expanding full-stack development skills using MongoDB,
            Express.js, React.js, and Node.js.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map(
              (skill) => (
                <SkillBadge key={skill} name={skill} />
              )
            )}
          </div>

        </div>


        {/* AI Tools */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            AI Tools
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            AI-Assisted Development
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            Using AI tools for coding assistance, debugging, research,
            documentation, prompt engineering, and AI workflows.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "ChatGPT",
              "Claude",
              "DeepSeek",
              "Gemini",
              "Ollama",
            ].map((tool) => (
              <SkillBadge key={tool} name={tool} />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}


/* Reusable Category Component */
function SkillCategory({ title, description, skills }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>

    </div>
  );
}


/* Reusable Badge Component */
function SkillBadge({ name }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
      {name}
    </span>
  );
}


export default Skills;