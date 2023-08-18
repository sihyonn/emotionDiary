import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

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

const New = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));

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
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default New;
