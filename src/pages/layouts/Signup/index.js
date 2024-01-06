import React from 'react';
import * as S from './style'

const SignUp = () => {

  return (
    <S.Layout>
      <S.Title>회원가입</S.Title>
      <S.FormLayout>
        <S.Input placeholder='아이디' />
        <S.Input placeholder='비밀번호' />
        <S.Input placeholder='이메일주소' />
        <S.Input placeholder='닉네임' />
      </S.FormLayout>
      <S.Submit>확인</S.Submit>
    </S.Layout>
  );
};

export default SignUp;