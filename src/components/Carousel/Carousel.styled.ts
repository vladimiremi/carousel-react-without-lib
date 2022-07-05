import styled from "styled-components";

interface CarouselProps {
  width: string;
}

export const ContainerCarousel = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;

  &:hover {
    .left-arrow,
    .right-arrow {
      opacity: 1;
    }
  }
`;

export const Carousel = styled.div<CarouselProps>`
  display: flex;
  /* background: red; */
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    height: 0px;
  }
  padding-left: 2rem;
  padding-right: 1rem;
  position: relative;

  div {
    width: ${(props) => props.width || "70vw"};

    flex: none;
    border-radius: 18px;
    flex-shrink: 0;
    scroll-snap-align: start;

    img {
      width: 100%;
      height: 100%;
      border-radius: 18px;
      pointer-events: none;
    }
  }
`;

export const LeftArrow = styled.section`
  cursor: pointer;
  position: absolute;
  left: -0;
  top: 40%;
  z-index: 2;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const RightArrow = styled.section`
  cursor: pointer;
  position: absolute;
  right: -0;
  top: 40%;
  z-index: 2;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;
