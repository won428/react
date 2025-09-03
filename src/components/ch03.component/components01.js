// react 라이브러리에서 Component 항목을 사용하겠습니다.
import { Component } from "react";

// <div> 태그는 요소들을 담기 위한 컨테이너 박스 역할을 합니다.
// <img> 태그는 그림을 담기 위한 태그입니다.
// 태그 안에 설명하기 위하여 작성한 xxx="yyy"를 속성(atrribute)이라고 부릅니다.
// public 경로가 웹 페이지의 최상위 경로가 됩니다.
class App extends Component{
    // render : 클라이언트가 데이터를 입력 받아서 화면에 그려 주는 동작을 렌더링이라고 합니다.
    render(){
        console.log('클래스형 컴포넌트');
        return(
            <div className ='App'>
                <div>클래스 방식(초간단 JSX 실습)</div>
                <img src = "http://localhost:3000/americano01_bigsize.png"
                        width= "300" height= "300"/>
                <div>반갑습니다.</div>
            </div>
        );
    } 
}
// export 키워드는 앱을 외부에서 참조 가능하도록 해주는 문장입니다
// 주의 사항 : 반드시 컴포넌트 이름과 일치해야 합니다.
export default App;