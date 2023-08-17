import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

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
    </div>
  );
};
export default Home;
