import { motion } from "framer-motion";
import { Download, ShieldCheck } from "lucide-react";
import logo from "../assets/gta/a.png";

export default function Navbar() {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-navbar px-3 pt-3 sm:px-5"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-3 py-2 shadow-glass backdrop-blur-2xl sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/10">
            <img
              src={logo}
              alt="Fan parody logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-display text-sm font-black uppercase leading-none tracking-wide sm:text-base">
              VI Access
            </p>
            <p className="mt-1 hidden text-xs text-white/55 sm:block">
              Gta VI launcher
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 md:flex">
          <ShieldCheck size={14} />
          Premium Beta build
        </div>

        <button
          onClick={scrollToDownload}
          className="group relative overflow-hidden rounded-xl bg-button-gradient px-4 py-2.5 text-sm font-extrabold text-white shadow-button transition duration-300 hover:scale-[1.03] active:scale-95 sm:px-5"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download size={16} />
            Download
          </span>
        </button>
      </nav>
    </motion.header>
  );
}