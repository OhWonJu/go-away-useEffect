import styled from "styled-components";
import tw from "twin.macro";

export const TableMainContent = styled.em`
  font-style: normal;
  color: ${(props) => props.theme.symbol_color};

  ${tw`pr-2`}
`;
