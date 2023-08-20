import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";

import { getStringDate } from "../util/date.js";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  // id일치하는 데이터 가져와 상태 저장하기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        // 일기 존재할때
        setData(targetDiary);
      } else {
        // 일기 없을때
        alert("일기가 존재하지 않습니다!🥲");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div>로딩중입니다...</div>;
  } else {
    return (
      <div>
        <Header
          headText={`${getStringDate(new Date(data.date))}의 기록`}
          left={
            <Button
              text="<뒤로가기"
              onClick={() => {
                navigate(-1);
              }}
            />
          }
          right={
            <Button
              text={"수정하기"}
              onClick={() => {
                navigate(`/edit/${data.id}`);
              }}
            />
          }
        />
      </div>
    );
  }
};
export default Diary;
