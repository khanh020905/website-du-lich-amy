import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowRight, ChevronDown } from "lucide-react";

interface OfferItem {
  id: string;
  validity: string;
  title: string;
  description: string;
}

const offerImages: Record<string, string> = {
  "stellar-happy-hour": "/gallery/Buffet/buffet_1.png",
  "south-restaurant-discount": "/gallery/Buffet/buffet_3.png",
};

// Component for an individual full-screen offer section
const OfferSection = ({
  offer,
  isFirst,
  bookNowText,
  learnMoreText,
  label,
}: {
  offer: OfferItem;
  isFirst: boolean;
  bookNowText: string;
  learnMoreText: string;
  label?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a slight parallax effect for the background image as we scroll past it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const imgSrc = offerImages[offer.id] || offerImages["stellar-happy-hour"];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 h-[120%] w-full"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imgSrc}')` }}
        />
        {/* Cinematic Overlay to let the image show through clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-[#111]/80" />
      </motion.div>

      {/* Glassmorphism Content Card */}
      <div className="relative z-10 w-[90%] md:w-[80%] lg:w-[60%] max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Frosted Glass Background Layer */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}></div>

          {/* Content Layer */}
          <div className="relative z-10 p-8 md:p-14 lg:p-16 flex flex-col items-center text-center">
            {label && (
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-gold)] mb-8 drop-shadow-md">
                {label}
              </h3>
            )}

            <div className="flex items-center gap-2 text-white/80 mb-6 uppercase tracking-[0.2em] text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
              <Calendar size={14} />
              <span>{offer.validity}</span>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 drop-shadow-2xl font-medium tracking-wide">
              {offer.title}
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg lg:text-xl font-light mb-12 max-w-2xl text-center">
              {offer.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-gold)] text-[#111] uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex justify-center items-center gap-3 group rounded-sm">
                {bookNowText}
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white uppercase tracking-widest text-sm font-bold hover:border-white hover:bg-white/10 transition-colors duration-300 rounded-sm">
                {learnMoreText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator on First Section */}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute w-full bottom-4 left-0 z-50 flex flex-col items-center gap-2 text-white/30 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-8">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const Offers = () => {
  const { t } = useTranslation();

  const items = t("offer.items", { returnObjects: true }) as OfferItem[];
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <div className="bg-[#111] min-h-screen">
      <div className="relative z-10">
        {safeItems.map((offer, index) => (
          <OfferSection
            key={offer.id}
            offer={offer}
            isFirst={index === 0}
            bookNowText={t("offer.bookNow")}
            learnMoreText={t("offer.learnMore")}
            label={index === 0 ? t("offer.label") : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
