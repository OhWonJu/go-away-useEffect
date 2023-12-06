import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Image, ToggleButton } from "../components/ui";
import useTheme from "../lib/client/hooks/useTheme";
import { useLocalStorage } from "../lib/client/hooks/useLocalStorage";

const animationOrder = {
  initial: 0.2,
  fadeInItem: 0.3,
  fadeInCode1: 0.4,
  showCode1: 0.5,
  code1MoveStart: 0.6,
  code1MoveEnd: 0.65,
  showCode2: 0.65,
  code2MoveStart: 0.75,
  code2MoveEnd: 0.8,
  showCode3: 0.85,
  FadeOutStart: 0.9,
  FadeOutEnd: 1,
};

export const Case2WithParent = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("Parent Component", "와 상호작용 하는 경우");
      window.location.hash = "With Parent";
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
      animationOrder.fadeInItem,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );
  const item1Y = useTransform(scrollYProgress, [0.4, 0.5], ["0%", "-70%"]);

  const code1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInCode1,
      animationOrder.showCode1,
      animationOrder.code2MoveStart,
      animationOrder.code2MoveEnd,
    ],
    [0, 1, 1, 0]
  );
  const code1X = useTransform(
    scrollYProgress,
    [animationOrder.code1MoveStart, animationOrder.code1MoveEnd],
    ["-50%", "-85%"]
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
    ["-50%", "-15%", "-15%", "-90%"]
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

  const theme = useTheme();
  const [_, setTheme] = useLocalStorage("theme");

  const onFunc = () => {
    setTheme("dark");
  };
  const offFunc = () => {
    setTheme("light");
  };

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: item1Opacity,
            "--y": item1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-1/2 -translate-x-1/2 h-[45vh] flex flex-col justify-center z-10"
        >
          <ToggleButton
            onFunc={onFunc}
            offFunc={offFunc}
            initToggleState={theme?.themeMode === "dark" ? true : false}
          />
        </motion.div>

        <motion.div
          style={stylesWithCssVar({
            opacity: code1Opacity,
            x: code1X,
          })}
          className="absolute top-[7rem] left-1/2 h-[55vh]"
        >
          <Image
            src="/images/withParent1.png"
            alt="with Parent 예시"
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code2Opacity,
            x: code2X,
          })}
          className="absolute top-[7rem] left-1/2 h-[55vh]"
        >
          <Image
            src="/images/withParent2.png"
            alt="with Parent 예시"
            className="h-full aspect-2/1"
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({
            opacity: code3Opacity,
          })}
          className="absolute top-[7rem] left-[40%] h-[55vh]"
        >
          <Image
            src="/images/withParent3.png"
            alt="External store 예시."
            className="h-full aspect-2/1"
          />
        </motion.div>
      </div>
    </section>
  );
};
