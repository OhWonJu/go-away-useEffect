import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Callout } from "../components/ui";

const animationOrder = {
  initial: 0.2,
  fadeInCallout1: 0.25,
  showCallout1: 0.3,
  fadeOutCallout1: 0.35,
  fadeInCallout2: 0.4,
  showCallout2: 0.45,
  fadeOutCallout2: 0.5,
  fadeInCallout3: 0.55,
  showCallout3: 0.6,
  fadeOutCallout3: 0.65,
  fadeInCallout4: 0.7,
  showCallout4: 0.75,
  FadeOutStart: 0.8,
  FadeOutEnd: 0.9,
};

export const TheEnd = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("마치며");
      window.location.hash = "감사합니다!";
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const callout1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInCallout1,
      animationOrder.showCallout1,
      animationOrder.fadeOutCallout1,
    ],
    [0, 1, 1, 0]
  );
  const callout1Y = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
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
          style={stylesWithCssVar({ opacity: callout1Opacity, y: callout1Y })}
          className="absolute top-[45%] left-[25%]"
        >
          <Callout mainContent="우리가 사용하는 도구의 용도를 잘 알아야 합니다." />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout2Opacity, y: callout2Y })}
          className="absolute top-[45%] left-[25%]"
        >
          <Callout
            mainContent="하지만"
            subContent="도구의 용도를 지키는 것에 매몰 되어서는 안된다고 생각합니다."
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout3Opacity, y: callout3Y })}
          className="absolute top-[45%] left-[25%]"
        >
          <Callout
            mainContent="도구는 도구일 뿐"
            subContent="우리의 창의력을 제한하는 것이 아닌, 창의력을 표출시키는 용도로 
            사용되어야 한다고 생각합니다."
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout4Opacity, y: callout4Y })}
          className="absolute top-[45%] left-[25%]"
        >
          <Callout mainContent="감사합니다!" />
        </motion.div>
      </div>
    </section>
  );
};
