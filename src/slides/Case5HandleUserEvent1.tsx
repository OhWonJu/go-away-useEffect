import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stylesWithCssVar } from "../utils/motion";
import HeaderContentStore from "../lib/client/store/headerContentStore";
import { Track } from "../lib/client/types/Track";
import TrackItem from "../components/sliders/trackItem/TrackItem";

const animationOrder = {
  initial: 0.3,
  showItem: 0.4,
  FadeOutStart: 0.9,
  FadeOutEnd: 1,
};

export const Case5HandleUserEvent1 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef);

  const { setHeaderContent } = HeaderContentStore();

  useEffect(() => {
    if (isInView) {
      setHeaderContent("User Event", "를 다루는 경우");
      window.location.hash = "User Event";
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
      animationOrder.showItem,
      animationOrder.FadeOutStart,
      animationOrder.FadeOutEnd,
    ],
    [0, 1, 1, 0]
  );

  const [tracks, setTracks] = useState<Array<Track>>([
    { trackNumber: 1, trackTitle: "Our Love Is Greate", isInPlayList: false },
    {
      trackNumber: 2,
      trackTitle: "Love It If We Made It",
      isInPlayList: false,
    },
    { trackNumber: 3, trackTitle: "Sincerity Is Scary", isInPlayList: false },
    {
      trackNumber: 4,
      trackTitle: "It's Not Living (If It's Not With You)",
      isInPlayList: false,
    },
  ]);

  const addToPlayList = (track: Track) => {
    const targetIndex = tracks.findIndex(
      (t) => t.trackNumber === track.trackNumber
    );
    const newTracks = [...tracks];
    newTracks[targetIndex].isInPlayList = true;

    setTracks(newTracks);
  };

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div
          style={stylesWithCssVar({
            opacity: code1Opacity,
          })}
          className="absolute top-[12rem] left-1/2 -translate-x-1/2 h-[60vh]"
        >
          {/* TRACK LIST */}
          <ul className="flex flex-col w-[800px] space-y-2">
            {tracks.map((track: Track, index: number) => (
              <TrackItem
                key={index}
                track={track}
                addToPlayList={addToPlayList}
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
