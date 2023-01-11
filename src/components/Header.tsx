import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import { questionData } from '../stores/question/questionData';

interface HeaderProps {
  type: string;
  questionNumber: number;
}

const Header = (props: HeaderProps) => {
  return (
    <Wrapper>
      {props.type === 'progressBar' ? (
        <WrapperProgress>
          <ProgressBar
            now={Math.round((props.questionNumber / questionData.length) * 100)}
            label={`${Math.round(
              (props.questionNumber / questionData.length) * 100,
            )}%`}
            style={{ width: '100%', borderRadius: '0' }}
          />
        </WrapperProgress>
      ) : (
        <WrapperTitle>
          <Title>MBTI 고양이</Title>
        </WrapperTitle>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header``;

const WrapperProgress = styled.header``;

const WrapperTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #83a4d4;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 25px;
  color: #ffffff;
`;
