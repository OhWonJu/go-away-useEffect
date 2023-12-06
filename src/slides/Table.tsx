import { useTransform, useScroll, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import HeaderContentStore from "../lib/client/store/headerContentStore";
import TableList from "../components/sliders/table/TableList";

const tableData = [
  { mainContent: "useEffect?", subContent: "", subIndex: [] },
  {
    mainContent: "useEffect",
    subContent: "를 사용해야 하는 경우",
    subIndex: [],
  },
  {
    mainContent: "useEffect",
    subContent: "를 대체해야 하는 경우",
    subIndex: [
      {
        mainContent: "Side Effect",
        subContent: "로 인해 상태가 바뀌는 경우",
        subIndex: [],
      },
      {
        mainContent: "Parent Component",
        subContent: "와 상호작용 하는 경우",
        subIndex: [],
      },
      {
        mainContent: "External Store",
        subContent: "를 사용하는 경우",
        subIndex: [],
      },
      {
        mainContent: "Data Fetching",
        subContent: "을 하는 경우",
        subIndex: [],
      },
      { mainContent: "User Event", subContent: "를 다루는 경우", subIndex: [] },
    ],
  },
];

export const Table = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);
  // const extendedRef = useRef<HTMLDivElement | null>(null);

  // 타겟의 시작점이 윈도우의 끝점에 도착하면 progress 가 계산 됨
  // 그리고 끝점이 윈도우의 시작점에 닿으면 progress 가 1
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("목차");
      window.location.hash = "목차";
    }
  }, [isInView]);

  return (
    <section className="relative z-10 mt-[100vh] mb-[50vh] h-[200vh]">
      <div ref={targetRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[25vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, opacity }} className="origin-top">
              <TableList tableData={tableData} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
