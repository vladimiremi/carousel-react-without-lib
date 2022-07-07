import styled from "styled-components";

export const ItemCarrousel = styled.div`
  width: 20vw;
  margin: 1rem 0;
  flex: none;
  border-radius: 18px;
  flex-shrink: 0;
  scroll-snap-align: start;
  position: relative;
  transition: all ease 0.5s;

  &:hover {
    transform: scale(1.04);
    z-index: 999;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
    pointer-events: none;
    transition: all ease 0.5s;
  }
`;

export const Container = styled.div`
  /* width: 50%; */
`;
