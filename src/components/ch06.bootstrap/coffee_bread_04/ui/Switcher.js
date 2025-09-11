import Display from './Display'
import CreateContent from './CreateContent'
import UpdateContent from './UpdateContent'

// 프로그램 모드에 따라서 화면을 분기해주는 스위치 앱
function App({mode, product, onSubmitInsert, onSubmitUpdate}){
    

    const onSwitchInsert = (formData) =>{
        console.log('등록버튼 부름(Switcher)');
        onSubmitInsert(formData); // 넘어온 폼 정보를 main파일로 넘김
    }

    const onSwitchUpdate = (formData) =>{
        console.log('수정버튼 부름(Switcher)');
        onSubmitUpdate(formData); // 수정된 폼 정보를 main파일로 넘김
    }
    
    switch(mode){
        case 'detail': // 특정 상품 상세보기
            return <Display product = {product}/>;
        case 'get_insert': // 상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />
        case 'get_update': // 상품 수정 화면으로 이동
            /* product는 이전에 사용자가 입력했던 데이터로서, 수정하고자 하는 항목입니다. */
            return <UpdateContent product={product} onSubmitUpdate ={onSwitchUpdate} />
        case 'read': // 읽기 모드
            return <div />
        
        default:
            return null;
        
    };

   
}
export default App;