import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section modelName="Model S" imageURL="model-s.jpg" />
      <Section modelName="Model Y" imageURL="model-y.jpg" />
      <Section modelName="Solar Roof" imageURL="solar-roof.jpg" />
      <Section modelName="Solar Panel" imageURL="solar-panel.jpg" />
      <Section modelName="Model 3" imageURL="model-3.jpg" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
