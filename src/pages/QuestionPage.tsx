import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { questionData } from '../stores/question/questionData';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import { createSearchParams, useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map(s =>
      s.id === type ? { id: s.id, score: s.score + ans } : s,
    );

    setTotalScore(newScore);

    // 마지막 문제가 아닐 경우
    if (questionData.length !== questionNumber + 1) {
      setQuestionNumber(questionNumber + 1);
      // 마지막 문제일 경우
    } else {
      const mbti = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score === 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        '',
      );

      console.log("mbti", mbti);

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

    // if (type === 'EI') {
    //   // 기존 스코어에 대한 새로운 스코어 값
    //   const addScore = totalScore[0].score + ans;
    //   // 새로운 스코어를 변환한 새로운 객체
    //   const object = { id: 'EI', score: addScore };
    //   // 새로운 객체를 기존에 토탈 스코어 변경
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'SN') {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'SN', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'TF') {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'TF', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'JP') {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'JP', score: addScore };
    //   totalScore.splice(0, 1, object);
    // }
  };

  useEffect(() => {
    console.log(totalScore[0].score);
  }, [totalScore[0].score]);

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
              width: '800px',
            }}
            onClick={() =>
              handleClickAnswer(1, questionData[questionNumber].type)
            }
          >
            {questionData[questionNumber].answera}
          </Button>
          <Button
            variant="outline-secondary"
            style={{ padding: '20px' }}
            onClick={() =>
              handleClickAnswer(0, questionData[questionNumber].type)
            }
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
`;
