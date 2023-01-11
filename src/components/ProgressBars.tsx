import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { questionData } from './../stores/question/questionData';

interface ProgressBarsProps {
  questionNumber: number;
}

const ProgressBars = (props: ProgressBarsProps) => {
  return (
    <div>
      <ProgressBar
        now={Math.round((props.questionNumber / questionData.length) * 100)}
        label={`${
          Math.round((props.questionNumber / questionData.length) * 100)
        }%`}
        style={{ width: '100%', borderRadius: '0' }}
      />
    </div>
  );
};

export default ProgressBars;