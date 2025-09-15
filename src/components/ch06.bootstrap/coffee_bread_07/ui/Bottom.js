import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App({ message, onClickToBottom }) {
    const ClickMenu = (event) => {

        /* id 속성에 mode 값을 작성 */
        const targetId = event.target.id;
        onClickToBottom(targetId);
        console.log(`현재 모드 : ${targetId}`);
    }


    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button id="get_insert" variant="secondary" onClick={ClickMenu}>생성</Button>
                <Button id="get_update" variant="secondary" onClick={ClickMenu}>수정</Button>
                <Button id="get_delete" variant="secondary" onClick={ClickMenu}>삭제</Button>
                <Button id="get_category_add" variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>
            </ButtonGroup>
            <br />
            {message}
        </>
    );
};
export default App;