import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  BadgeCheck,
  Cpu,
  Download,
  Gamepad2,
  MonitorDown,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

import FakeProgress from "./FakeProgress";
import bannerCity from "../assets/gta/3.jpg";
import prankImage from "../assets/gta/prank.png";

const platforms = [
  {
    id: "windows",
    title: "Windows PC",
    subtitle: "64-bit installer",
    version: "v6.0.0",
    size: "128 GB",
    chip: "RTX Enhanced",
    status: "Unlocked",
    icon: MonitorDown,
    highlight: true,
  },
  {
    id: "mac",
    title: "macOS",
    subtitle: "Apple Silicon / Intel",
    version: "v6.0.0",
    size: "121 GB",
    chip: "MetalFX",
    status: "Beta",
    icon: Apple,
    highlight: false,
  },
  {
    id: "android",
    title: "Android APK",
    subtitle: "Mobile experimental build",
    version: "v6.0-lite",
    size: "4.8 GB",
    chip: "APK + OBB",
    status: "Early",
    icon: Smartphone,
    highlight: false,
  },
  {
    id: "console",
    title: "Console Build",
    subtitle: "PS5 / Xbox Series",
    version: "v6.0.0",
    size: "132 GB",
    chip: "4K Ready",
    status: "Queued",
    icon: Gamepad2,
    highlight: false,
  },
];

export default function DownloadCard() {
  const [selected, setSelected] = useState(platforms[0]);
  const [progressOpen, setProgressOpen] = useState(false);

  const requirements = useMemo(
    () => [
      ["OS", "Windows 10/11 64-bit"],
      ["Processor", "Intel i7 / Ryzen 7"],
      ["Memory", "16 GB RAM"],
      ["Graphics", "RTX 3060 / RX 6700 XT"],
      ["Storage", "128 GB available space"],
      ["Internet", "Required for activation"],
    ],
    []
  );

  const startDownload = (platform) => {
    setSelected(platform);
    setProgressOpen(true);
  };

  const downloadPrankImage = () => {
    const link = document.createElement("a");
    link.href = prankImage;
    link.download = "GTA_VI_FREE_DOWNLOAD_HAHA.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <section
        id="download"
        className="relative overflow-hidden bg-background px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 bg-grid-glow bg-grid opacity-[0.18]" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
              <Sparkles size={14} className="text-sunset-yellow" />
              Choose Your Platform
            </div>

            <h2 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Download Center
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Select your platform, verify the build, and start the absolutely official
              looking Beta download image of Gta VI.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="glass-panel rounded-3xl p-4 sm:p-6"
            >
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                    Secure CDN Mirror
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
                    Platform Builds
                  </h3>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
                  <ShieldCheck size={16} />
                  Verified
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  const isSelected = selected.id === platform.id;

                  return (
                    <motion.button
                      key={platform.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => startDownload(platform)}
                      className={`group relative overflow-hidden rounded-3xl border p-5 text-left transition duration-300 ${
                        isSelected
                          ? "border-primary/60 bg-primary/10 shadow-neon"
                          : "border-white/10 bg-white/[0.055] hover:border-white/25 hover:bg-white/[0.085]"
                      }`}
                    >
                      {platform.highlight && (
                        <div className="absolute right-4 top-4 rounded-full bg-button-gradient px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-neon">
                          Best
                        </div>
                      )}

                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-accent/25" />

                      <div className="relative z-10">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-glass">
                          <Icon size={28} />
                        </div>

                        <h4 className="font-display text-xl font-black text-white">
                          {platform.title}
                        </h4>

                        <p className="mt-1 text-sm text-white/55">
                          {platform.subtitle}
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <InfoPill label="Version" value={platform.version} />
                          <InfoPill label="Size" value={platform.size} />
                          <InfoPill label="Mode" value={platform.chip} />
                          <InfoPill label="Status" value={platform.status} />
                        </div>

                        <div className="mt-5 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-bold text-white/70">
                            <BadgeCheck size={16} className="text-accent" />
                            Ready
                          </span>

                          <span className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-black text-white transition group-hover:bg-button-gradient">
                            <Download size={15} />
                            Get
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] shadow-glass backdrop-blur-2xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-72 lg:h-64">
                <img
                  src={bannerCity}
                  alt="Vice city skyline"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white/75 backdrop-blur-xl">
                    <Star size={13} className="text-sunset-yellow" />
                    Premium Mirror
                  </div>

                  <h3 className="font-display text-3xl font-black uppercase text-white">
                    Leonida Access
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid gap-3">
                  {requirements.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
                    >
                      <span className="text-sm text-white/50">{label}</span>
                      <span className="text-right text-sm font-bold text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <Cpu className="mt-0.5 text-primary" size={20} />
                    <div>
                      <p className="font-bold text-white">
                        Ultra Texture Pack Included
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/55">
                        Optimized for beach sunsets, neon reflections, traffic
                        chaos, and suspiciously fast download speeds.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => startDownload(selected)}
                  className="download-shine relative mt-5 w-full overflow-hidden rounded-2xl bg-button-gradient px-6 py-4 font-black uppercase tracking-wide text-white shadow-button transition duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Download size={19} />
                    Download {selected.title}
                  </span>
                </button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <FakeProgress
        open={progressOpen}
        title={`${selected.title} Download`}
        platform={selected.subtitle}
        version={selected.version}
        onClose={() => setProgressOpen(false)}
        onFinish={() => {
          setProgressOpen(false);
          downloadPrankImage();
        }}
      />
    </>
  );
}

function InfoPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/35">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-bold text-white">{value}</p>
    </div>
  );
}