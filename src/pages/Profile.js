import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트 개발자",
  },
  backend: {
    name: "발빛사냥꾼",
    description: "스프링부트 개발자",
  },
  dba: {
    name: "드루이드상디",
    description: "database 개발자",
  },
};

const Profile = () => {
  const { username } = useParams();
  // const profile = data[username];
  const profile = { name: username, description: "안녕하세요" };
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};

export default Profile;
