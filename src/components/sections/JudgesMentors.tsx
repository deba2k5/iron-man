import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  Brain,
  Cube,
  Palette,
  CloudArrowUp,
  ShieldCheck,
  ChartLineUp,
  Rocket,
  Code,
  UsersThree,
  Lightning,
  Compass,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

const judges = [
  ["JUDGE 01", "AI / ML", Brain],
  ["JUDGE 02", "Web3 & Blockchain", Cube],
  ["JUDGE 03", "Product Design", Palette],
  ["JUDGE 04", "Cloud Infrastructure", CloudArrowUp],
  ["JUDGE 05", "Security", ShieldCheck],
  ["JUDGE 06", "Growth & Strategy", ChartLineUp],
] as const;

const mentors = [
  ["MENTOR 01", "Full-Stack Engineering", Code],
  ["MENTOR 02", "Startup & Founders", Rocket],
  ["MENTOR 03", "Community Building", UsersThree],
  ["MENTOR 04", "Rapid Prototyping", Lightning],
  ["MENTOR 05", "Technical Direction", Compass],
  ["MENTOR 06", "Design Systems", Sparkle],
] as const;

function Row({
  people,
  direction,
}: {
  people: readonly (readonly [string, string, typeof Brain])[];
  direction: "left" | "right";
}) {
  const loop = [...people, ...people];
  return (
    <div className="marquee-row group overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {loop.map(([name, domain, Icon], index) => (
          <TiltCard key={`${name}-${index}`} className="w-64 flex-none md:w-72">
            <div className="card-surface relative flex h-full flex-col gap-4 p-6">
              <div aria-hidden className="absolute right-4 top-4 h-10 w-10 rounded-full border border-accent/30 bg-accent/5" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_-4px_rgba(212,162,47,0.55)]">
                <Icon size={22} weight="bold" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">{domain}</p>
                <h3 className="mt-2 font-sans text-lg font-semibold tracking-tight text-foreground">{name}</h3>
              </div>
              <p className="mt-auto text-xs leading-relaxed text-zinc-500">
                Confirmed lineup dropping soon &mdash; full profile incoming.
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

export function JudgesMentors() {
  return (
    <section id="judges" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[160px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowBadge className="!text-white">COMMAND COUNCIL // JUDGES &amp; MENTORS</EyebrowBadge>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.94] tracking-tighter text-foreground md:text-7xl">
            Meet the <span className="text-accent">council.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400">
            Industry judges and hands-on mentors guiding every team through the build window. Tilt a card to inspect the file.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          <Row people={judges} direction="left" />
          <Row people={mentors} direction="right" />
        </div>
      </div>
    </section>
  );
}
