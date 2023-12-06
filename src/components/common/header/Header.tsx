import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import HeaderContentStore from "../../../lib/client/store/headerContentStore";
import { HeaderSlideTitle } from "./Header.styles";

const Header = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  const { headerContent, headerSubContent } = HeaderContentStore();

  return (
    <motion.header
      ref={targetRef}
      style={{ opacity }}
      className="sticky top-10 pl-10 w-full z-[999]"
    >
      <p className="inline text-6xl font-bold">
        <HeaderSlideTitle>{headerContent}</HeaderSlideTitle>
        {headerSubContent}
      </p>
    </motion.header>
  );
};

export default Header;
