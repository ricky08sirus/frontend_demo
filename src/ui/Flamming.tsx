import { useEffect, useRef } from "react";

const Flamming = () => {
  const flameRef = useRef<any>(null);

  useEffect(() => {
    const addSpark = () => {
      if (flameRef.current) {
        const spark = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        spark.setAttribute("class", "animate-spark");
        spark.setAttribute("cx", (40 + Math.random() * 20).toString());
        spark.setAttribute("cy", (20 + Math.random() * 40).toString());
        spark.setAttribute("r", (0.3 + Math.random() * 0.3).toString());
        spark.setAttribute("fill", "#ffffff");
        flameRef.current.appendChild(spark);

        setTimeout(() => spark.remove(), 500);
      }
    };

    const sparkInterval = setInterval(addSpark, 200);

    return () => clearInterval(sparkInterval);
  }, []);

  const handleTap = (event:any) => {
    if (event && event.currentTarget) {
      event.currentTarget.classList.add("tapped");
      setTimeout(() => event.currentTarget.classList.remove("tapped"), 500);
    }
  };

  return (
    <div className="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 95.05 113.63"
        className="w-full max-w-24 h-auto cursor-pointer filter drop-shadow-flame"
        onClick={handleTap}
        ref={flameRef}
      >
        <defs>
          <radialGradient
            id="flameGradient"
            cx="50%"
            cy="60%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#ffff00" />
            <stop offset="40%" stopColor="#ffaa00" />
            <stop offset="70%" stopColor="#ff5500" />
            <stop offset="100%" stopColor="#ff0000" />
          </radialGradient>
        </defs>

        <path
          className="animate-flicker"
          fill="url(#flameGradient)"
          d="M76.12 66.56c0 15.63-13.23 28.31-29.54 28.31-16.3 0-29.73-12.68-29.53-28.31.28-21.7 21.5-33.27 22.1-50.09 10.79 2.2 36.97 24.8 36.97 50.09z"
        />
        <path
          className="animate-innerFlicker"
          fill="#ffdd00"
          fillOpacity="0.6"
          d="M68 66.56c0 12-9.5 22-21.5 22s-21.5-10-21.5-22c0-18 15-26 17-39 7.5 1.5 26 17 26 39z"
        />
        <path
          className="animate-tipFlicker"
          fill="#ffffff"
          fillOpacity="0.7"
          d="M60 66.56c0 8-6.5 14-14.5 14s-14.5-6-14.5-14c0-14 9-18 11-27 5 1 18 9 18 27z"
        />

        <circle
          className="animate-spark"
          cx="45"
          cy="30"
          r="0.5"
          fill="#ffffff"
        />
        <circle
          className="animate-spark"
          cx="55"
          cy="35"
          r="0.5"
          fill="#ffffff"
        />
        <circle
          className="animate-spark"
          cx="50"
          cy="25"
          r="0.5"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default Flamming;
