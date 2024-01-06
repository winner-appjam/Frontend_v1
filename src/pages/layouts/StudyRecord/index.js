import React, { useEffect, useState } from 'react';
import * as S from './style'
import Footer from '../Footer';

const StudyRecord = () => {

  const [memo, setMemo] = useState(() => {
    return localStorage.getItem('memo') || '';
  });

  const onMemoChange = (e) => {
    setMemo(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem("memo", memo)
  }, [memo])


  return (
    <S.Layout>
      <S.RecordLayout>
        <S.RecordText>공부기록</S.RecordText>
        <S.RecordBox></S.RecordBox>
        <S.RecordBox></S.RecordBox>
        <S.RecordBox></S.RecordBox>
        <S.RecordBox></S.RecordBox>
      </S.RecordLayout>
      <S.Memo>
        <S.MemoTitle>메모</S.MemoTitle>
        <S.Input value={memo} onChange={onMemoChange} />
      </S.Memo>
      <Footer />
    </S.Layout>
  );
};

export default StudyRecord;