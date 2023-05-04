import React from "react";
import styled from "styled-components";
import Image from "next/image";
import publish from "../images/publications.png";

const Container = styled.div`
  font-family: "neutralFace";
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 4xl;
  font-weight: bold;
`;

const Underline = styled.p`
  text-decoration: underline;
`;

const Publications = () => {
  return (
    <Container>
      <div className="px-3">
        <Divider />
        <div className="flex text-xl md:text-4xl my-3 font-bold justify-between mb-36 w-full">
          <div>MEET US</div>
          <div>SERVICES</div>
          <div>ALL WORK</div>
        </div>
      </div>
      <div className="bg-[#e7e7e7] pb-[20vh]">
        <div className="h-[100vh] w-full flex flex-col-reverse md:flex-row">
          <TextContainer className="flex items-center justify-center flex-col px-3 text-black w-full md:w-[50%]">
            <div className="h-[90%] flex items-center justify-center flex-col">
              <div className="text-lg">(PB.001 - 21)</div>
              <Title>UNCOMPROMISED CREATIVITY</Title>
              <Underline>EXPLORE PUBLICATION</Underline>
            </div>
            <div className="h-[10%] flex w-full justify-center items-center flex-col">
              <Divider />
              <Title>OUR PUBLICATIONS</Title>
            </div>
          </TextContainer>
          <ImageContainer className="w-full md:w-[50%] flex items-center justify-center bg-[#e7e7e7] md:bg-black h-full">
            <Image alt="" src={publish} className="w-[70%]" />
          </ImageContainer>
        </div>
      </div>
    </Container>
  );
};

const TextContainer = styled.div`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 100%;
`;

export default Publications;
