import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Header = styled.header`
  width: 100%;
  height: 84px;
  background: #E9E9E9;
  margin-top: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Inknut Antiqua;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const ContentLayout = styled.div`
  height: calc(100vh - 50px); /* Adjust the height according to your header height */
  overflow-y: auto;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  padding-top: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 25px;
`
export const BoxLayout = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`
export const Name = styled.h2`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
export const Time = styled.h2`
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`