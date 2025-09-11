function App(){
   
   
    function handleItemClick(e) {
    alert(e.target.innerText); // 클릭된 <li>의 텍스트를 alert로 표시
  }
    
    const brlist = (
        `<ul>
            <li>바게트</li>
            <li>치아바타</li>
            <li>크로아상</li>
            <li>소금빵</li>
        </ul>`
    );

    const coflist = (
        `<ol>
            <li>아메리카노</li>
            <li>카페라떼</li>
            <li>콜드브루</li>
            <li>카페모카</li>
        </ol>`
    );
    
    
    



    
    
    const ChangeList= (event) => {
        const target_id = event.target.id;
        const target_value = event.target.value;
        if(target_id === 'menu'){
            if(target_value === '-'){
                alert('목록을 선택해주세요.');
        }else if(target_value === 'breads'){
            document.getElementById("test").innerHTML = brlist;
        }else if(target_value === 'coffees'){
            document.getElementById("test").innerHTML = coflist;
        }
      }
    }
      
    
    return(
        <div className = "App">
            <select id = "menu" onChange={ChangeList}>
                <option value = "-">목록</option>
                <option value = "breads" >빵 리스트</option>
                <option value = "coffees">커피 리스트</option>
            </select>
            <div id = "test">
                
            </div>
        </div>
    );
}
export default App;