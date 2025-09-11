import Display from './Display'

// 프로그램 모드에 따라서 화면을 분기해주는 스위치 앱
function App({mode, product}){
    console.log(`현재 모드 : ${mode}`);
    
    switch(mode){
        case 'detail':
            return <Display product = {product}/>;
        default:
            return null;
        
    };

   
}
export default App;