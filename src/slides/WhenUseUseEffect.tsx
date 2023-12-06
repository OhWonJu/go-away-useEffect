import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Image } from "../components/ui";

const animationOrder = {
  initial: 0.3,
  showItem1: 0.5,
  FadeOutStart: 0.7,
  FadeOutEnd: 0.9,
};

export const WhenUseUseEffect = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("useEffect", "를 사용하는 경우");
      window.location.hash = "Use useEffect";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const item1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showItem1,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: item1Opacity,
          })}
          className="absolute top-[2rem] -translate-x-1/2 left-1/2 h-[60vh]"
        >
          <Image
            src="/images/cursor.png"
            alt="useEffect"
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
