import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const mode = searchParams.get("mode");

  return (
    <div>
      <h2>이곳은 일기 수정 페이지~</h2>
      <button onClick={() => setSearchParams({ who: "winter" })}>QS</button>
      <button onClick={() => navigate("/home")}>Home으로 바로가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};
export default Edit;
