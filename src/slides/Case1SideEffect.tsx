import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Image } from "../components/ui";

export const Case1SideEffect = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("Side Effect", "로 인해 상태가 바뀌는 경우");
      window.location.hash = "Side Effect";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const item10Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const item10Y = useTransform(scrollYProgress, [0.4, 0.5], ["50%", "15%"]);

  const item20Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.5, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const item20Y = useTransform(scrollYProgress, [0.4, 0.5], ["50%", "100%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: item10Opacity,
            "--y": item10Y,
          })}
          className="translate-y-centered-offset absolute top-[7rem] left-1/2 -translate-x-1/2 h-[45vh]"
        >
          <Image
            src="/images/case1-1.png"
            alt="sideEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>

        <motion.div
          style={stylesWithCssVar({
            opacity: item20Opacity,
            "--y": item20Y,
          })}
          className="translate-y-centered-offset absolute top-[7rem] left-1/2 -translate-x-1/2 h-[45vh]"
        >
          <Image
            src="/images/case1-2.png"
            alt="sideEffect 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
