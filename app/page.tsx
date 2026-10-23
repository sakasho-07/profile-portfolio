type Section = {
  id: string;
  label: string;
};

type CareerItem = {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
};

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "skills", label: "Skills" },
];

const careerItems: CareerItem[] = [
  {
    period: "大学院",
    title: "大学院修了",
    description: "大学院で専門分野を学び、研究に取り組む。",
  },
  {
    period: "約4年半",
    title: "化学メーカー／研究開発職",
    description:
      "化学メーカーで研究開発の仕事に携わり、試行錯誤を重ねながら課題に向き合う経験を積む。",
  },
  {
    period: "約2年間",
    title: "オーストラリア／ワーキングホリデー",
    description:
      "異なる文化の中で生活し、時間の使い方や自分自身に対する考え方を見つめ直す。",
  },
  {
    period: "NOW",
    title: "AI・プログラミング・Web制作",
    description:
      "AIとプログラミングを学びながらWebサイト制作に挑戦中。相手の想いや伝えたいことを丁寧に形にできる制作者を目指す。",
    isCurrent: true,
  },
];

type SkillGroupId = "used" | "learning" | "tool";

type SkillGroup = {
  id: SkillGroupId;
  label: string;
};

type Skill = {
  name: string;
  description: string;
  group: SkillGroupId;
};

const skillGroups: SkillGroup[] = [
  { id: "used", label: "このサイトで使用" },
  { id: "learning", label: "学習中" },
  { id: "tool", label: "学び方" },
];

