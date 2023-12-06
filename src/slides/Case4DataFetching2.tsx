import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Callout } from "../components/ui";

const animationOrder = {
  initial: 0.3,
  fadeInCallout1: 0.4,
  showCallout1: 0.5,
  fadeOutCallout1: 0.6,
  fadeInCallout2: 0.7,
  showCallout2: 0.8,
  fadeOutCallout2: 0.9,
  FadeOutEnd: 1,
};

export const Case4DataFetching2 = () => {
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

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({ opacity: callout1Opacity, y: callout1Y })}
          className="absolute top-[45%] left-[35%]"
        >
          <Callout
            mainContent="renderAsYouFetch()"
            subContent="TanstackQuery, NextJS 와 같은 대체제를 사용할 수 있습니다.
            혹은 use Hook 을 사용할 수 있습니다."
          />
        </motion.div>
        <motion.div
          style={stylesWithCssVar({ opacity: callout2Opacity, y: callout2Y })}
          className="absolute top-[40%] left-[35%]"
        >
          <Callout
            mainContent="use?"
            subContent="RFC: First class support for promises and async/await

            React 18 버전에서 Canary 상태인 Hook 입니다. 
            비동기를 위한 일급 객체를 제공합니다.
            use 는 React 만을 위한 await 라고 볼 수 있습니다."
          />
        </motion.div>
      </div>
    </section>
  );
};
