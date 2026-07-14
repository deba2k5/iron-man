export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Initialize",
    quote: "Every great release starts with a first build.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // INITIALIZE",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Compile",
    quote: "The best systems work as one.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // COMPILE",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Deploy",
    quote: "What we build next is what matters.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // DEPLOY",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
