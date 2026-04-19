import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bgColor overflow-hidden">
      <style>{`
        @keyframes fadeUp   { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
        @keyframes blurIn   { from { opacity:0; filter:blur(12px); letter-spacing:.4em } to { opacity:1; filter:blur(0); letter-spacing:.12em } }
        @keyframes orbDrift { 0%,100% { transform:translate(0,0) } 50% { transform:translate(12px,-16px) } }
        @keyframes pulse    { 0%,100% { opacity:.35; transform:scale(1) } 50% { opacity:.7; transform:scale(1.08) } }
        @keyframes dot      { 0%,80%,100% { transform:scale(0.6); opacity:.3 } 40% { transform:scale(1); opacity:1 } }
        @keyframes exit     { to { opacity:0; transform:scale(1.05) } }

        .loader-root  { animation: exit .45s ease-in 4.8s forwards }
        .text-welcome { animation: blurIn .9s cubic-bezier(.22,1,.36,1) .35s both }
        .text-sub     { animation: fadeUp .6s ease .95s both }
        .dots span    { animation: dot 1.3s ease-in-out infinite }
        .glow-ring    { animation: pulse 2.8s ease-in-out infinite }
        .orb1         { animation: orbDrift 6s ease-in-out infinite }
        .orb2         { animation: orbDrift 8s ease-in-out 1.5s infinite reverse }
      `}</style>

      <div className="orb1 absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primaryColor/10 blur-[70px] pointer-events-none" />
      <div className="orb2 absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-primaryColor/8 blur-[60px] pointer-events-none" />

      <div className="loader-root flex flex-col items-center justify-center gap-3">

        <div className="relative flex items-center justify-center
                        w-[280px] h-[280px]
                        sm:w-[360px] sm:h-[360px]
                        md:w-[420px] md:h-[420px]">

          <div className="glow-ring absolute inset-[12%] rounded-full bg-primaryColor/10 blur-2xl" />

          <div className="relative z-10 w-full h-full">
            <IconCloud iconSlugs={Slugs} />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 select-none text-center">
            <p className="text-welcome font-mono font-bold text-primaryColor
                          text-3xl sm:text-5xl md:text-6xl
                          drop-shadow-[0_0_28px_rgba(167,139,250,0.65)]">
              Welcome
            </p>
            <p className="text-sub font-mono text-primaryColor/40 tracking-[.28em] uppercase text-[10px] sm:text-xs mt-1.5">
              Loading Portfolio
            </p>
          </div>
        </div>

        <div className="dots flex gap-2 mt-1">
          {[0, 1, 2].map(i => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-primaryColor/60 inline-block"
              style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </div>

      </div>
    </div>
  );
}