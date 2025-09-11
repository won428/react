import { use, useEffect, useState } from "react";

function App(){
    const imageSize = 300;
    const imagePath = '/images/';
    
    const [count, setCount] = useState(0);
    const [twoTimes, setTwoTimes] = useState(0);
    const [another, setAnother] = useState(0);
    const [image, setImage] = useState(`${imagePath}/americano01.png`);
    const [imageIdx, setImageidx] = useState(0); // 현재 선택된 이미지의 색인 번호

    const imageArray =[
        'brioche_01.png',
        'cappuccino03.png',
        'ciabatta_06.png',
        'croissant_04.png'
    ];
    
    

    const TodoSomething = () =>{
        console.log('카운트 변수 값 : ' + count);
        setTwoTimes(()=>count*2);
        setAnother(() => count*3+1);

        console.log('현재 이미지의 색인 번호 : ' + imageIdx);
        
        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage);
        setImageidx(imageIdx + 1);
        
        if(imageIdx === imageArray.length - 1){
            setImageidx(0);
        }
    }

    // 최초 1번 화면 갱신(rendering)이 되고 나서, count가 바뀔 때 마다 다시 그리기(rendering)를 해줍니다.
    useEffect(TodoSomething,[count]);
    
    
    return(
        <div className = "App">
            <table style={{border: '1px solid black'}}>
                <tbody>
                    <tr>
                        <td style={{border: '1px solid black'}}>카운터</td>
                        <td style={{border: '1px solid black'}}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black'}}>곱하기</td>
                        <td style={{border: '1px solid black'}}>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td style={{border: '1px solid black'}}>3곱하기 더하기 1</td>
                        <td style={{border: '1px solid black'}}>{another}</td>
                    </tr>
                </tbody>
            </table> 
            <hr />
            {/* 화살표 함수를 직접 속성창에 작성할 수 있습니다. */}
            <button onClick={() => {setCount(() => count+1 )}}>
                &nbsp;카운트 값 1더하기&nbsp;
            </button>
            <div>
                    <img src={image} alt="대안 이미지" width={imageSize} height={imageSize} />
                </div>
            
        </div>
    );
}
export default App; 