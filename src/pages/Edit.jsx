import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleEl = document.getElementsByTagName("title")[0];
    // title안에 들어가는 글자를 innerHTML로
    titleEl.innerHTML = `감정 일기장 - ${id}번 일기편집`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      // parseInt 혹시 모를 버그대비
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("일기가 존재하지 않습니다!🥲");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};
export default Edit;
