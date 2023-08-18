import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

import Header from "./Header";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

// 날짜 형식 변환 yyyy-mm-dd
const getStringDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_desc: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_desc: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_desc: "쏘쏘",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_desc: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_desc: "최악",
  },
];

const DiaryEditor = () => {
  const navigate = useNavigate();
  const contentRef = useRef();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  // 작성완료버튼 눌렀을때 일기 내용 생성
  const handleSubmit = () => {
    // 아무것도 안썼으면 포커스 리턴, 적절히 작성했으면 onCreate 함수 발생시켜서 생성
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate("/", { replace: true }); // 옵션을주면 뒤로가지않고(뒤로 간 홈이아닌) 진짜 홈페이지로 이동
  };

  return (
    <div>
      <Header
        headText={"새로운 일기작성"}
        left={
          <Button
            text={"<뒤로가기"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div>
        {/* 날짜 선택 */}
        <section className="mb-40 ">
          <h4 className="my-10 text-xl font-bold">오늘은 언제인가요?</h4>
          <div>
            <input
              className=" rounded-5 bg-default-color px-3 py-2.5 mt-1 cursor-pointer text-l"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>

        {/* 감정 선택 */}
        <section className="mb-40 ">
          <h4 className="my-10 text-xl font-bold">오늘의 감정</h4>
          <div className="grid grid-cols-5 gap-2.5 ">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion} // 현재 이모션과 선택된 이모션이 같다면 selected: true 가짐
              />
            ))}
          </div>
        </section>

        {/* 일기 작성 칸 */}
        <section className="mb-20">
          <h4 className="my-10 text-xl font-bold">오늘의 일기</h4>
          <div>
            <textarea
              className="border-2 text-ml rounded-5 w-100% min-h-200 bg-default-color p-2.5"
              ref={contentRef}
              value={content}
              placeholder="오늘의 나는..."
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>

        {/* 취소, 작성완료 버튼 */}
        <section className="flex justify-between mb-20">
          <div>
            <Button text={"취소"} onClick={() => navigate(-1)} />
          </div>
          <div>
            <Button
              text={"작성완료"}
              onClick={handleSubmit}
              type={"positive"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
