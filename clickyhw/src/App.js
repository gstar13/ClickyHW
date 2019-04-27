import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import ArianaCard from "./components/ArianaCard";
import TaylorCard from "./components/TaylorCard";
import AnthraxCard from "./components/AnthraxCard";
import MetallicaCard from "./components/MetallicaCard";
import SlayerCard from "./components/SlayerCard";
import PoisonCard from "./components/PoisonCard";
import GunsNRosesCard from "./components/GunsNRosesCard";
import MegadethCard from "./components/MegadethCard";

function App() {
  return (
    <Wrapper>
      <Title>Clicky Game</Title>
      <SpongeBobCard />
      <TaylorCard />
      <MetallicaCard />
      <PoisonCard />
      <AnthraxCard />
      <SlayerCard />
      <GunsNRosesCard />
      <MegadethCard />
      <ArianaCard />
    </Wrapper>
  );
}

export default App;
