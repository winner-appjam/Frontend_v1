import styled from "styled-components";


export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  position: absolute;
  top: 14%;
  color: #000;
  text-align: center;
  font-family: Inknut Antiqua;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const FormLayout = styled.div`
  position: absolute;
  top: 27%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
export const Input = styled.input`
  width: 366px;
  height: 49px;
  border-radius: 10px;
  border: 1px solid #000;
  background: rgba(217, 217, 217, 0.00);
  font-size: 17px;
  padding-left: 15px;
    &::placeholder {
      font-family: Inknut Antiqua;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
`
export const Submit = styled.button`
  border: none;
  position: absolute;
  bottom: 20%;
  width: 220px;
  height: 90px;
  border-radius: 20px;
  background: #D9D9D9;
  text-align: center;
  font-family: Inknut Antiqua;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
    &:active {
      background-color: #BDBDBD;
    }
`