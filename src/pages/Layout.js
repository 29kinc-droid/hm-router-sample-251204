import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 600px;
  height: 100vh;
  flex-direction: column;
  background-color: white;
`;

const Header = styled.header`
  background-color: lightgray;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: bisque;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/home">
            <button>홈으로</button>
          </Link>
          여기는 헤더 영역 입니다
          <Link to="/login">
            <button>로그아웃</button>
          </Link>
        </Header>
        <Main>
          <Outlet />
        </Main>
        <Footer>여기는 푸터 영역 입니다</Footer>
      </Container>
    </>
  );
};

export default Layout;
