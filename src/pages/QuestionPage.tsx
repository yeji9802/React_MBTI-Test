import React, { useState } from 'react';
import styled from 'styled-components';
import { questionData } from '../stores/question/questionData';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';

const QuestionPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClickAnswer = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <Wrapper>
      <Header type="progressBar" questionNumber={questionNumber} />
      <ContentsWrapper>
        <Title>{questionData[questionNumber].title}</Title>
        <ButtonGroup>
          <Button
            variant="outline-secondary"
            style={{
              marginBottom: '20px',
              padding: '20px',
              width: "800px"
            }}
            onClick={handleClickAnswer}
          >
            {questionData[questionNumber].answera}
          </Button>
          <Button
            variant="outline-secondary"
            style={{ padding: '20px' }}
            onClick={handleClickAnswer}
          >
            {questionData[questionNumber].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default QuestionPage;

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
  margin: 50px 20px 0;
`;

const Title = styled.h1`
  margin: 100px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;
