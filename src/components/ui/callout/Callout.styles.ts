import styled from "styled-components";
import tw from "twin.macro";

export const Strong = styled.strong`
  color: ${(props) => props.theme.text_primary_color};
  ${tw`text-5xl font-extrabold`}
`;

export const P = styled.p`
  color: ${(props) => props.theme.text_primary_color};
  white-space: pre-line;

  ${tw`text-2xl font-bold`}
`;
