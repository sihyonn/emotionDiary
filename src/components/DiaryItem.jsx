import { useNavigate } from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";

const DiaryItem = ({ id, emotion, content, date }) => {
  // emotion 값에 따라 배경색 클래스 이름 결정
  const bgClass = clsx({
    "bg-emotion1": emotion === 1,
    "bg-emotion2": emotion === 2,
    "bg-emotion3": emotion === 3,
    "bg-emotion4": emotion === 4,
    "bg-emotion5": emotion === 5,
  });

  // 년,월,일로 바꿔주기
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();

  // 상세 페이지로 넘어가게하는 함수
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className="py-3 border-b border-default-color flex justify-between">
      <div
        className={`cursor-pointer min-w-120 h-80 rounded-5 flex justify-center ${bgClass}`}
        onClick={goDetail}
      >
        <img
          className=" w-1/2"
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt=""
        />
      </div>

      <div className=" cursor-pointer flex-grow ml-4 " onClick={goDetail}>
        <div className=" font-bold text-xl mb-1">{strDate}</div>
        <div className=" text-l min-w-70 ">{content}</div>
      </div>

      <div>
        <Button
          text={"수정하기"}
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
