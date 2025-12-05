import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 페이지 이동 관련
import styled from "styled-components"; // 스타일드 컴포넌트로 CSS 스타일링

const Container = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  flex-direction: column;
  background-color: antiquewhite;
`;

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const nav = useNavigate(); // 페이지 이동을 위해 nav 객체 생성, 특정 시점에 페이지 이동

  const savedEmail = localStorage.getItem("email");
  const savedPw = localStorage.getItem("pw");

  const onClickLogin = () => {
    if (inputEmail === savedEmail && inputPw === savedPw) {
      nav("/home");
    } else {
      alert("이메일과 패스워드가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <input
        type="text"
        value={inputEmail}
        placeholder="이메일"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={inputPw}
        placeholder="비밀번호"
        onChange={(e) => setInputPw(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={onClickLogin}>로그인</button>
      <br />
      <Link to="/signUp">회원가입</Link>
    </Container>
  );
};
export default Login;
