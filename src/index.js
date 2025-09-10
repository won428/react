import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js파일을 의미합니다.
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//리액트 라우터를 사용하기 위해서 BrowserRouter를 App 외부에 감싸주는 역할
// App.js 파일을 index.js 파일이 포함하고 있으므로, BrowserRouter 는 index.js 파일에 한번만 명시해주면 됩니다.
import { BrowserRouter } from 'react-router-dom'; // 추가 (라우터를 위해서)

const root = ReactDOM.createRoot(document.getElementById('root'));
// Strict 모드는 개발 도중 발생할수 있는 문제를 꼼꼼히 감지하기 위하여 rendering을 두 번 실행해 줍니다.

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
