import React from "react";
import { toast } from "react-toastify";

import { Track } from "../../../../lib/client/types/Track";
import { EllipsisText } from "../../../ui";

interface PlayListToastProps {
  track: Track;
}

const PlayListToast: React.FC<PlayListToastProps> = ({ track }) => {
  const Notic = () => (
    <a className="font-extrabold text-xs">플레이리스트에 추가됨</a>
  );

  return (
    <div className="flex flex-col max-w-full h-full">
      <section>
        <Notic />
      </section>
      <section>
        <EllipsisText
          context={`${track.trackTitle}`}
          lineClamp={1}
          className="font-semibold text-sm"
        />
      </section>
    </div>
  );
};

const Toast = ({ track }: PlayListToastProps) =>
  toast(<PlayListToast track={track} />);

export default Toast;
