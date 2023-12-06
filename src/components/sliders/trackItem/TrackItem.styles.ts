import styled from "styled-components";
import tw from "twin.macro";

export const TrackLISubA = styled.a`
  color: ${(props) => props.theme.transparent_50};
  ${tw`font-semibold text-xs`}
`;

export const QueuePlayIconBox = styled.div`
  background-color: ${(props) => props.theme.background_color};
  ${tw`absolute grid place-content-center bottom-1 right-1 w-[14px] h-[14px] rounded-full`}
`;
