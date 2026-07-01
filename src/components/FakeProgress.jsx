import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  HardDrive,
  LoaderCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function FakeProgress({
  open,
  title,
  platform,
  version,
  onClose,
  onFinish,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      return;
    }

    let current = 0;

    const timer = setInterval(() => {
      current += Math.random() * 8 + 2;

      if (current >= 100) {
        current = 100;
        clearInterval(timer);

        setTimeout(() => {
          onFinish?.();
        }, 800);
      }

      setProgress(current);
    }, 140);

    return () => clearInterval(timer);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-modal flex items-center justify-center bg-black/70 backdrop-blur-lg p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="glass-panel w-full max-w-lg rounded-3xl p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-black">
                  {title}
                </h2>

                <p className="mt-1 text-sm text-white/55">
                  Preparing download...
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-3">
                <Download />
              </div>
            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">
                  Platform
                </span>

                <span className="font-semibold">
                  {platform}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">
                  Version
                </span>

                <span className="font-semibold">
                  {version}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">
                  Size
                </span>

                <span className="flex items-center gap-2 font-semibold">
                  <HardDrive size={15} />
                  128 GB
                </span>
              </div>

            </div>

            <div className="mt-8">

              <div className="mb-3 flex justify-between text-sm">
                <span className="text-white/60">
                  Downloading...
                </span>

                <span className="font-bold">
                  {Math.floor(progress)}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  className="h-full rounded-full bg-button-gradient"
                  animate={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">

              {progress === 100 ? (
                <CheckCircle2
                  className="text-green-400"
                  size={22}
                />
              ) : (
                <LoaderCircle
                  size={22}
                  className="animate-spin text-primary"
                />
              )}

              <div>

                <p className="font-semibold">

                  {progress === 100
                    ? "Starting download..."
                    : "Decrypting package..."}

                </p>

                <p className="text-sm text-white/55">

                  Please don't close this window.

                </p>

              </div>

            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-xl border border-white/10 bg-white/10 py-3 font-semibold transition hover:bg-white/15"
            >
              Cancel
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}