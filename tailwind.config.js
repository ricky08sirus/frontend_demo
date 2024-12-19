/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "400px",
      // => @media (min-width: 768px) { ... }

      lg: "850px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        primaryBg: "var(--primary-bg-color)",
        primaryText: "var(--primary-text-color)",
        highlightBg: "var(--highlight-bg-color)",
        secondaryText: "var(--secondary-text-color)",
        accent: "var(--accent-color)",
        primaryAcc: "var(--accent-primary)",
        secondaryAcc: "var(--accent-secondary)",
        secondaryAcc: "var(--accent-secondary)",
        success: "var(--success)",
        warning: "var(--warning)",
        errors: "var(--errors)",
        gradient: "var(--gradient)",
        cardSur: "var(--card-surface)",
        bossCoin: "var(--boss-coin)",
        bg_color: "var(--primary-bg-color)",
      },
      backgroundImage: {
        containerBg:
          "linear-gradient(134.44deg, rgba(146, 255, 148, 0.03) 7.49%, rgba(86, 162, 255, 0.03) 50.41%, rgba(158, 116, 226, 0.03) 93.33%)",
        airdropbtnBg:
          "linear-gradient(134.44deg, rgba(146, 255, 148, 0.1) 7.49%, rgba(86, 162, 255, 0.1) 50.41%, rgba(158, 116, 226, 0.1) 93.33%)",
        boostedBg: "linear-gradient(93.23deg, #9E74E2 14.13%, #56A2FF 84.2%)",
        streakBg:
          "linear-gradient(92.38deg, rgba(255, 85, 0, 0.1) 81.98%, rgba(255, 0, 0, 0.1) 99.67%)",
        homePlayBtnBg:
          "linear-gradient(93.23deg, #9E74E2 14.13%, #56A2FF 84.2%)",
        receivedRewardBg:
          "linear-gradient(134deg, rgba(146, 255, 148, 0.03) 7.49%, rgba(86, 162, 255, 0.03) 50.41%, rgba(158, 116, 226, 0.03) 93.33%)",
        receivedRewardTextBg:
          "linear-gradient(86.33deg, rgba(158, 116, 226, 0.7) 6%, rgba(3, 126, 212, 0.7) 93.79%)",
        superiorityBg:
          "linear-gradient(90deg, rgba(62, 124, 147, 0.10) 0%, rgba(27, 255, 255, 0.10) 48.5%)",
        trainingModeBg:
          "linear-gradient(93deg, rgba(158, 116, 226, 0.05) 14.13%, rgba(86, 162, 255, 0.05) 84.2%)",
        inviteForEnergyBg:
          "linear-gradient(134deg, rgba(115, 255, 185, 0.10) 9.31%, rgba(86, 162, 255, 0.10) 51.32%, rgba(158, 116, 226, 0.10) 93.33%)",
        boltCardBg:
          "linear-gradient(93deg, rgba(158, 116, 226, 0.10) 14.13%, rgba(86, 162, 255, 0.10) 84.2%)",
        boltCardBtnBg:
          "linear-gradient(86.33deg, rgba(158, 116, 226, 0.8) 6%, rgba(3, 126, 212, 0.8) 93.79%)",
        farmingConfirmBg:
          "linear-gradient(86deg, rgba(158, 116, 226, 0.10) 6%, rgba(3, 126, 212, 0.10) 93.79%)",
        exploreBtnBg:
          "linear-gradient(0deg, rgba(86, 162, 255, 0.10) 0%, rgba(86, 162, 255, 0.10) 100%)",
        exploreCardBg:
          "linear-gradient(0deg, rgba(3, 126, 212, 0.20) 0%, rgba(3, 126, 212, 0.20) 100%)",
        nextBtnBg:
          "linear-gradient(93.23deg, rgba(158, 116, 226, 0.1) 14.13%, rgba(86, 162, 255, 0.1) 84.2%)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "sixty-four": ["Sixtyfour Convergence"],
        lexend: ["Lexend", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
      //Flamming animation
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        innerFlicker: "innerFlicker 4s ease-in-out infinite alternate",
        tipFlicker: "tipFlicker 2s ease-in-out infinite alternate",
        spark: "spark 0.5s ease-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.02) rotate(1deg) translateY(-1px)" },
          "50%": { transform: "scale(0.98) rotate(-1deg) translateY(1px)" },
          "75%": { transform: "scale(1.01) rotate(0.5deg) translateY(-0.5px)" },
        },
        innerFlicker: {
          "0%, 100%": { transform: "scaleY(1) translateY(0)" },
          "50%": { transform: "scaleY(1.05) translateY(-2px)" },
        },
        tipFlicker: {
          "0%, 100%": { transform: "scaleX(1) rotate(0deg)" },
          "50%": { transform: "scaleX(1.1) rotate(2deg)" },
        },
        spark: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-20px) scale(0)" },
        },
      },
      dropShadow: {
        flame: "0 0 10px rgba(255, 100, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
