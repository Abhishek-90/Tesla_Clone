import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        modelName="Model S"
        imageURL="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        description="Order Online for Touchless Delivery"
      />
      <Section
        modelName="Model Y"
        imageURL="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        description="Order Online for Touchless Delivery"
      />
      <Section
        modelName="Model X"
        imageURL="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        description="Order Online for Touchless Delivery"
      />
      <Section
        modelName="Model 3"
        imageURL="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        description="Order Online for Touchless Delivery"
      />
      <Section
        modelName="Solar Panel"
        imageURL="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        description="Lowest Cost Solar Panels in America"
      />
      <Section
        modelName="Solar Roof"
        imageURL="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        description="Produce Clean Energy From Your Roof"
      />
      <Section
        modelName="Accessories"
        imageURL="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