const skills: Skill[] = [
  {
    name: "HTML / CSS",
    description:
      "学び始めたばかりです。このサイトでは、ページの構造と見た目の土台に使っています。",
    group: "used",
  },
  {
    name: "TypeScript",
    description:
      "このサイトのコードを書くのに使用しています。型のある書き方を学びながら取り組んでいます。",
    group: "used",
  },
  {
    name: "Next.js",
    description:
      "このサイトの土台となるフレームワークです。ページの作り方を学びながら制作しています。",
    group: "used",
  },
  {
    name: "Tailwind CSS",
    description:
      "このサイトのデザインに使用しています。色や余白を調整しながら、使い方を覚えています。",
    group: "used",
  },
  {
    name: "JavaScript",
    description: "TypeScriptの土台として、基礎から学習しています。",
    group: "learning",
  },
  {
    name: "Git / GitHub",
    description:
      "このサイトのコード管理に使い始めました。操作に慣れるため練習しています。",
    group: "learning",
  },
  {
    name: "ChatGPT",
    description:
      "わからないことの調べ方や、制作の進め方の相談に活用しています。",
    group: "tool",
  },
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
        <section aria-labelledby="hero-heading" className="py-8 sm:py-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#eadccb] bg-[#fbf5ec] px-6 py-14 text-[#4a3426] sm:px-12 sm:py-20 dark:border-[#4a3a2e] dark:bg-[#2a211b] dark:text-[#f3e8da]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-[#e7a27f]/25 blur-3xl sm:size-80 dark:bg-[#c8714a]/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-16 size-56 rounded-full bg-[#e9cfa9]/40 blur-3xl dark:bg-[#8a5a3c]/20"
            />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#b4532f] dark:text-[#e8987a]">
                PORTFOLIO / 2026
              </p>
              <h1
                id="hero-heading"
                className="mt-6 text-3xl leading-snug font-bold sm:text-5xl sm:leading-tight"
              >
                <span className="inline-block">経験をつなぎ、</span>
                <span className="inline-block">新しい価値をつくる。</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-loose text-[#6b5344] sm:text-lg dark:text-[#d9c8b6]">
                研究開発職で培った考える力と、オーストラリアでの約2年間の経験。現在はAIとプログラミングを学びながら、Web制作に挑戦しています。
              </p>

              <p className="mt-10 flex items-center gap-3 text-sm font-semibold tracking-[0.25em]">
                <span aria-hidden="true" className="h-px w-8 bg-[#b4532f] dark:bg-[#e8987a]" />
                SHO SAKAMOTO
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                {/* WORKSセクション追加後に #works へのリンクへ差し替える */}
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-[#c9b29c] px-6 py-3 text-sm font-semibold text-[#8a7262] dark:border-[#6b5546] dark:text-[#bfa995]"
                >
                  制作実績を見る
                  <span className="rounded-full bg-[#b4532f]/10 px-2 py-0.5 text-xs font-medium text-[#9a4425] dark:bg-[#e8987a]/15 dark:text-[#f0b49a]">
                    準備中
                  </span>
                </span>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b4532f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#9a4425] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4532f] dark:bg-[#e8987a] dark:text-[#2a211b] dark:hover:bg-[#f0b49a] dark:focus-visible:outline-[#e8987a]"
                >
                  プロフィール
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-foreground/10 py-14 sm:py-20"
        >
          <SectionHeading id="about-heading" label="About" title="自己紹介" />
          <div className="mt-8 max-w-2xl space-y-4 text-base text-foreground/85 sm:text-lg">
            <p>
              大学院を修了後、化学メーカーで約4年半、研究開発の仕事に携わりました。試行錯誤を重ねながら課題に向き合う日々を経て、自分の世界を広げるため、オーストラリアで約2年間のワーキングホリデーに挑戦しました。
            </p>
            <p>
              現地での生活を通じて、大きく変わったのは、時間や自分自身に対する考え方です。いつも何かをしなければと焦るのではなく、立ち止まって休むことや、自分にとって心地よい時間を大切にすること。周りと比べるのではなく、自分なりのペースで生きることの大切さに気づきました。
            </p>
            <p>
              帰国後は、新しい挑戦としてAIとプログラミングを学び、Webサイト制作に取り組んでいます。これまでの経験を活かしながら、相手の想いや伝えたいことを丁寧にくみ取り、一つひとつ形にしていける制作者を目指しています。
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
          <ol className="mt-10 space-y-10 border-l-2 border-[#b4532f]/25 pl-6 sm:space-y-12 dark:border-[#e8987a]/25">
            {careerItems.map((item) =>
              item.isCurrent ? (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-6 -left-[31px] size-3 rounded-full bg-[#b4532f] ring-4 ring-[#b4532f]/20 sm:top-7 dark:bg-[#e8987a] dark:ring-[#e8987a]/20"
                  />
                  <div className="rounded-2xl border border-[#eadccb] bg-[#fbf5ec] p-5 text-[#4a3426] sm:p-6 dark:border-[#4a3a2e] dark:bg-[#2a211b] dark:text-[#f3e8da]">
                    <p className="inline-block rounded-full bg-[#b4532f] px-2.5 py-0.5 text-xs leading-4 font-semibold tracking-[0.2em] text-white dark:bg-[#e8987a] dark:text-[#2a211b]">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-[#6b5344] dark:text-[#d9c8b6]">{item.description}</p>
                  </div>
                </li>
              ) : (
                <li key={item.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1 -left-[31px] size-3 rounded-full border-2 border-background bg-[#b4532f] dark:bg-[#e8987a]"
                  />
                  <p className="text-xs leading-5 font-semibold tracking-[0.2em] text-[#b4532f] dark:text-[#e8987a]">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-foreground/80">{item.description}</p>
                </li>
              ),
            )}
          </ol>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="border-t border-foreground/10 py-14 sm:py-20"
        >
          <SectionHeading id="skills-heading" label="Skills" title="技術と学び方" />
          <p className="mt-4 text-sm text-foreground/75 sm:text-base">
            このサイトで実際に使った技術と、いま学んでいる技術を分けて紹介しています。どれもまだ学習の途中ですが、手を動かしながら少しずつ理解を深めています。
          </p>
          <div className="mt-10 space-y-10 sm:space-y-12">
            {skillGroups.map((group) => {
              const groupSkills = skills.filter((skill) => skill.group === group.id);
              const isUsed = group.id === "used";

              return (
                <div key={group.id}>
                  <h3 className="text-xs leading-5 font-semibold tracking-[0.2em] text-[#b4532f] dark:text-[#e8987a]">
                    {group.label}
                  </h3>
                  <ul
                    className={`mt-4 grid grid-cols-1 gap-4 ${groupSkills.length > 1 ? "sm:grid-cols-2" : ""}`}
                  >
                    {groupSkills.map((skill) => (
                      <li
                        key={skill.name}
                        className={`rounded-2xl border border-[#eadccb] p-5 sm:p-6 dark:border-[#4a3a2e] ${isUsed ? "bg-[#fbf5ec] dark:bg-[#2a211b]" : ""}`}
                      >
                        <h4 className="font-semibold">{skill.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#6b5344] dark:text-[#d9c8b6]">
                          {skill.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
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
