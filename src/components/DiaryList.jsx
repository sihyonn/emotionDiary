import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  // 정렬기준 상태 관리
  const [sortType, setSortType] = useState("latest");

  // 정렬순에 맞춰 데이터 변경해서 반환해주는 함수
  const getProcessedDiaryList = () => {
    // 배열에 담긴 객체들은 그냥정렬하면 정렬 안됨 => 비교함수 만들기
    const compare = (a, b) => {
      if (sortType === "latest") {
        //객체에 저장된 이 date는 문자열이 들어올 수도 있으니 parseInt(문자열 => 숫자로)해주기
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    // 배열 -> 문자열 -> 배열 값만 원래가진거 건들이지 않기위해 이렇게
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
