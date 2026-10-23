type Section = {
  id: string;
  label: string;
};

type CareerItem = {
  title: string;
  description: string;
};

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "skills", label: "Skills" },
];

const careerItems: CareerItem[] = [
  {
    title: "研究開発職",
    description: "研究開発職としてモノづくりに携わる",
  },
  {
    title: "オーストラリア滞在",
    description: "ワーキングホリデービザで約2年間オーストラリアに滞在",
  },
  {
    title: "現在",
    description: "AI・プログラミングを学びながらWebサイト制作に挑戦中",
  },
];

const skills: string[] = [
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

const linkClassName =
  "rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 dark:focus-visible:outline-sky-300";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
        <a href="#top" className={`text-sm font-semibold tracking-widest ${linkClassName}`}>
          SHO SAKAMOTO
        </a>
        <nav aria-label="ページ内リンク">
          <ul className="flex gap-5 text-sm text-foreground/75">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={linkClassName}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-5 sm:px-8">
        {/* HERO */}
        <section aria-labelledby="hero-heading" className="py-16 sm:py-24">
          <p className="text-sm font-medium tracking-widest text-sky-700 dark:text-sky-300">
            AI・プログラミングを学習中
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-bold tracking-wide sm:text-6xl"
          >
            SHO SAKAMOTO
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
            新しい技術を学びながら、Webサイト制作に挑戦しています。
          </p>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-foreground/10 py-14 sm:py-20"
        >
          <SectionHeading id="about-heading" label="About" title="自己紹介" />
          <div className="mt-8 max-w-2xl space-y-4 text-base text-foreground/85 sm:text-lg">
            <p>新しい技術を学びながら、Webサイト制作に挑戦しています。</p>
            <p>
              前職は、研究開発職としてモノづくりへ貢献をしていました。その後、ワーホリビザで約2年間オーストラリアへ滞在しました。
            </p>
          </div>
        </section>

        {/* CAREER */}
        <section
          id="career"
          aria-labelledby="career-heading"
          className="border-t border-foreground/10 py-14 sm:py-20"
        >
          <SectionHeading id="career-heading" label="Career" title="これまでの経歴" />
          <ol className="mt-8 space-y-8 border-l-2 border-sky-700/25 pl-6 dark:border-sky-300/25">
            {careerItems.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2.5 -left-[31px] size-3 rounded-full border-2 border-background bg-sky-700 dark:bg-sky-300"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-foreground/80">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="border-t border-foreground/10 py-14 sm:py-20"
        >
          <SectionHeading id="skills-heading" label="Skills" title="学習中の技術" />
          <p className="mt-4 text-sm text-foreground/75 sm:text-base">
            以下はすべて現在学習中の技術です。実際に手を動かしながら、少しずつ理解を深めています。
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center justify-between gap-3 rounded-xl border border-foreground/10 bg-white/70 px-5 py-4 shadow-sm dark:bg-white/5"
              >
                <span className="font-semibold">{skill}</span>
                <span className="shrink-0 rounded-full bg-sky-700/10 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-300/15 dark:text-sky-200">
                  学習中
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <p className="mx-auto max-w-3xl px-5 py-8 text-sm text-foreground/70 sm:px-8">
          © SHO SAKAMOTO
        </p>
      </footer>
    </div>
  );
}

function SectionHeading({
  id,
  label,
  title,
}: {
  id: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
        {label}
      </p>
      <h2 id={id} className="mt-2 text-2xl font-bold sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
