import React from "react";
import styled from "styled-components";

type CardPropsType = {
  title: string;
  text: string;
  src: string;
};

export function Card(props: CardPropsType) {
  return (
    <BoxCard>
      <StyledCard>
        <Image src={props.src} alt="" />
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <BoxButton>
          <SupperButton>See more</SupperButton>
          <Button>Save</Button>
        </BoxButton>
      </StyledCard>
    </BoxCard>
  );
}

const BoxCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 10%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 10px;
  margin: 0;
`;

const Text = styled.p`
  color: #abb3ba;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  padding: 0 10px;
`;

const BoxButton = styled.div`
  display: flex;
  padding-left: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  margin-right: 12px;
  color: #4e71fe;
  border-radius: 5px;
  border: 2px solid #4e71fe;
  font-size: 10px;
  font-weight: 700;
  width: 86px;
  height: 30px;
`;

const SupperButton = styled(Button)`
  background-color: #4e71fe;
  color: #fff;
`;
