
function ContactItem({ label, value, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-white/10"
    >
      <p className="text-sm text-gray-400">
        {label}
      </p>

      <p className="mt-1 break-all text-white">
        {value}
      </p>
    </a>
  );
}

function Contact() {
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=asmeeranadeem22@gmail.com";

  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >

      {/* Section Heading */}
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Let's Work Together
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Have a project, research idea, or job opportunity?
          Feel free to get in touch with me.
        </p>
      </div>


      {/* Contact Content */}
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Left Side */}
        <div className="space-y-4">

          {/* Email */}
          <ContactItem
            label="Email"
            value="asmeeranadeem22@gmail.com"
            href={gmailLink}
          />

          {/* Phone */}
          <ContactItem
            label="Phone"
            value="03005205728"
            href="tel:03005205728"
          />

          {/* GitHub */}
          <ContactItem
            label="GitHub"
            value="github.com/asmeeranadeem22-svg"
            href="https://github.com/asmeeranadeem22-svg"
            external={true}
          />

          {/* LinkedIn */}
          <ContactItem
            label="LinkedIn"
            value="linkedin.com/in/asmeera-nadeem-176600436"
            href="https://www.linkedin.com/in/asmeera-nadeem-176600436"
            external={true}
          />

        </div>


        {/* Right Side */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Available for Opportunities
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            I am open to opportunities related to Full Stack
            Development, React, Laravel, AI/ML, and NLP.
          </p>

          {/* Gmail Button */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
          >
            Send Me an Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
