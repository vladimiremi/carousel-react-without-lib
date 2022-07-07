import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { woman } from "./assets";
import * as S from "./styles/Global.styled";

function App() {
  const [lista, setLista] = useState(0);

  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <S.Container>
      <Carousel>
        {itens.map((item, index) => (
          <S.ItemCarrousel className="card" key={index}>
            <div>
              <img src={woman} alt="Mulher feliz" />
            </div>
          </S.ItemCarrousel>
        ))}
      </Carousel>
    </S.Container>
  );
}

export default App;
