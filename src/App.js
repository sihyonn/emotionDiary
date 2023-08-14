import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import Button from "./components/Button";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-3xl font-bold underline">리액트 </h1>
        <Button
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <Button
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"negative"}
        />

        <Button text={"버튼"} onClick={() => alert("버튼클릭")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
