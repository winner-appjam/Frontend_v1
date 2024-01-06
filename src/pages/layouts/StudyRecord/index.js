import React from 'react';
import * as S from './style'
import Footer from '../Footer';

const StudyRecord = () => {
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
        <S.Input />
      </S.Memo>
      <Footer />
    </S.Layout>
  );
};

export default StudyRecord;