import React, { useEffect } from "react";
import { Col } from "../../../styles/GlobalStyle";
import { Track } from "../../../lib/client/types/Track";
import { QueuePlayIconBox } from "./TrackItem.styles";
import { RippleButton } from "../../ui";
import { Play, QueueList } from "../../../icons";
import { PlayListToast } from "../../common/toastify";

interface TrackItemProps {
  key: number;
  track: Track;
  addToPlayList: Function;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, addToPlayList }) => {
  // useEffect(() => {
  //   if (track.isInPlayList) {
  //     PlayListToast({ track });
  //   }
  // }, [track, track.isInPlayList]);

  // const handlePlayClick = () => {
  //   playTrack();
  //   addToPlayLists(track);
  // };

  // const handleAddPlayListClick = () => {
  //   addTrack();
  //   addToPlayLists(track);
  // };

  const playTrack = () => null;

  const addTrack = () => {
    if (!track.isInPlayList) {
      PlayListToast({ track });
    }
    addToPlayList(track);
  };

  const handlePlayClick = () => {
    playTrack();
    addTrack();
  };

  const handleAddPlayListClick = () => {
    addTrack();
  };

  return (
    <li className="relative flex items-center w-full min-h-[50px] max-h-[45px]">
      {/* COL-1 */}
      <div className="w-[45px] h-full grid place-items-center mr-4">
        <a className="font-semibold">{track.trackNumber}.</a>
      </div>
      {/* COL-2 */}
      <Col>
        <a className="font-semibold">{track.trackTitle}</a>
      </Col>
      {/* COL-3 */}
      <div className="absolute items-center justify-center right-0 h-full space-x-1">
        <RippleButton
          className="p-2 rounded-full"
          clickHandler={handlePlayClick}
        >
          <Play className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          className="relative p-2 rounded-full"
          clickHandler={handleAddPlayListClick}
        >
          <QueueList className="w-4 h-4" />
          <QueuePlayIconBox>
            <Play className="w-3 h-3" />
          </QueuePlayIconBox>
        </RippleButton>
      </div>
    </li>
  );
};

export default TrackItem;
