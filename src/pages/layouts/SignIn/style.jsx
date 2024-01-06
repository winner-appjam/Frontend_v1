import styled from "styled-components";

export const title = styled.h1`
  position: absolute;
  top: 10rem;
  left: 9.5rem;
  color: #000;
  font-family: Inknut Antiqua;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const userImg = styled.img`
  width: 8.375rem;
  height: 8.375rem;
  position: relative;
  top: 20rem;
  left: 9.25rem;
  border-radius: 2.375rem;
  background: #f4f4f4;
`;

export const form = styled.form`
  width: 20rem;
  position: relative;
  top: 22rem;
  left: 3.5rem;
`;

export const userInput = styled.input`
  ::placeholder {
    color: #bbb;
    font-family: Inknut Antiqua;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  width: 19rem;
  height: 3.75rem;
  padding-left: 1rem;
  margin: 1.3rem 0;

  border-radius: 0.75rem;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0);
  color: #bbb;

  text-align: left;
  font-family: Inknut Antiqua;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const login = styled.button`
  :hover {
    cursor: pointer;
  }
  width: 10.625rem;
  height: 3.75rem;
  align-items: center;
  position: relative;
  top: 1rem;
  left: 4.5rem;
  flex-shrink: 0;
  border: 0;
  border-radius: 2.8125rem;
  background: #0094ff;
  color: #fff;
  text-align: center;
  font-family: Inknut Antiqua;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const signUp = styled.p`
  display: inline-block;
  position: relative;
  top: 27rem;
  left: 11.4rem;
  color: #06f;
  text-align: center;
  font-family: Inknut Antiqua;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
