import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import {
  UserPlus,
  FileText,
  ListChecks,
  EnvelopeSimple,
  MapPin,
  Rocket,
  FlagCheckered,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

const stats = [
  ["1000+", "Registrations", "Builders preparing for launch", "92%"],
  ["30+", "Community collaborations", "Networks in the alliance", "42%"],
  ["150+", "Projects", "Ideas ready to become real", "68%"],
  ["50+", "Colleges", "Campuses joining the mission", "51%"],
];

const journey = [
  ["01", "Registrations open", "30 JULY 2026", "Your signal is live. Assemble your squad and secure your place in the mission.", UserPlus],
  ["02", "Problem statements release", "MISSION BRIEF", "The challenge vault opens with the briefs that will define your build.", FileText],
  ["03", "Selection complete", "SHORTLIST", "The selected teams move forward to the next stage of CodeVoyage.", ListChecks],
  ["04", "Acceptance mail rollout", "CLEARANCE", "Official access credentials are dispatched to every chosen builder.", EnvelopeSimple],
  ["05", "Venue check-in", "ASSEMBLY POINT", "Arrive, verify your team, and enter the command floor.", MapPin],
  ["06", "Hackathon starts", "BUILD WINDOW", "Eight hours. One shared mission. Turn your strongest idea into a working reality.", Rocket],
  ["07", "Hackathon ends", "FINAL SUBMISSION", "Lock your final build, submit your project, and prepare the showcase.", FlagCheckered],
  ["08", "Winners assemble", "FINAL REVEAL", "The strongest missions are recognized as the CodeVoyage winners.", Trophy],
] as const;

const sponsors = ["TITLE PARTNER", "INNOVATION PARTNER", "COMMUNITY ALLY", "CLOUD PARTNER", "MEDIA PARTNER"];
const faqs = [
  ["What is CodeVoyage?", "CodeVoyage is an 8-hour hackathon where student teams collaborate, build, and present technology projects around a shared set of challenges."],
  ["Who can participate?", "Students from participating colleges can register, form a team, and complete the selection process before the hackathon."],
  ["How large can a team be?", "Final team-size guidelines will be shared with the official problem statement release."],
  ["What should we bring?", "Bring your laptop, charging gear, student ID, and the readiness to build something meaningful in eight hours."],
];

export function CodeVoyageJourney() {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-end gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <EyebrowBadge className="!text-white">CODEVOYAGE // THE BRIEF</EyebrowBadge>
            <h2 className="mt-7 max-w-[11ch] font-sans text-5xl font-semibold leading-[0.92] tracking-tighter text-foreground md:text-7xl">What is <span className="text-accent">CodeVoyage?</span></h2>
          </div>
          <div className="border-l border-accent/50 pl-6 md:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Mission duration // 08:00:00</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">CodeVoyage is an 8-hour hackathon for the builders ready to answer the call. Assemble your team, choose a challenge, and turn an idea into a live project before the final clock reaches zero.</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">This is where campuses converge, communities collaborate, and the next generation of problem-solvers begins its journey.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(([value, label, detail], index) => (
            <article key={label} className="group relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-6 shadow-[16px_20px_0_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:rotate-[1deg] hover:border-accent/40 hover:shadow-[16px_24px_0_rgba(212,162,47,0.12)]">
              <div aria-hidden className="absolute right-5 top-5 h-16 w-16 rotate-45 border border-accent/30 bg-accent/5 transition-transform duration-500 group-hover:rotate-[135deg]" />
              <div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(280px circle at 20% 0%, rgba(212,162,47,0.12), transparent 60%)" }} />
              <div className="relative flex h-full flex-col justify-between">
                <span className="font-mono text-[10px] tracking-[0.28em] text-zinc-500">DATA // 0{index + 1}</span>
                <div><p className="font-sans text-5xl font-semibold tracking-tighter text-foreground">{value}</p><h3 className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{label}</h3><p className="mt-4 text-sm leading-relaxed text-zinc-500">{detail}</p></div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><EyebrowBadge className="!text-white">LIVE // MISSION DATA</EyebrowBadge><h2 className="mt-6 max-w-[9ch] font-sans text-4xl font-semibold leading-[0.94] tracking-tighter text-foreground md:text-6xl">Built by the <span className="text-accent">numbers.</span></h2><p className="mt-5 max-w-[36ch] text-base leading-relaxed text-zinc-400">A growing network of teams, campuses, and collaborators powering the next CodeVoyage.</p></div>
          <div className="grid min-h-[360px] grid-cols-4 gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-5 shadow-[0_30px_80px_-45px_rgba(212,162,47,0.65)] md:gap-6 md:p-8">
            {stats.map(([value, label, , height], index) => (
              <div key={label} className="flex min-w-0 flex-col justify-end"><div className="mb-3 font-mono text-[10px] text-zinc-500">0{index + 1}</div><div className="relative flex h-56 items-end border-x border-t border-white/10 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:100%_25%]"><div className="group relative w-full px-1 md:px-2" style={{ height }}><div className="absolute inset-x-1 bottom-0 h-full bg-gradient-to-t from-accent/60 via-accent to-yellow-100 shadow-[0_0_30px_rgba(212,162,47,0.4)] transition-transform group-hover:scale-y-110 md:inset-x-2" /><div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border border-white/70 bg-accent" /></div></div><p className="mt-4 font-sans text-xl font-semibold tracking-tight text-foreground">{value}</p><p className="mt-1 break-words font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-zinc-500">{label}</p></div>
            ))}
          </div>
        </div>

        <div id="timeline" className="mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <EyebrowBadge className="!text-white">THE JOURNEY // 2026</EyebrowBadge>
            <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.94] tracking-tighter text-foreground md:text-7xl">Follow the <span className="text-accent">signal.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">Scroll down the route from your first registration to the final winner reveal.</p>
          </div>

          <div className="relative mx-auto mt-24 max-w-5xl">
            {/* Center spine */}
            <div aria-hidden className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-1/2 md:-translate-x-1/2">
              <div className="absolute inset-0 w-px shadow-[0_0_16px_2px_rgba(212,162,47,0.55)]" />
            </div>
            <div aria-hidden className="absolute -top-3 left-6 h-6 w-6 -translate-x-1/2 rounded-full border border-accent bg-background shadow-[0_0_20px_rgba(212,162,47,0.55)] md:left-1/2" />
            <div aria-hidden className="absolute bottom-0 left-6 h-6 w-6 -translate-x-1/2 rotate-45 border-b border-r border-accent bg-background md:left-1/2" />

            <div className="space-y-8 md:space-y-4">
              {journey.map(([step, title, date, text, Icon], index) => {
                const flip = index % 2 === 1;
                return (
                  <article
                    key={step}
                    className={
                      "group relative grid gap-4 pl-16 md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-0 md:pl-0 md:py-6 " +
                      (flip ? "md:text-right" : "")
                    }
                  >
                    {/* Node */}
                    <div className="absolute left-6 top-1 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-accent/70 bg-zinc-950 shadow-[0_0_0_4px_rgba(10,10,11,1),0_0_24px_rgba(212,162,47,0.35)] transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(10,10,11,1),0_0_32px_rgba(212,162,47,0.65)] md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      <Icon size={18} weight="bold" className="text-accent" />
                    </div>

                    {/* Connector stub (desktop) */}
                    <div
                      aria-hidden
                      className={
                        "hidden md:absolute md:top-1/2 md:block md:h-px md:w-10 md:-translate-y-1/2 md:bg-gradient-to-r md:from-accent/60 md:to-accent/0 " +
                        (flip ? "md:right-1/2 md:bg-gradient-to-l" : "md:left-1/2")
                      }
                    />

                    <div className={flip ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}>
                      <div
                        className={
                          "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-zinc-900/90 hover:shadow-[0_20px_50px_-25px_rgba(212,162,47,0.5)] " +
                          (flip ? "md:ml-10" : "md:mr-10")
                        }
                      >
                        <div aria-hidden className="absolute right-0 top-0 h-20 w-20 border-b border-l border-accent/20" />
                        <div className={"flex items-center gap-3 " + (flip ? "md:flex-row-reverse" : "")}>
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">{date}</span>
                          <span className="font-mono text-[10px] text-zinc-600">STEP {step}</span>
                        </div>
                        <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div id="sponsors" className="mt-32 border-y border-white/10 py-20"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><EyebrowBadge className="!text-white">THE ALLIANCE</EyebrowBadge><h2 className="mt-5 font-sans text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">Sponsors &amp; partners</h2></div><p className="max-w-sm text-sm leading-relaxed text-zinc-500">Partner with the builders, communities, and ideas defining the next mission.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{sponsors.map((sponsor, index) => <div key={sponsor} className="group flex min-h-32 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.05] hover:shadow-[0_16px_40px_-24px_rgba(212,162,47,0.55)]"><span className="font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-accent">0{index + 1}</span><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">{sponsor}</span></div>)}</div></div>

        <div id="faq" className="mx-auto mt-28 max-w-4xl"><div className="text-center"><EyebrowBadge className="!text-white">INTELLIGENCE FILE // FAQ</EyebrowBadge><h2 className="mt-6 font-sans text-5xl font-semibold tracking-tighter text-foreground md:text-6xl">Questions, answered.</h2></div><div className="mt-12 divide-y divide-white/10 border-y border-white/10">{faqs.map(([question, answer], index) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sans text-lg font-medium text-foreground transition-colors hover:text-accent"><span><span className="mr-3 font-mono text-[10px] tracking-[0.2em] text-accent">0{index + 1}</span>{question}</span><span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/15 text-lg text-accent transition-all duration-300 group-open:rotate-45 group-open:border-accent/60">+</span></summary><p className="max-w-2xl pt-4 pr-10 text-sm leading-relaxed text-zinc-400">{answer}</p></details>)}</div></div>
      </div>
    </section>
  );
}
