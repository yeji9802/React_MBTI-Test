import React from 'react';
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { resultData } from '../stores/result/resultData';
import { ResultType } from '../stores/result/types';

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const testResult = resultData.find((cat: ResultType) => cat.mbti === mbti);

  console.log({testResult})

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <ContentsWrapper>
        <SubTitle>{testResult?.name}</SubTitle>
        <LogoImage>
          <Image
            src={testResult?.image}
            className="rounded-circle"
            width="370px"
            height="340px"
          />
        </LogoImage>
        <Desc>나와 성향이 맞는 고양이는 {mbti}형 고양이입니다.</Desc>
        <Desc>{testResult?.desc}</Desc>
        <Best>잘 맞는 MBTI : {testResult?.best}</Best>
        <Button variant="outline-secondary" onClick={handleClickButton}>
          테스트 다시하기
        </Button>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default ResultPage;

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

const Best = styled.p`
  margin-top: 10px;
`;