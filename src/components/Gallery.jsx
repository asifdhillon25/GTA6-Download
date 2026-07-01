import { motion } from "framer-motion";
import { Camera, MapPinned, Play, Sparkles } from "lucide-react";

import cityBanner from "../assets/gta/4.jpg";
import gallery1 from "../assets/gta/7.jpg";
import gallery2 from "../assets/gta/8.jpg";
import gallery3 from "../assets/gta/9.jpg";
import gallery4 from "../assets/gta/12.jpg";

const galleryItems = [
  {
    image: gallery1,
    title: "Neon Nights",
    tag: "Screenshot",
  },
  {
    image: gallery2,
    title: "Downtown Heat",
    tag: "World",
  },
  {
    image: gallery3,
    title: "Coastal Drive",
    tag: "Gameplay",
  },
  {
    image: gallery4,
    title: "Sunset Chaos",
    tag: "Trailer",
  },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 sm:px-8 lg:px-10">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-secondary/20 blur-[110px]" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-primary/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
              <Camera size={14} className="text-sunset-cyan" />
              Media Preview
            </div>

            <h2 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              One Last Look <br />
              Before Download
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg lg:ml-auto">
            A short cinematic  preview section to make the page feel
            polished, premium, and real enough before the game image lands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] shadow-glass backdrop-blur-2xl"
        >
          <div className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
            <img
              src={cityBanner}
              alt="Vice city inspired banner"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/25" />

            <div className="relative z-10 flex min-h-[420px] max-w-2xl flex-col justify-end p-6 sm:p-10 md:min-h-[520px]">
              <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl">
                <MapPinned size={14} className="text-sunset-orange" />
                Leonida State
              </div>

              <h3 className="font-display text-4xl font-black uppercase leading-none text-white neon-text sm:text-6xl">
                Welcome Back
                <br />
                To Vice
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                Beaches, neon reflections, fast cars, fake build numbers, and
                one download button your friends will definitely regret
                pressing.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() =>
                    document
                      .getElementById("download")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl bg-button-gradient px-6 py-4 font-black uppercase tracking-wide text-white shadow-button transition duration-300 hover:scale-[1.03] active:scale-95"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Play size={18} />
                    Start Download
                  </span>
                </button>

                <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-bold text-white/80 backdrop-blur-xl">
                  <span className="flex items-center justify-center gap-3">
                    <Sparkles size={18} className="text-sunset-yellow" />
                    Ultra Real Mode
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/15 bg-white/[0.055] shadow-glass backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="mb-2 w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/70 backdrop-blur-xl">
                    {item.tag}
                  </p>

                  <h4 className="font-display text-xl font-black uppercase text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}