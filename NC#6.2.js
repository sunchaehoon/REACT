import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all times");
  useEffect(() => {                   // useEffect --> 반복이 될 문장에서 처음 한 번만 실행되게 하는 함수
    console.log("It runs only once");    
  }, []);
  useEffect(() => {
      console.log("It runs when 'keyword' changes");
  }, [keyword]);    // [keyword] --> keyword가 변화할 때 코드 실행
  useEffect(() => {
    console.log("It runs when 'counter' changes");
}, [counter]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
