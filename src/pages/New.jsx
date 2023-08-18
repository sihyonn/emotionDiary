import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

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
    </div>
  );
};
export default New;
