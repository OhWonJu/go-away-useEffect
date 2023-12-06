import styled from "styled-components";
import tw from "twin.macro";

export const CountDownWrapper = styled.div`
  ${tw`flex space-x-6 h-[80vh] items-center`}
`;

export const TimeWrapper = styled.div`
  ${tw`flex flex-col w-[140px] h-[140px] justify-center items-center`}
`;

export const Time = styled.p`
  ${tw`font-extrabold text-8xl`}
`;

export const Format = styled.p`
  ${tw`font-bold text-lg`}
`;
