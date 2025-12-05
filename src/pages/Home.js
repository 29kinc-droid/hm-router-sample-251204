import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>여기는 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지입니다.</p>
      <Link to="/about">about으로 이동</Link>
      <Link to={"/profile/" + localStorage.getItem("name")}>
        profile으로 이동
      </Link>
      <Link to="/article">article으로 이동</Link>
    </>
  );
};

export default Home;
