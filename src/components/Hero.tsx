import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <Navbar />

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 mt-16 flex flex-col items-center px-4 text-center md:mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="liquid-glass mb-6 flex items-center gap-2 rounded-lg px-3 py-2"
        >
          <span className="rounded-md bg-foreground px-2 py-0.5 text-sm font-medium text-background">
            New
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Say Hello to the Bright Tax Client Portal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-5xl font-medium leading-tight tracking-[-2px] text-foreground md:text-7xl md:leading-[1.15]"
        >
          Your Taxes.
          <br />
          One Clear{" "}
          <span className="font-serif font-normal italic text-accent">
            Overview
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg font-normal leading-6 opacity-90"
          style={{ color: "var(--hero-subtitle)" }}
        >
          Bright Tax Solutions helps businesses track filings, deductions,
          <br />
          and deadlines with precision — for 35+ years.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background"
        >
          Book a Free Consultation
        </motion.a>
      </motion.div>

      {/* Dashboard + video area — full viewport width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-12 w-screen"
        style={{ marginLeft: "calc(-50vw + 50%)", aspectRatio: "16/9" }}
      >
        {/* light version of the background video: inverted + softly veiled */}
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.08)" }}
        />
        <div className="absolute inset-0 bg-white/35" />
        <motion.div
          style={{ y: dashY }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <img
            src="/hero-dashboard.svg"
            alt="Bright Tax client dashboard preview"
            className="w-[90%] max-w-5xl rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/10"
            draggable={false}
          />
        </motion.div>
        {/* soft white fades so the dark video band sits gently in the light page */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-48 bg-gradient-to-b from-background via-background/70 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-40 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
}
