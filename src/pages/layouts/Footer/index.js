import React from "react";
import * as S from "./style";
import Hicon from "./image/Home.svg";
import Book from "./image/Bookmark.svg";
import Clock from "./image/Clock.svg";
import FAQ from "./image/FAQ.svg";
import User from "./image/User.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <S.footD>
        <S.swipBtn>
          <Link to={"/signup"}>
            <img src={Hicon} alt="HOME"></img>
          </Link>
        </S.swipBtn>
        <S.swipBtn>
          <Link to={"/"}>
            <img src={Book} alt="STUDYGOAL"></img>
          </Link>
        </S.swipBtn>
        <S.swipBtn>
          <Link to={"/"}>
            <img src={Clock} alt="STUDYTIME"></img>
          </Link>
        </S.swipBtn>
        <S.swipBtn>
          <Link to={"/"}>
            <img src={FAQ} alt="COMMUNICATION"></img>
          </Link>
        </S.swipBtn>
        <S.swipBtn>
          <Link to={"/"}>
            <img src={User} alt="PROFILE"></img>
          </Link>
        </S.swipBtn>
      </S.footD>
    </div>
  );
};

export default Footer;
