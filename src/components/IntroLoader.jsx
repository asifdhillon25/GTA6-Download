import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/gta/6.png";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 bg-hero-radial opacity-80" />
          <div className="absolute inset-0 noise-overlay opacity-[0.08]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative text-center"
          >
            <img
              src={logo}
              alt="VI parody logo"
              className="mx-auto w-52 rounded-2xl border border-white/15 shadow-neon sm:w-72"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-white/55"
            >
              Loading secure mirror
            </motion.p>

            <div className="mx-auto mt-5 h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-button-gradient"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.35, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}