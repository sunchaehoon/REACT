import React from "react";
import "./App.css";

{/* Prettier 사용법 --> F1을 누르고 format 입력, Enter 누르기 = 자동 들여쓰기*/}

function App() {
  const name = "리액트";
  return (
    <div>
      <div className="react">{name}</div>   
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>이재명</p>
      <p>윤석열</p>
    </div>
  );
}

export default App;
