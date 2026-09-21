function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          My Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects & Work
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          A selection of my full-stack development, React,
          JavaScript, and AI/ML projects.
        </p>
      </div>


      {/* Main Projects */}
      <div className="grid gap-6 md:grid-cols-2">


        {/* AI Project */}
        <ProjectCard
          featured
          type="AI / ML Research"
          title="AI-Based Speech-to-Text Meeting Summarization"
          description="MPhil research project for converting meeting speech into structured meeting minutes using speech recognition, abstractive summarization, semantic retrieval, RAG, and Large Language Models."
          technologies={[
            "Whisper",
            "BART",
            "PEGASUS",
            "MPNet",
            "FAISS",
            "RAG",
            "LLaMA",
            "Python",
          ]}
        />


        {/* Full Stack */}
        <ProjectCard
          type="Full Stack"
          title="Digital Profile Builder"
          description="Full-stack application built with React.js and Laravel, featuring reusable frontend components and backend REST API integration."
          technologies={[
            "React.js",
            "Laravel",
            "PHP",
            "MySQL",
            "REST API",
          ]}
          link="https://github.com/asmeeranadeem22-svg/bitknox_profile_builder"
        />


        {/* React Counter */}
        <ProjectCard
          type="React.js"
          title="React Counter Project"
          description="React application demonstrating state management, event handling, and component-based development using useState."
          technologies={[
            "React.js",
            "JavaScript",
            "useState",
            "CSS",
          ]}
          link="https://github.com/asmeeranadeem22-svg/react-counter-project"
        />


        {/* React Project */}
        <ProjectCard
          type="React.js"
          title="React Project"
          description="Frontend application developed using React, JSX, JavaScript and reusable component-based UI."
          technologies={[
            "React.js",
            "JSX",
            "JavaScript",
            "CSS",
          ]}
          link="https://github.com/asmeeranadeem22-svg/react-project"
        />


        {/* JavaScript Collection */}
        <ProjectCard
          type="JavaScript"
          title="JavaScript Projects Collection"
          description="Collection of JavaScript projects covering DOM manipulation, events, functions, conditions, and interactive web logic."
          technologies={[
            "JavaScript",
            "HTML",
            "CSS",
            "DOM",
          ]}
          link="https://github.com/asmeeranadeem22-svg/Javascript-projects"
        />


        {/* Background Game */}
        <ProjectCard
          type="JavaScript"
          title="Background Color Game"
          description="Interactive browser game demonstrating DOM manipulation, event handling, random values and dynamic UI updates."
          technologies={[
            "JavaScript",
            "DOM",
            "Events",
            "HTML",
            "CSS",
          ]}
          link="https://github.com/asmeeranadeem22-svg/background-color-game"
        />


        {/* Calculator */}
        <ProjectCard
          type="JavaScript"
          title="Scientific Calculator"
          description="Interactive calculator application built with JavaScript, HTML and CSS for handling mathematical operations and user input."
          technologies={[
            "JavaScript",
            "HTML",
            "CSS",
            "DOM",
          ]}
          link="https://github.com/asmeeranadeem22-svg/calculator-project"
        />


        {/* Guess Game */}
        <ProjectCard
          type="JavaScript"
          title="Guess Number Game"
          description="Interactive number guessing game demonstrating JavaScript logic, conditions, random numbers, attempts and DOM manipulation."
          technologies={[
            "JavaScript",
            "DOM",
            "HTML",
            "CSS",
          ]}
          link="https://github.com/asmeeranadeem22-svg/guessing-no-game"
        />


        {/* BMI */}
        <ProjectCard
          type="JavaScript"
          title="BMI Calculator"
          description="BMI calculator that accepts user input, performs calculations and dynamically displays the result."
          technologies={[
            "JavaScript",
            "HTML",
            "CSS",
            "DOM",
          ]}
          link="https://github.com/asmeeranadeem22-svg/BMI-GENERATOR--JS.PROJECT"
        />

      </div>


      {/* Laravel Projects */}
      <div className="mt-24">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Currently Building
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Laravel Projects
        </h3>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Backend-focused projects currently being developed to
          strengthen my Laravel, API, authentication and database
          development skills.
        </p>


        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <ProjectCard
            type="Currently Building"
            title="Laravel E-Commerce API"
            description="Backend project focused on product management, authentication, REST APIs, database relationships and e-commerce workflows."
            technologies={[
              "Laravel",
              "PHP",
              "MySQL",
              "REST API",
              "Authentication",
            ]}
          />


          <ProjectCard
            type="Currently Building"
            title="Employee Management System"
            description="Laravel application focused on employee records, authentication, CRUD operations, database relationships and management workflows."
            technologies={[
              "Laravel",
              "PHP",
              "MySQL",
              "CRUD",
              "REST API",
            ]}
          />

        </div>
      </div>

    </section>
  );
}


/* Reusable Project Card */
function ProjectCard({
  type,
  title,
  description,
  technologies,
  link,
  featured,
}) {
  return (
    <div
      className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 ${
        featured
          ? "border-cyan-400/30 bg-cyan-400/5"
          : "border-white/10 bg-white/5"
      }`}
    >

      {/* Project Type */}
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        {type}
      </p>


      {/* Title */}
      <h3 className="mt-3 text-2xl font-semibold">
        {title}
      </h3>


      {/* Description */}
      <p className="mt-4 leading-7 text-gray-400">
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


      {/* GitHub */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View on GitHub
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </a>
      )}

    </div>
  );
}


export default Projects;