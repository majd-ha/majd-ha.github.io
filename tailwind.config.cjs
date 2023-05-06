/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-3": "pulse 3s ease-in-out infinite",
        "slide-1": "slide 20s linear infinite",
        "slide-2": "slide2 20s linear infinite",
        "flip-2": "flip 4s linear 1",
        gradrollbl: " gardroll ease-in-out infinite 500ms",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(900px)" },
          "100%": { transform: "translateX(-1700px)" },
        },
        flip: {
          "0%": { display: "none" },
          "100%": { transform: "rotateY(180deg)" },
        },
        slide2: {
          "0%": { transform: "translateX(350px)" },

          "100%": { transform: "translateX(-2190px)" },
        },
        gardroll: {
          "0%": {
            borderColor: "blue transparent transparent",
          },
          "50%": {
            borderColor: "transparent blue transparent transparent",
          },
          "75%": {
            borderColor: "transparent transparent blue transparent",
          },
          "100%": {
            borderColor: "transparent transparent transparent blue",
          },
        },
      },
    },

    fontFamily: {
      sig: "Great Vibes",
      rale: "RaleWay",
    },

    width: {
      desk: "80%",
      contentdev: "calc(1*(100% - 320px))",
    },
  },
  plugins: [],
};
