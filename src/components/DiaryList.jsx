import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안 좋은 감정만" },
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
  const [filter, setFilter] = useState("all");

  // 정렬순에 맞춰 데이터 변경해서 반환해주는 함수
  const getProcessedDiaryList = () => {
    // 감정이 123이면 good 감정이 45면 bad 필터 씌어서 해당하는 것만 보여주기
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

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

    // 필터링(감정별 렌더)
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {it.content}
          {it.emotion}
        </div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
