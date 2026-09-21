import profilePic from "../assets/profilePic.jpg";

function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-12 px-8 py-16 md:flex-row md:justify-between">

      {/* Left Side - Text */}
      <div className="max-w-2xl text-center md:text-left">

        <p className="mb-4 text-lg text-cyan-400">
          Hello, I'm
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Asmeera Nadeem
        </h2>

        <h3 className="mt-4 text-2xl font-semibold text-gray-300">
          Full Stack Developer
        </h3>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
          I build modern and scalable web applications using
          Laravel and React, while exploring AI, Machine Learning,
          NLP and Generative AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 md:justify-start">

          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="https://github.com/asmeeranadeem22-svg"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-600 px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-400"
          >
            GitHub
          </a>

        </div>

      </div>


      {/* Right Side - Profile Image */}
      <div>

        <div className="rounded-full border-2 border-cyan-400/40 p-3 shadow-2xl shadow-cyan-500/20">

          <img
            src={profilePic}
            alt="Asmeera Nadeem"
            className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72 md:h-80 md:w-80"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;