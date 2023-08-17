import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  // 더미데이터 가져오기
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 년, 월의 첫날과 마지막날 사이에 해당하는 일기리스트 데이터 보여줘야하니까
  // useEffect 사용해서 다이어리리스트가 수정, 삭제된다거나 년월이 바뀌면 데이터 해당되는것만 보여주게 리렌더
  useEffect(() => {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1, //다음달
      0
    ).getTime();

    setData(
      diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 년, 월 증가 감소 함수
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <Header
        headText={headText}
        left={<Button text={"<"} onClick={decreaseMonth} />}
        right={<Button text={">"} onClick={increaseMonth} />}
      />

      {/* <div>
        <select>
          <option value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>
        <select>
          <option value="all">전부다</option>
          <option value="happy">좋은 감정만</option>
          <option value="unhappy">안좋은 감정만</option>
        </select>
        <Button
          text={"새 일기작성"}
          type={"positive"}
          onClick={() => {
            alert("일기 작성시작");
          }}
        />
      </div> */}

      {/* 일기리스트자리 */}
      <DiaryList diaryList={data} />
    </div>
  );
};
export default Home;
