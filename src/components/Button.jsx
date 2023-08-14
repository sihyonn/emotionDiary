const Button = ({ text, type, onClick }) => {
  // 버튼 타입별 스타일 적용
  const buttonClassName = `py-2.5 px-5 rounded-md text-18 whitespace-nowrap ${
    type === "positive"
      ? "btn-positive-color"
      : type === "negative"
      ? "btn-negative-color"
      : "btn-default-color"
  }`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;
