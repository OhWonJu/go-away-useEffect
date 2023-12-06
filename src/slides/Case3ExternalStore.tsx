import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Callout, Image } from "../components/ui";

const animationOrder = {
  initial: 0.19,
  fadeInCallout1: 0.2,
  showCallout1: 0.25,
  fadeOutCallout1: 0.3,
  fadeInCallout2: 0.35,
  showCallout2: 0.4,
  fadeOutCallout2: 0.45,
  fadeInCallout3: 0.5,
  showCallout3: 0.55,
  fadeOutCallout3: 0.6,
  showCode1: 0.62,
  code1MoveStart: 0.65,
  code1MoveEnd: 0.675,
  showCode2: 0.7,
  code2MoveStart: 0.725,
  code2MoveEnd: 0.75,
  showCode3: 0.8,
  FadeOutStart: 0.9,
  FadeOutEnd: 1,
};

export const Case3ExternalStore = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("External Store", "를 사용하는 경우");
      window.location.hash = "With External Store";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const call1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInCallout1,
      animationOrder.showCallout1,
      animationOrder.fadeOutCallout1,
    ],
    [0, 1, 1, 0]
  );

  const call2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout1,
      animationOrder.fadeInCallout2,
      animationOrder.showCallout2,
      animationOrder.fadeOutCallout2,
    ],
    [0, 1, 1, 0]
  );

  const call3Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout2,
      animationOrder.fadeInCallout3,
      animationOrder.showCallout3,
      animationOrder.fadeOutCallout3,
    ],
    [0, 1, 1, 0]
  );

  const code1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeOutCallout3,
      animationOrder.showCode1,
      animationOrder.code2MoveStart,
      animationOrder.code2MoveEnd,
    ],
    [0, 1, 1, 0]
  );
  const code1X = useTransform(
    scrollYProgress,
    [animationOrder.code1MoveStart, animationOrder.code1MoveEnd],
    ["-50%", "-100%"]
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
    ["-50%", "0%", "0%", "-100%"]
  );
  const code2Scale = useTransform(
    scrollYProgress,
    [animationOrder.code2MoveStart, animationOrder.code2MoveEnd],
    [1, 0.8]
  );

  const code3Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.code2MoveEnd,
      animationOrder.showCode3,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={{ opacity: call1Opacity }}
          className="absolute top-[45%] left-[35%]"
        >
          <Callout
            mainContent="External Store"
            subContent="Redux 와 같은 상태 관리 라이브러리, 브라우저 API"
          />
        </motion.div>
        <motion.div
          style={{ opacity: call2Opacity }}
          className="absolute top-[45%] left-[35%]"
        >
          <Callout
            mainContent="Concurrent Feature Tearing"
            subContent="의도치 않은 UI 가 표현되는 것을 의미합니다."
          />
        </motion.div>
        <motion.div
          style={{ opacity: call3Opacity }}
          className="absolute top-[45%] left-[35%]"
        >
          <Callout
            mainContent="useSyncExternalStore"
            subContent="External Store 를 위한 React18 의 Hook"
          />
        </motion.div>

        <motion.div
          style={stylesWithCssVar({
            opacity: code1Opacity,
            x: code1X,
          })}
          className="absolute top-[7rem] left-1/2 h-[45vh]"
        >
          <Image
            src="/images/external1.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code2Opacity,
            x: code2X,
            scale: code2Scale,
          })}
          className="absolute top-[7rem] left-1/2 h-[45vh]"
        >
          <Image
            src="/images/external2.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code3Opacity,
          })}
          className="absolute -top-[4rem] left-1/2 -translate-x-1/4 h-[85vh]"
        >
          <Image
            src="/images/external3.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
