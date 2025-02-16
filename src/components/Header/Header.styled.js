import styled from "styled-components";

export const Header = styled.header`
  .header {
    padding-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    .header {
      position: absolute;
      top: 28px;
      z-index: 100;
      width: 100%;
      --shift-from-x: 0;
      --shift-to-x: 0;
      animation: move-vertical 1000ms ease-out 1000ms both;
    }
  }
`;
