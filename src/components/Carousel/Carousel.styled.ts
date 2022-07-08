import styled from "styled-components";

export const ContainerCarousel = styled.div`
  position: relative;

  display: flex;

  &:hover {
    .left-arrow,
    .right-arrow {
      opacity: 1;
    }
  }
`;

export const Carousel = styled.div`
  display: flex;

  gap: 0.8rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    height: 0px;
  }
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const LeftArrow = styled.section`
  cursor: pointer;
  position: absolute;
  left: 2vw;
  height: 100%;
  z-index: 999;

  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #00000073; */
  transition: all ease 0.5s;
`;

export const RightArrow = styled.section`
  cursor: pointer;
  position: absolute;
  right: 2vw;
  height: 100%;
  z-index: 999;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  /* background-color: #000000; */
  transition: all ease 0.5s;
`;
