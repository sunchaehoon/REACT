import React from "react";
// import "./App.css";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      리액트
    </MyComponent>   // 컴포넌트 태그 사이의 내용을 보여 주는 children
  );
};

export default App;
