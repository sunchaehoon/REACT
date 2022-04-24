import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// HashRouter --> BrowserRouter + /#/ (라우팅 안전하게 할 수 있게 도와줌)
// 사이트 주소 뒤에 #이 붙는데 #뒤에 적는 것은 서버로 전달 X
