function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Full Stack Developer
          <span className="text-cyan-400"> & AI/ML Researcher</span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xl leading-9 text-gray-300">
            I am a Full Stack Developer focused on building
            modern, responsive, and scalable web applications
            using
            <span className="text-cyan-400">
              {" "} React.js, Laravel, and PHP.
            </span>
          </p>

          <p className=" mt-6 leading-9 text-gray-400">
            I work across both frontend and backend development,
            building interactive user interfaces, REST APIs,
            database-driven applications, and complete web
            application workflows.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            I am also expanding my full-stack development skills
            through the
            <span className="text-cyan-400">
              {" "}MERN Stack 
            </span>
              <gap>  including MongoDB, Express.js, React.js, and Node.js.</gap>
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            Alongside software development, I am pursuing my MPhil
            research in
            <span className="text-cyan-400">
              {" "}AI, Machine Learning, and Natural Language Processing
            </span>.
            My research focuses on Speech-to-Text Meeting Summarization
            using modern AI models and Large Language Models.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              React.js
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Laravel
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              MERN Stack
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              AI / ML
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              NLP
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Generative AI
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="text-3xl font-bold text-cyan-400">React</p>
            <p className="mt-2 text-sm text-gray-400">
              Frontend Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="text-3xl font-bold text-cyan-400">Laravel</p>
            <p className="mt-2 text-sm text-gray-400">
              Backend & REST APIs
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="text-3xl font-bold text-cyan-400">MERN</p>
            <p className="mt-2 text-sm text-gray-400">
              Full Stack Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="text-3xl font-bold text-cyan-400">AI / ML</p>
            <p className="mt-2 text-sm text-gray-400">
              Research & Development
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-transparent p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Current Focus
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Laravel + React + MERN + Artificial Intelligence
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Building modern full-stack web applications while
              expanding my expertise in the MERN Stack and exploring
              NLP, Large Language Models, Generative AI, and intelligent
              software systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;