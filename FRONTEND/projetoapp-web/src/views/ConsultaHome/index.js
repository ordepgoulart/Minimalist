import React from "react";
import Header from "../../components/Header";
import * as Styl from "./styles"
function Home() {
  return (
    <Styl.Container>
      <Header />
    </Styl.Container>
  )
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default Home;
