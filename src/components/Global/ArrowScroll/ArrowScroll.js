import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";


function ArrowScroll() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  return (
    <div>
        <motion.svg
          className="absolute w-max h-max z-0 left-10 top-0 max-sm:hidden"
          preserveAspectRatio="xMidYMax meet"
          
        >
          <motion.path
            id="backgroundPath"
            fill="none"
            d="M 30 -30 V 100"
            stroke="black"
            strokeDasharray="5 5"
            strokeWidth="2"
            className="z-0"
            // style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            id="animatedPath"
            fill="none"
            pathLength={30000}
            d="M 30 -30 V 100 H 990"
            stroke="#f18350"
            strokeWidth="2"
            className="z-10"
            style={{ pathLength: scrollYProgress }}
          />
          {/* <rect
            x="10"
            y="75"
            width="40"
            height="40"
            stroke="#f18350"
            strokeWidth="1"
            rx="4"
            fill="white"
          /> */}
        </motion.svg>
    </div>
  )
}

export default ArrowScroll