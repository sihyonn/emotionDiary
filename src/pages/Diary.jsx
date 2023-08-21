import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import clsx from "clsx";

import Header from "../components/Header";
import Button from "../components/Button";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotionList";

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
    // 데이터가 없을때
    return <div>로딩중입니다...</div>;
  } else {
    // 데이터가 있을때
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    const emotionClass = clsx({
      "bg-emotion1": curEmotionData.emotion_id === 1,
      "bg-emotion2": curEmotionData.emotion_id === 2,
      "bg-emotion3": curEmotionData.emotion_id === 3,
      "bg-emotion4": curEmotionData.emotion_id === 4,
      "bg-emotion5": curEmotionData.emotion_id === 5,
    });

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

        {/* 여기서부터 콘텐츠라고 알려주는 시맨틱태그 article */}
        <article>
          <section className="w-100% mb-80 flex flex-col items-center text-center">
            <h4 className="my-20 font-bold text-ml">오늘의 감정</h4>
            <div
              className={`${emotionClass} text-white flex flex-col items-center justify-around bg-default-color w-250 h-250 rounded-5`}
            >
              <img
                src={curEmotionData.emotion_img}
                alt={`${curEmotionData.emotion_desc} 이미지`}
              />
              <div className="text-xl">{curEmotionData.emotion_desc}</div>
            </div>
          </section>

          <section className="w-100% mb-100 flex flex-col items-center text-center">
            <h4 className="my-20 font-bold text-ml w-100%">오늘의 일기</h4>
            <div className="w-100% p-5 bg-default-color text-left rounded-5 whitespace-keep-all whitespace-normal overflow-wrap-break-word">
              <p className="font-normal leading-6 text-m font-YeonSung">
                {data.content}
              </p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};
export default Diary;
