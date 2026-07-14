export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Sometimes you need to ship before you feel ready.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // LAUNCH",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Build boldly. Iterate relentlessly.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // BUILD",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "The next milestone begins with this commit.",
    speaker: "IEM / UEM",
    film: "CODEVOYAGE // DEPLOY",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
