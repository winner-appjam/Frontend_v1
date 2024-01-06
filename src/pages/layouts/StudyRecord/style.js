import styled from "styled-components";

export const Layout = styled.div` 
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 35px;
  flex-direction: column;
`
export const RecordLayout = styled.div`
  width: 366px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`
export const RecordText = styled.h1`
  font-family: Inknut Antiqua;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 100px;
  margin-bottom: 5px;
`
export const RecordBox = styled.div`
  width: 366px;
  height: 83px;
  border-radius: 19px;
  background: #D9D9D9;
`
export const Memo = styled.div`
  width: 392px;
  height: 255px;
  border-radius: 26px;
  background: #D9D9D9;
`
export const MemoTitle = styled.h1`
  margin-top: 15px;
  margin-left: 15px;
  font-family: Inknut Antiqua;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Input = styled.textarea`
  width: 325px;
  height: 148px;
  padding: 15px;
  border-radius: 20px;
  margin-left: 18px;
  margin-top: 15px;
  border: none;
  background: #E6E6E6;
`