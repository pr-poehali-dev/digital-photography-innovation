import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-sans text-4xl md:text-6xl font-bold text-white tracking-widest uppercase"
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.4), 0 2px 20px rgba(0,0,0,0.8)" }}
        >
          ТОПЧИКИ
        </motion.h1>
      </div>
    </div>
  )
}