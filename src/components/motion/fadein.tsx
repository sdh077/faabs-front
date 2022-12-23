import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { useState } from "react";
import './style.css'
interface Props {
  title: string;
  titleWidth: number;
}
function FadeIn({ title, titleWidth }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="fadein">
      <AnimatePresence mode="wait">
      <motion.article
        initial="hidden"
        animate="visible"
        whileInView="onscreen"
        viewport={{ once: true }}
        // exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.h1
          style={{ "--base-width": `${titleWidth}vw`, x: "0%" } as any}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          {title}
        </motion.h1>
      </motion.article>
      </AnimatePresence>
    </div>
  )
}
export default FadeIn;