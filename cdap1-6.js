import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '엉터리 생고기', '수완 하이마트']);
  let posts = '강남 고기 맛집';
  let [like, chgLike] = useState(0);

  function chgGender() {
    let fmArr = [...글제목];      // deep copy --> 값 공유 X, 서로 독립적인 값을 가지는 복사
    fmArr[0] = '여자코트 추천';
    글제목변경(fmArr);
  }

  function sortElement() {
    let newArr = [...글제목];
    let temp = newArr[1];
    newArr[1] = newArr[2];
    newArr[2] = temp;
    글제목변경(newArr);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={sortElement}>글자순정렬</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={ () => { chgLike(like + 1) } }>👍</span> {like} </h3>
        <button onClick={chgGender}>성별 전환</button>
        <p>2월 17일 오픈</p>    
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>3월 17일 개업 5주년</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>4월 17일 특가 세일</p>
        <hr/>
      </div>
      <Modal />
    </div>
  );
}

function Modal(){
  return (
    <>
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
