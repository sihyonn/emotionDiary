import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleEl = document.getElementsByTagName("title")[0];
    // title안에 들어가는 글자를 innerHTML로
    titleEl.innerHTML = `새로운 일기작성`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};
export default New;
