import styled from "styled-components";

const Curosr = styled.div`
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const Dot = styled(Curosr)`
  width: 8px;
  height: 8px;
  background-color: white;
`;

export const OutLine = styled(Curosr)<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 2px solid hsla(0, 0%, 100%, 0.6);
  transition: width 0.05s, height 0.05s;
`;
