/** @type {import('tailwindcss').Config} */

const extendedColors = {
  Blue: "hsl(246, 80%, 60%)",
  Orange: "hsl(15, 100%, 70%)",
  SoftBlue: "hsl(195, 74%, 62%)",
  LightRed: "hsl(348, 100%, 68%)",
  LimeGreen: "hsl(145, 58%, 55%)",
  Violet: "hsl(264, 64%, 52%)",
  SoftOrange: "hsl(43, 84%, 65%)",
  VeryDarkBlue: "hsl(226, 43%, 10%)",
  DarkBlue: "hsl(235, 46%, 20%)",
  DarkBlueHover: "hsl(234,41%,33%)",
  DesaturatedBlue: "hsl(235, 45%, 61%)",
  PaleBlue: "hsl(236, 100%, 87%)",
  White: "hsl(0, 0%, 100%)",
};

module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: extendedColors,
      backgroundColor: {
        Work: extendedColors.Orange,
        Play: extendedColors.SoftBlue,
        Study: extendedColors.LightRed,
        Exercise: extendedColors.LimeGreen,
        Social: extendedColors.Violet,
        SelfCare: extendedColors.SoftOrange,
      },
      backgroundImage: {
        Work: "url('./src/images/icon-work.svg')",
        Play: "url(./src/images/icon-play.svg)",
        Study: "url(./src/images/icon-study.svg)",
        Exercise: "url(./src/images/icon-exercise.svg)",
        Social: "url(./src/images/icon-social.svg)",
        SelfCare: "url(./src/images/icon-self-care.svg)",
      },
      backgroundPosition: {
        Work: "right 1.0925rem top -0.6819rem",
        Play: "right 0.6875rem top -0.9rem",
        Study: "right 1.0669rem top -0.3781rem",
        Exercise: "right 1.1013rem top -0.0262rem",
        Social: "right 0.8425rem top -0.9375rem",
        SelfCare: "right 1.25rem top -18.7904px",
      },
      backgroundSize: {
        Work: "4.875rem 4.875rem",
        Play: "5.625rem 5.625rem",
        Study: "4.875rem 4.875rem",
        Exercise: "4.9781rem 3.3425rem",
        Social: "4.6rem 6.25rem",
        SelfCare: "4.875rem 4.875rem",
      },
    },
  },
  plugins: [],
};
