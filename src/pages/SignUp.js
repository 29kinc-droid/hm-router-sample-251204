import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // 이메일
  const [inputEmail, setinputEmail] = useState("");
  // 패스워드
  const [inputPw, setinputPw] = useState("");
  // 이름
  const [inputName, setinputName] = useState("");
  const nav = useNavigate();

  // 회원가입 버튼
  const onClickSignUp = () => {
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("pw", inputPw);
    localStorage.setItem("name", inputName);
    // 로그인 페이지로 이동
    nav("/");
  };

  return (
    <>
      <label htmlFor="">
        이메일
        <input type="text" onChange={(e) => setinputEmail(e.target.value)} />
      </label>

      <label htmlFor="">
        비밀번호
        <input type="password" onChange={(e) => setinputPw(e.target.value)} />
      </label>

      <label htmlFor="">
        이름
        <input type="text" onChange={(e) => setinputName(e.target.value)} />
      </label>

      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
};

export default SignUp;
