import Display from './Display'
import CreateContent from './CreateContent'

// 프로그램 모드에 따라서 화면을 분기해주는 스위치 앱
function App({mode, product, onSubmitInsert}){
    

    const onSwitchInsert = (formData) =>{
        console.log('등록버튼 부름(Switcher)');
        onSubmitInsert(formData); // 넘어온 폼 정보를 main파일로 넘김
    }
    
    switch(mode){
        case 'detail': // 특정 상품 상세보기
            return <Display product = {product}/>;
        case 'get_insert': // 상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />
        case 'read': // 읽기 모드
            return <div />
        case 'get_update':
            return <Display product = {product}/>;
        case 'get_delete':
            return <Display product = {product}/>;
        case 'get_category_add':
            return <Display product = {product}/>;
        default:
            return null;
        
    };

   
}
export default App;