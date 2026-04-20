import { motion } from "framer-motion";
import heroImg from "@assets/photo_2026-04-16_16.43.04_1776332735939.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Badge */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1 bg-primary text-black font-bold text-sm uppercase tracking-widest">
            Портфолио
          </div>
        </motion.div>

        {/* Full-width heading */}
        <motion.h1
          className="font-display font-black uppercase leading-[0.95] mb-8 whitespace-nowrap overflow-visible"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="block text-black">Дубинина</span>
          <span
            className="block"
            style={{
              color: "white",
              WebkitTextStroke: "2px black",
              paintOrder: "stroke fill",
            }}
          >
            Анастасия
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-24 h-2 bg-primary mb-10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Bottom: info + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: info */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-800 mb-6">
              Методолог &bull; Менеджер в образовании
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg border-l-4 border-primary pl-6 mb-10">
              Специалист в&nbsp;онлайн-образовании<br />с&nbsp;T-shape экспертизой.
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold hover:bg-primary hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm"
            >
              Связаться
            </a>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 z-0" />
            <div className="relative z-10 bg-gray-100 aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={heroImg}
                alt="Анастасия Дубинина"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
