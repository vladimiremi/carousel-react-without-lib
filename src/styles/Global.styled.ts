import styled, { createGlobalStyle } from "styled-components";

interface ItemCarrouselProps {
  width: number;
}

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 3;
    background: rgb(26, 29, 41);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    .slick-prev {
      left: 0.8% !important;
      z-index: 1;
    }
    .slick-next {
      right: 0.8% !important;
      z-index: 1;
    }
  }
`;

export const ItemCarrousel = styled.div<ItemCarrouselProps>`
  width: 30vh;
  margin: 1rem 0 !important;
  flex: none;
  border-radius: 18px;
  flex-shrink: 0;
  scroll-snap-align: start;
  position: relative;
  transition: all ease 0.5s;

  /* &:hover {
    transform: scale(1.04);
    z-index: 999;
  } */

  img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
    pointer-events: none;
    transition: all ease 0.5s;
  }
`;

export const Container = styled.div`
  width: 100%;
  /* overflow: hidden; */
`;
