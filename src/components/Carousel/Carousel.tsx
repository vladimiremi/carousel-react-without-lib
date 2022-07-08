import { ReactChild, useRef, useState } from "react";

import { IconLeft, IconRight } from "../../assets/icons";
import * as S from "./Carousel.styled";

interface CarouselProps {
  children: any;
}

export function Carousel({ children }: CarouselProps) {
  const refCarousel = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  const refContainer = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const [scrollX, setScrollX] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = (ref: any) => {};

  const handleLeftArrow = () => {
    let x = scrollX - Math.round(refContainer.current.scrollWidth / 2);
    console.log({ x });

    setShowRightArrow(true);

    if (x < 0) {
      x = 0;
      setShowLeftArrow(false);
    }
    refCarousel.current.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX + Math.round(refContainer.current.scrollWidth / 2);
    console.log(refCarousel.current.scrollWidth);

    const sizeScrollX = refCarousel.current.scrollWidth;

    const paddingSize = 32;

    setShowLeftArrow(true);

    if (x > sizeScrollX - refContainer.current.scrollWidth) {
      x = sizeScrollX - refContainer.current.scrollWidth + paddingSize;

      setShowRightArrow(false);
    }

    refCarousel.current.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });

    setScrollX(x);
  };

  console.log({ children });

  return (
    <S.ContainerCarousel ref={refContainer}>
      <S.Carousel ref={refCarousel}>
        {children.length > 0 &&
          children.map((item: ReactChild, index: number) => (
            <div
              key={index}
              style={{
                scrollSnapAlign: "center",
                scrollMarginBlockStart: "30px",
              }}
            >
              {item}
            </div>
          ))}
      </S.Carousel>

      {showLeftArrow && (
        <S.LeftArrow className="left-arrow" onClick={handleLeftArrow}>
          <IconLeft width={15} />
        </S.LeftArrow>
      )}

      {showRightArrow && (
        <S.RightArrow className="right-arrow" onClick={handleRightArrow}>
          <IconRight width={15} color="black" />
        </S.RightArrow>
      )}
    </S.ContainerCarousel>
  );
}
