// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.14)",
        input: "rgba(255,255,255,0.12)",
        ring: "#ff4fa3",

        background: "#050816",
        foreground: "#ffffff",

        primary: {
          DEFAULT: "#ff2e88",
          foreground: "#ffffff",
          50: "#fff0f7",
          100: "#ffd6e9",
          200: "#ffadd4",
          300: "#ff7fbd",
          400: "#ff4fa3",
          500: "#ff2e88",
          600: "#e61573",
          700: "#b80f5c",
          800: "#8a0a45",
          900: "#5c062e",
        },

        secondary: {
          DEFAULT: "#7c4dff",
          foreground: "#ffffff",
          50: "#f3efff",
          100: "#e3d8ff",
          200: "#c8b5ff",
          300: "#aa8dff",
          400: "#926cff",
          500: "#7c4dff",
          600: "#6234d9",
          700: "#4a27a6",
          800: "#331a73",
          900: "#1e1045",
        },

        accent: {
          DEFAULT: "#2ed8ff",
          foreground: "#04111f",
          50: "#effcff",
          100: "#d7f7ff",
          200: "#a7efff",
          300: "#72e6ff",
          400: "#4bdfff",
          500: "#2ed8ff",
          600: "#0fb8dd",
          700: "#0b8fad",
          800: "#08667c",
          900: "#053f4d",
        },

        sunset: {
          pink: "#ff4fa3",
          magenta: "#ff2e88",
          purple: "#7c4dff",
          cyan: "#2ed8ff",
          orange: "#ff8a3d",
          yellow: "#ffd166",
        },

        muted: {
          DEFAULT: "#10182b",
          foreground: "#b8c1d9",
          50: "#f6f7fb",
          100: "#e9edf7",
          200: "#cfd7ea",
          300: "#aebad5",
          400: "#7f8baa",
          500: "#59657f",
          600: "#3b465f",
          700: "#232d43",
          800: "#10182b",
          900: "#070b16",
        },

        card: {
          DEFAULT: "rgba(255,255,255,0.08)",
          foreground: "#ffffff",
          hover: "rgba(255,255,255,0.13)",
          border: "rgba(255,255,255,0.16)",
        },

        popover: {
          DEFAULT: "#0a1022",
          foreground: "#ffffff",
        },

        destructive: {
          DEFAULT: "#ff3b5f",
          foreground: "#ffffff",
        },

        success: {
          DEFAULT: "#35ffb2",
          foreground: "#06130f",
        },

        warning: {
          DEFAULT: "#ffd166",
          foreground: "#1d1300",
        },

        info: {
          DEFAULT: "#2ed8ff",
          foreground: "#04111f",
        },
      },

      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        neon: "0 0 35px rgba(255, 46, 136, 0.45)",
        "neon-cyan": "0 0 35px rgba(46, 216, 255, 0.35)",
        "neon-purple": "0 0 40px rgba(124, 77, 255, 0.4)",
        glass:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
        elevated: "0 30px 80px rgba(0,0,0,0.55)",
        button:
          "0 18px 45px rgba(255,46,136,0.45), 0 0 25px rgba(124,77,255,0.25)",
      },

      backgroundImage: {
        "vice-gradient":
          "linear-gradient(135deg, #050816 0%, #10182b 38%, #24113f 68%, #461342 100%)",

        "sunset-gradient":
          "linear-gradient(135deg, #ff8a3d 0%, #ff2e88 42%, #7c4dff 75%, #2ed8ff 100%)",

        "button-gradient":
          "linear-gradient(135deg, #ff8a3d 0%, #ff2e88 45%, #7c4dff 100%)",

        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",

        "hero-radial":
          "radial-gradient(circle at 18% 20%, rgba(255,46,136,0.35), transparent 30%), radial-gradient(circle at 82% 22%, rgba(46,216,255,0.25), transparent 28%), radial-gradient(circle at 50% 80%, rgba(255,138,61,0.22), transparent 35%)",

        "grid-glow":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "44px 44px",
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        "fade-in-up": {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },

        "scale-in": {
          from: { opacity: 0, transform: "scale(0.96)" },
          to: { opacity: 1, transform: "scale(1)" },
        },

        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        "slow-pulse": {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },

        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(255,46,136,0.35), 0 0 40px rgba(124,77,255,0.18)",
          },
          "50%": {
            boxShadow:
              "0 0 35px rgba(255,46,136,0.65), 0 0 65px rgba(46,216,255,0.28)",
          },
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },

        "slide-glow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.35s ease-out",
        "fade-in-up": "fade-in-up 0.55s ease-out",
        "scale-in": "scale-in 0.25s ease-out",
        float: "float 4s ease-in-out infinite",
        "slow-pulse": "slow-pulse 3s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "slide-glow": "slide-glow 1.8s ease-in-out infinite",
      },

      zIndex: {
        navbar: "50",
        modal: "100",
        overlay: "80",
      },

      backdropBlur: {
        xs: "2px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },

  screens: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}; 