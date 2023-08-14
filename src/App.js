import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          headText={"App"}
          left={<Button text={"왼쪽버튼"} onClick={() => alert("왼쪽눌림")} />}
          right={
            <Button text={"오른쪽버튼"} onClick={() => alert("오른쪽눌림")} />
          }
        />

        <h1 className="text-3xl font-bold">App.js</h1>
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
