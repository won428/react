import { useState } from "react";

function App(){
    const imageSize = 120; // 이미지 사이즈

    /* 관리해야할 상태(state) 정의 */
    const [model, setModel] = useState('아반떼(avante)');
    const [color, setColor] = useState('yellow');
    const [year, setyear] = useState(2024);
    const [image, setImage] = useState('avante');
    const [comment, setComment] = useState('구형 차입니다.');
    const [modelName, setModelName] = useState('아반떼(avante)');
    
    // 중첩 배열을 사용한 Map객체 정의
    const carMap = new Map([
        ['avante','아반떼'],
        ['sonata','소나타'],
        ['grandeur','그랜져'],
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        console.log('이벤트 발생 객체 id : ' + targetId);

        const targetValue = event.target.value;
        console.log('이벤트 타겟 값 : ' + targetValue);

        if(targetId === 'model'){
            // get()key : key를 사용하여 해당요소의 value를 반환받습니다.
            setModelName(`${carMap.get(targetValue)}(${targetValue})`);
            setModel(targetValue);
            setImage(targetValue);
        }else if(targetId === 'color'){
            setColor(targetValue);
        }else if(targetId === 'year'){
            setyear(targetValue);
            if(targetValue === '2023'){
                setComment('구형 차입니다.');
            }else if(targetValue === '2025'){
                setComment('신형 차입니다.');
            }else{
                setComment('나름 좋아요');
            }
        }else{

        }
   }

    return(
        <div className = "App">
            <h1>내 차 정보</h1>
            <p>
                자동차의 종류에 따라서, 이미지 변경이 되고 색상은 설명 문구의 색성으로 변경이 됩니다.
            </p>
        {/* entity는 html에서 특수 문자를 표현하는 기법으로, 규칙을 정해 놓은 문자열이 있습니다. */}
        차종 변경 : &nbsp;
        <select id = "model" value = {model} onChange = {ChangeTest}>
            <option value="avante">아반떼</option>
            <option value="sonata">소나타</option>
            <option value="grandeur">그랜져</option>
        </select>
        <br /><br />

        색상 변경 : &nbsp;
        <select id = "color" value = {color} onChange = {ChangeTest}>
            <option value="yellow">노랑</option>
            <option value="blue">파랑</option>
            <option value="red">빨강</option>
            <option value="green">초록</option>
        </select>
        <br /><br />

        생산년도 변경 : &nbsp;
        <select id = "year"  value = {year} onChange = {ChangeTest}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>
        <br /><br />

        <p>
            <span style={{color : color, fontWeight : 'bolder'}}>{color}</span>색상의 {year}년산 {modelName}모델
            <br />
            한줄평 : {comment}
            
        </p>
        
        <br /><br />
        <img src = {`/images/${image}.png`} alt = {image} width={imageSize} height={imageSize} />

        </div>
    );
}
export default App;