import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all times");
  useEffect(() => {                   // useEffect --> 반복이 될 문장에서 처음 한 번만 실행되게 하는 함수
    console.log("Call the API.....");    
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
