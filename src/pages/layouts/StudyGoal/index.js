import React, { useState } from "react";
import * as S from "./style";
import Footer from "../Footer/index";

const StudyGoal = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [task, setTask] = useState("");
  const handleMinutes = (event) => {
    const value = event.target.value;
    if (value < 60 && value >= 0) setMinutes(value);
  };
  return (
    <>
      <S.header>학습 목표량</S.header>
      <S.container>
        <S.label htmlFor="">목표 공부시간</S.label>
        <S.container>
          <S.ClockInput
            type="number"
            value={hour}
            onChange={(event) => setHour(event.target.value)}
            min="0"
          />
          :시간
          <S.ClockInput
            type="number"
            value={minutes}
            onChange={handleMinutes}
            max="59"
            min="0"
          />
          :분
        </S.container>
      </S.container>
      <S.container>
        <S.label htmlFor="">공부 과목</S.label>
        <S.container>
          <S.task
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </S.container>
      </S.container>
      <Footer />
    </>
  );
};

export default StudyGoal;
