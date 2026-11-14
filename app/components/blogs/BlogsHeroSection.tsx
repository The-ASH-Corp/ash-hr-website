"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, animate, useInView } from "framer-motion";
import { blogsData, BlogStatItem } from "./blogsData";

function AnimatedBlogStatValue({ stat }: { stat: BlogStatItem }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayText, setDisplayText] = useState<string>(`0${stat.suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, stat.numericValue, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        const rounded = Math.round(latest).toString();
        setDisplayText(`${rounded}${stat.suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, stat]);

  return <span ref={ref}>{displayText}</span>;
}

export default function BlogsHeroSection() {
  const { hero } = blogsData;
  const lastBreadcrumbIndex = hero.breadcrumbs.length - 1;

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #131f54 0%, #1c2f7d 50%, #253b97 100%)",
        color: "#ffffff",
      }}
      className="relative bg-gradient-to-br from-[#131f54] via-[#1c2f7d] to-[#253b97] text-white pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden"
      data-purpose="blogs-hero-banner"
    >
      {/* Subtle dot pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Soft diagonal light glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,84,190,0.35)_0%,_transparent_70%)]"
      />

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        <div className="max-w-3xl min-[137.5rem]:max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Top Breadcrumb Pill Badge */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            aria-label="Breadcrumb"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.16)",
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5"
          >
            {hero.breadcrumbs.map((item, idx) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                {item.href && idx < lastBreadcrumbIndex ? (
                  <Link
                    href={item.href}
                    className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.08em] text-white">
                    {item.label}
                  </span>
                )}
                {idx < lastBreadcrumbIndex && (
                  <span className="text-[11px] sm:text-xs text-slate-400 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffca28] mb-3"
          >
            {hero.eyebrow}
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white mb-4 sm:mb-5"
          >
            {hero.title}{" "}
            <span className="text-[#7cc4fa]">{hero.highlightWord}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="text-sm sm:text-base lg:text-[16.5px] text-slate-200/90 font-normal leading-[1.75] max-w-[680px] min-[137.5rem]:max-w-4xl mx-auto"
          >
            {hero.description}
          </motion.p>
        </div>

        {/* Bottom 4 Animated Stat Boxes */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {hero.stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.1 + idx * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0,
                },
              }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(255, 255, 255, 0.14)",
              }}
              className="rounded-2xl px-5 py-5 sm:py-6 text-center bg-white/[0.06] border border-white/15 backdrop-blur-sm hover:bg-white/[0.11] hover:border-white/25 transition-colors cursor-default"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                <AnimatedBlogStatValue stat={stat} />
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-blue-100/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

