import { useScroll, useTransform, motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { CountDown } from "../components/sliders/countDown/CountDown";

import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";

export const Intro = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // INTERACTIVE SCROLL ==================================================== //
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  // ==================================================== INTERACTIVE SCROLL //

  const targetTime = new Date("2023/12/06/17:01:00").getTime();
  // const targetTime = new Date("2023/12/06/17:05:00").getTime();

  const timePromise = axios.get(
    "https://worldtimeapi.org/api/timezone/Asia/seoul"
  );

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[20rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:opacity-40"
    >
      <motion.div
        style={{ scale, x: "-50%", position }}
        className="left-1/2 z-10 flex flex-col items-center"
      >
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Suspense fallback={<p>Fetching Server Time...</p>}>
            <CountDown targetTime={targetTime} timePromise={timePromise} />
          </Suspense>
        </ErrorBoundary>
        {/* <Image
          src="/images/fxxkoff.png"
          alt="useEffect야_가라"
          className="h-[40vw] aspect-2/1 mt-[6vh]"
        /> */}
      </motion.div>
    </motion.section>
  );
};
