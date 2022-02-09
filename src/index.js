import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// public에 images폴더를 안 넣고 src에 있을 경우
// import logo for '../src/images/logo.png';
// 하단 <App/>에 불러주고
// 이렇게 불러서 쓰는건 어쩌다 한번이지 모든 이미지를 이렇게 부를 순 없다.


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
