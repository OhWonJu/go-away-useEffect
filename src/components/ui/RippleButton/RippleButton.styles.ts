import styled from "styled-components";

export const ButtonWrapper = styled.button<any>`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  cursor: pointer;

  & span {
    background-color: ${props =>
      props.rippleColor ? props.rippleColor : props.theme.transparent_50};
  }
`;

export const Ripple = styled.span``;
