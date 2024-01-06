import React, { useEffect, useState } from "react";
import UserMan from "./image/UMan.svg";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [user, setUser] = useState({
    accountId: "",
    accountPw: "",
  });

  useEffect(() => {
    setUser({
      accountId: id,
      accountPw: pw,
    });
  }, [id, pw]);

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/user/login`, user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Layout>
      <S.title>로그인</S.title>
      <S.userImg src={UserMan} />
      <S.form>
        <S.userInput
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <S.userInput
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />
        <S.login onClick={login}>로그인</S.login>
      </S.form>
      <Link to={"/signup"}>
        <S.signUp>회원가입</S.signUp>
      </Link>
    </S.Layout>
  );
};

export default SignIn;
