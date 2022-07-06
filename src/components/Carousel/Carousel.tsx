import { ReactChild, useRef, useState } from "react";

import { IconLeft, IconRight } from "../../assets/icons";
import * as S from "./Carousel.styled";

interface CarouselProps {
  children: any;
}

export function Carousel({ children }: CarouselProps) {
  const refContainer = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const [scrollX, setScrollX] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = (ref: any) => {};

  const handleLeftArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    console.log({ x });

    setShowRightArrow(true);

    if (x < 0) {
      x = 0;
      setShowLeftArrow(false);
    }
    refContainer.current.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    console.log(refContainer.current.scrollWidth);

    const sizeScrollX = refContainer.current.scrollWidth;

    const paddingSize = 32;

    setShowLeftArrow(true);

    if (x > sizeScrollX - window.innerWidth) {
      x = sizeScrollX - window.innerWidth + paddingSize;

      setShowRightArrow(false);
    }

    refContainer.current.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });

    setScrollX(x);
  };

  console.log({ children });

  return (
    <S.ContainerCarousel>
      <S.Carousel ref={refContainer}>
        {children.length > 0 &&
          children.map((item: ReactChild, index: number) => (
            <div key={index} style={{ scrollSnapAlign: "start" }}>
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
