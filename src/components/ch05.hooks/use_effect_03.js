import { useEffect, useState } from "react";

function App(){
    // 해당 사이트에서 다운 받은 정보를 저장할 비어 있는 배열
    const [receivedData, setRecivedData] = useState([]);
    
    const GetUrlData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response)=>response.json()) /* JSON을 자바 스크립트 객체로 변환 */
            .then((data)=>{
                //console.log(data);
                setRecivedData(data);
            });
    };

    // 2번째 매개변수가 [] 이므로, GetUrlData 함수는 1번만 호출됩니다.
    useEffect(GetUrlData, []);


    const DataList =() =>{
        // slice 메소드는 배열 요소의 일부분을 슬라이싱 합니다.
        // 밑의 예시는 0이상 10미만의 요소를 의미합니다.
        const sliceArray = receivedData.slice(0,10);        

        const ShowData = sliceArray.map((item) =>
            <li key = {item.id}>
                {item.title}(<a href={item.url}>{item.url}</a>)
            </li>  
        );
        

        return <ol>{ShowData}</ol>
    }
    
    return(
        <div className = "App">
            <DataList />
        </div>
    );
}
export default App;