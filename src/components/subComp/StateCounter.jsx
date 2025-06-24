import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

const StatsComp = ({ number, ftext, stext, className = "" }) => {
  const { numeric, symbol } = extractNumber(number);
  const count = useMotionValue(0);
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const animation = animate(count, numeric, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplayNumber(Math.floor(latest));
      },
    });

    return () => animation.stop();
  }, [numeric]);

  return (
    <div className="text-center">
      <motion.p
        className={`text-[#DCEEE2]  font-bold ${className} text-xl`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {displayNumber}
        {symbol}
      </motion.p>
      <p
        className={`font-bold capitalize couter-text bg-clip-text text-transparent ${styles.counterText} `}
        style={{
          backgroundImage: "linear-gradient(90deg, #FF00E5 0%, #990089 100%",
        }}
      >
        {ftext}
        <br /> {stext}
      </p>
    </div>
  );
};

const extractNumber = (value) => {
  const numeric = parseFloat(value);
  const symbol = value.replace(/[0-9.]/g, ""); // extract non-numeric characters
  return { numeric, symbol };
};

export default StatsComp;
