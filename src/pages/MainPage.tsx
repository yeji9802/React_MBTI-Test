import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

import catImage from "./../assets/cat/cat.jpg";
import Header from "../components/Header";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header type="title" questionNumber={0}/>
      <ContentsWrapper>
        <SubTitle>당신의 성향과 맞는 고양이를 찾아드립니다.</SubTitle>
        <LogoImage>
          <Image src={catImage} className="rounded-circle" />
        </LogoImage>
        <Desc>ฅ ^•ﻌ•^ ฅ</Desc>
        <Button variant="outline-secondary" onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #faf7f0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const SubTitle = styled.span`
  font-size: 20px;
`;

const LogoImage = styled.div`
  margin: 50px 0;
`;

const Desc = styled.p`
  margin-bottom: 10px;
`;
