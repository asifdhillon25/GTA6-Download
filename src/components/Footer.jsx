import { motion } from "framer-motion";
import {
  Download,
  Github,
  Heart,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background">

      {/* Top Gradient */}

      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <section className="relative px-5 py-20 sm:px-8 lg:px-10">

        <div className="absolute inset-0 bg-hero-radial opacity-40" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] shadow-glass backdrop-blur-2xl"
        >

          <div className="absolute inset-0 bg-sunset-gradient opacity-[0.08]" />

          <div className="relative p-8 sm:p-12 lg:p-16">

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/70">

                <ShieldCheck
                  size={14}
                  className="text-sunset-cyan"
                />

                Fan Project

              </div>

              <h2 className="mt-6 font-display text-4xl font-black uppercase leading-tight text-white sm:text-6xl">

                Ready To Download?

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">

                Windows • macOS • Android

                <br />

                Version 6.0.0 • Build 2107

                <br />

                Absolutely free.*

              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("download")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="download-shine relative mt-10 overflow-hidden rounded-2xl bg-button-gradient px-10 py-5 text-lg font-black uppercase tracking-wider text-white shadow-button transition duration-300 hover:scale-[1.04] active:scale-95"
              >

                <span className="relative z-10 flex items-center justify-center gap-3">

                  <Download size={22} />

                  Download GTA VI

                </span>

              </button>

              <p className="mt-5 text-xs text-white/35 opacity-25">

                *Free because this is a harmless parody page 😄

              </p>

            </div>

          </div>

        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-5 text-center">

          <div className="flex items-center gap-2 text-sm text-white/40">

            <Heart
              size={15}
              className="text-primary"
            />

            Made only as a fan-made prank for friends.

          </div>

          <div className="flex items-center gap-6 text-sm text-white/35">

            <span>Fan Project</span>

            <span>•</span>

            <span>Not affiliated with Rockstar Games</span>

            <span>•</span>

            <Github size={16} />

          </div>

          <p className="max-w-3xl text-xs leading-6 text-white/25">

            Grand Theft Auto, GTA and Rockstar Games are trademarks of
            their respective owners. This website is an unofficial
            parody created purely for entertainment purposes and is not
            intended to impersonate or distribute copyrighted game
            content.

          </p>

        </div>

      </section>

    </footer>
  );
}