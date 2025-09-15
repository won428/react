// 프로그램 도므에 따라서 화면을 분기해주는 스윕치 앱

import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import CreateCategory from './CreateCategory';


function App({ mode, product, onSubmitInsert, onSubmitUpdate, onSubmitCategoryAdd, categories }) 
{
    console.log(`현재모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(`등록 버튼누름 : (switcher)`);
        onSubmitInsert(formData); // 넘어온 form 정보를 main파일로 넘김
    }

    const onSwitchUpdate = (formData) => {
        console.log(`수정 버튼누름 : (switcher)`);
        onSubmitUpdate(formData); // 수정된 form 정보를 main파일로 넘김
    }

    const onSwitchCategory = (formData) => {
        console.log(`카테고리 추가 버튼누름 : (switcher)`);
        onSubmitCategoryAdd(formData); // 수정된 form 정보를 main파일로 넘김
    }


    switch (mode) {
        case 'detail':
            return <Display product={product} categories={categories} />; // 상품 상세보기
        case 'get_insert':
            return <CreateContent onSubmitInsert={onSwitchInsert} categories={categories} />; // 상품 등록
        case 'get_update': // 상품 업데이트
            /* product는 사용자가 입력했던 데이터로써, 수정하고자 하는 항목 */
            return <UpdateContent product={product} onSubmitUpdate={onSwitchUpdate} categories={categories} />;
        case 'read':
            return <div />;
        case 'get_category_add': // 카테고리 추가
            return <CreateCategory onSubmitCategoryAdd={onSwitchCategory} />;
            
        default:
            return null;

    }


};

export default App;