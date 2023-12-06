import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Callout, Image } from "../components/ui";

const animationOrder = {
  initial: 0.2,
  showCode1: 0.25,
  code1MoveStart: 0.3,
  code1MoveEnd: 0.35,
  code2MoveStart: 0.45,
  code2MoveEnd: 0.5,
  fadeInCallout1: 0.525,
  showCallout1: 0.575,
  fadeOutCallout1: 0.6,
  fadeInCallout2: 0.625,
  showCallout2: 0.6725,
  fadeOutCallout2: 0.7,
  fadeInCallout3: 0.725,
  showCallout3: 0.775,
  fadeOutCallout3: 0.8,
  fadeInCallout4: 0.825,
  showCallout4: 0.875,
  FadeOutStart: 0.9,
  FadeOutEnd: 1,
};

export const Case4DataFetching1 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("Data Fetching", "을 하는 경우");
      window.location.hash = "Data Fetching";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const code1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showCode1,
      animationOrder.code2MoveStart,
      animationOrder.code2MoveEnd,
    ],
    [0, 1, 1, 0]
  );
  const code1X = useTransform(
    scrollYProgress,
    [animationOrder.code1MoveStart, animationOrder.code1MoveEnd],
    ["-50%", "-80%"]
  );

  const code2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.code1MoveStart,
      animationOrder.code1MoveEnd,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );
  const code2X = useTransform(
    scrollYProgress,
    [
      animationOrder.code1MoveStart,
      animationOrder.code1MoveEnd,
      animationOrder.code2MoveStart,
      animationOrder.code2MoveEnd,
    ],
    ["-50%", "-20%", "-20%", "-70%"]
  );
  const code2Scale = useTransform(
    scrollYProgress,
    [animationOrder.code2MoveStart, animationOrder.code2MoveEnd],
    [1, 1.3]
  );
  const code2Y = useTransform(
    scrollYProgress,
    [animationOrder.code2MoveStart, animationOrder.code2MoveEnd],
    ["0%", "20%"]
  );

  const callout1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.code2MoveEnd,
      animationOrder.fadeInCallout1,
      animationOrder.showCallout1,
      animationOrder.fadeOutCallout1,
    ],
    [0, 1, 1, 0]
  );
  const callout1Y = useTransform(
    scrollYProgress,
    [
      animationOrder.code2MoveEnd,
      animationOrder.fadeInCallout1,
      animationOrder.showCallout1,
      animationOrder.fadeOutCallout1,
    ],
    ["30px", "0px", "0px", "-30px"]
  );

  const callout2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout1,
      animationOrder.fadeInCallout2,
      animationOrder.showCallout2,
      animationOrder.fadeOutCallout2,
    ],
    [0, 1, 1, 0]
  );
  const callout2Y = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout1,
      animationOrder.fadeInCallout2,
      animationOrder.showCallout2,
      animationOrder.fadeOutCallout2,
    ],
    ["30px", "0px", "0px", "-30px"]
  );

  const callout3Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout2,
      animationOrder.fadeInCallout3,
      animationOrder.showCallout3,
      animationOrder.fadeOutCallout3,
    ],
    [0, 1, 1, 0]
  );
  const callout3Y = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout2,
      animationOrder.fadeInCallout3,
      animationOrder.showCallout3,
      animationOrder.fadeOutCallout3,
    ],
    ["30px", "0px", "0px", "-30px"]
  );

  const callout4Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout3,
      animationOrder.fadeInCallout4,
      animationOrder.showCallout4,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );
  const callout4Y = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout3,
      animationOrder.fadeInCallout4,
      animationOrder.showCallout4,
      animationOrder.FadeOutEnd,
    ],
    ["30px", "0px", "0px", "-30px"]
  );

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: code1Opacity,
            x: code1X,
          })}
          className="absolute top-[2rem] left-1/2 h-[70vh]"
        >
          <Image
            src="/images/fetching1.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code2Opacity,
            x: code2X,
            scale: code2Scale,
            y: code2Y,
          })}
          className="absolute -top-[1rem] left-1/2 h-[80vh]"
        >
          <Image
            src="/images/fetching2.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={stylesWithCssVar({ opacity: callout1Opacity, y: callout1Y })}
          className="absolute top-[50%] left-[55%]"
        >
          <Callout mainContent="Race Conditions" />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout2Opacity, y: callout2Y })}
          className="absolute top-[50%] left-[55%]"
        >
          <Callout mainContent="No instant back button" />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout3Opacity, y: callout3Y })}
          className="absolute top-[50%] left-[55%]"
        >
          <Callout mainContent="No inital HTML content" />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout4Opacity, y: callout4Y })}
          className="absolute top-[50%] left-[55%]"
        >
          <Callout mainContent="Chasing waterfalls" />
        </motion.div>
      </div>
    </section>
  );
};
