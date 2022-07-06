import styled from "styled-components";

export const ContainerCarousel = styled.div`
  position: relative;
  padding: 0 1rem;
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
  padding-left: 2rem;
  padding-right: 1rem;
  position: relative;
`;

export const LeftArrow = styled.section`
  cursor: pointer;
  position: absolute;
  left: -0;
  height: 100%;
  z-index: 2;
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
  right: -0;
  height: 100%;
  z-index: 2;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #000000; */
  transition: all ease 0.5s;
`;
