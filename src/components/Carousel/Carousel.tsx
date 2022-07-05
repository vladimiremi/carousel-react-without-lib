import { useRef, useState } from "react";
import { woman } from "../../assets";
import { IconLeft, IconRight } from "../../assets/icons";
import * as S from "./Carousel.styled";

export function Carousel() {
  const refContainer = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (ref: any) => {};

  const handleLeftArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    console.log({ x });

    if (x < 0) {
      x = 0;
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

    if (x > sizeScrollX - window.innerWidth) {
      x = sizeScrollX - window.innerWidth + 32;
    }

    console.log({ x });
    refContainer.current.scrollTo({
      top: 0,
      left: x,
      behavior: "smooth",
    });

    setScrollX(x);
  };

  return (
    <S.ContainerCarousel>
      <S.Carousel width={"30vw"} ref={refContainer}>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
        <div className="card">
          <img src={woman} alt="Mulher feliz" />
        </div>
      </S.Carousel>
      <S.LeftArrow className="left-arrow" onClick={handleLeftArrow}>
        <IconLeft width={15} />
      </S.LeftArrow>

      <S.RightArrow className="right-arrow" onClick={handleRightArrow}>
        <IconRight width={15} />
      </S.RightArrow>
    </S.ContainerCarousel>
  );
}
