import { clsx } from "clsx";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_desc,
  onClick,
  isSelected,
}) => {
  const isSelectedClass = clsx({
    "bg-emotion1": isSelected && emotion_id === 1,
    "bg-emotion2": isSelected && emotion_id === 2,
    "bg-emotion3": isSelected && emotion_id === 3,
    "bg-emotion4": isSelected && emotion_id === 4,
    "bg-emotion5": isSelected && emotion_id === 5,
    "text-white transition duration-300 ease-in-out": isSelected,
    "bg-default-color": !isSelected,
  });

  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={`${isSelectedClass} flex flex-col items-center justify-center py-5 cursor-pointer rounded-5`}
    >
      <img className="w-50% mb-10" src={emotion_img} alt="감정이미지" />
      <span className="text-l">{emotion_desc}</span>
    </div>
  );
};

// 일반적인 css로 했다면 className 동적으로 변하는 부분은
/*
className={[
  "EmotionItem",
  isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`
].join(" ")
}
이렇게 해서 각각 EmotionItme_on_1은 뭐 2는 뭐 스타일링 해줘야하는거임!
*/

export default EmotionItem;
