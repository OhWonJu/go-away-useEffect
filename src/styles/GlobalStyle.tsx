/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle<any>`
    ${normalize}

    *{
        color: ${(props) => props.theme.text_primary_color};
        font-family: sans-serif;
    }
    body {
        min-width: 420px;
        background-color: ${(props) => props.theme.background_color};
        transition: background-color 300ms ease-in-out;
        background-repeat: repeat;
    }

    html,
    body {
      height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
      /* font-family: var(--font-sans); */
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* background-color: var(--primary); */
      /* color: var(--text-primary); */
      overscroll-behavior-x: none;
    }

    body {
      position: relative;
      min-height: 100%;
      margin: 0;
    }

    #root {
      width: 100%;
      height: 100%;
    }
`;

export const GlobalStyle = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SymbolText = styled.a`
  ${tw`font-extrabold text-6xl`}
`;

export const MainKeyword = styled.p``;

export const ExplainText = styled.p``;
