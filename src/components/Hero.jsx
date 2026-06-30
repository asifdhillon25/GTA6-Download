import { motion } from "framer-motion";
import { Download, Sparkles, MonitorDown, Gamepad2 } from "lucide-react";

import logo from "../assets/gta/6.png";
import heroDesktop from "../assets/gta/10.jpg";
import heroMobile from "../assets/gta/2.jpg";

export default function Hero() {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          alt="Vice city inspired fan artwork"
          className="h-full w-full object-cover object-center image-mask-bottom"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-background" />
      <div className="absolute inset-0 bg-hero-radial opacity-80" />
      <div className="absolute inset-0 noise-overlay opacity-[0.08]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-sunset-yellow" />
            Free Early Access Build
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
            src={logo}
            alt="VI parody logo"
            className="mb-6 w-56 rounded-2xl border border-white/10 bg-black/20 shadow-neon sm:w-72 md:w-80"
          />

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75, ease: "easeOut" }}
            className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white neon-text sm:text-7xl lg:text-8xl"
          >
            Vice City <br />
            Unlocked
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
          >
            Experience the totally real, absolutely not suspicious, ultra
            premium beta access page. Choose your platform and begin the
            most legendary download of your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={scrollToDownload}
              className="download-shine relative overflow-hidden rounded-2xl bg-button-gradient px-7 py-4 text-base font-black uppercase tracking-wide text-white shadow-button transition duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Download size={20} />
                Download Free
              </span>
            </button>

            <button
              onClick={scrollToDownload}
              className="rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition duration-300 hover:bg-white/15 active:scale-95"
            >
              <span className="flex items-center justify-center gap-3">
                <MonitorDown size={20} />
                Select Platform
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {[
              ["Version", "6.0.0"],
              ["Build Size", "128 GB"],
              ["Status", "Unlocked"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-widest text-white/45">
                  {label}
                </p>
                <p className="mt-1 flex items-center gap-2 font-bold text-white">
                  {label === "Status" && (
                    <Gamepad2 size={15} className="text-sunset-cyan" />
                  )}
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}