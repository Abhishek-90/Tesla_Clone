import React from "react";
import styled from "styled-components";

function Section({modelName, imageURL}) {
  console.log(imageURL);
  return (
    <Wrap imageURL={imageURL}>
      <ItemText>
        <h1>{modelName}</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/images/${props.imageURL}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 13vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
  border: none;
`;

const RightButton = styled(LeftButton)`
  background-color: #d4d3d2;
  color: #393c41;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
