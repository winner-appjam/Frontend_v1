import React, { useState,useEffect } from 'react';
import * as S from './style'
import axios from 'axios';

const SignUp = () => {

  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [checkPw,setCheckPw] = useState("")
  const [nick, setNick] = useState("")

  const [userData, setUserData] = useState({
    "account_id": "",
    "password": "",
    "name": "",
    "validPassword": ""
  })

  const onSubmitClick = async () => {
    try {
      const res = await axios.post("https://port-0-java-springboot-28f9s2blr1wg7it.sel5.cloudtype.app/user", userData)
      if (res.status === 200) {
        console.log("success")
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setUserData({
      "account_id": id,
      "password": pw,
      "name": nick,
      "validPassword": checkPw
    });
  }, [id, pw, nick, checkPw]);

  return (
    <S.Layout>
      <S.Title>회원가입</S.Title>
      <S.FormLayout>
        <S.Input
          placeholder='아이디'
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
        <S.Input
          placeholder='비밀번호'
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
          type='password'
        />
        <S.Input
          placeholder='비밀번호'
          value={checkPw}
          onChange={(e) => setCheckPw(e.currentTarget.value)}
          type='password'
        />
        <S.Input
          placeholder='닉네임'
          value={nick}
          onChange={(e) => setNick(e.currentTarget.value)}
        />
      </S.FormLayout>
      <S.Submit onClick={onSubmitClick} >확인</S.Submit>
    </S.Layout>
  );
};

export default SignUp;