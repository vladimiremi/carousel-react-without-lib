import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { woman } from "./assets";
import * as S from "./styles/Global.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    console.log({ props });

    return (
      <div
        className={className}
        style={{
          // ...style,
          display: "block",
          background: "red",
          right: "10px",
          zIndex: "999 !important",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    console.log({ style });
    return (
      <div
        className={className}
        style={{
          // ...style,
          display: "block",
          background: "green",
          left: "10px",
          zIndex: "999 !important",
        }}
        onClick={onClick}
      />
    );
  }
  const [lista, setLista] = useState(0);
  var settings = {
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 2,

    // arrows: true,
    // dots: true,
    infinite: false,

    speed: 500,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <>
      <S.Container>
        <Carousel>
          {itens.map((item, index) => (
            <S.ItemCarrousel
              className="card"
              width={window.innerWidth / 4}
              key={index}
            >
              <div>
                <img src={woman} alt="Mulher feliz" />
              </div>
            </S.ItemCarrousel>
          ))}
        </Carousel>
      </S.Container>
      <Slider beforeChange={(e) => console.log(e)} {...settings}>
        {itens.map((item, index) => (
          <S.ItemCarrousel
            className="card"
            width={window.innerWidth / 4}
            key={index}
          >
            <div>
              <img src={woman} alt="Mulher feliz" />
            </div>
          </S.ItemCarrousel>
        ))}
        {/* <button type="button" className="slick-prev">
          Previous
        </button>
        <button type="button" className="slick-next">
          Previous
        </button> */}
      </Slider>
    </>
  );
}

export default App;
