import { Button, InputGroup, Form } from "react-bootstrap";
import './../css/FormStyle.css';

function App({ onSubmitInsert, categories }) {

    /* 개발자가 전송버튼을 눌러서, 전송 이벤트에 의해 이 함수가 동작함. */
    const SubmittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지 = submit으로 특정페이지로 이동할게 아니라 데이터 전송용이기 때문에 preventDefault()로 전파방지
        const formData = event.target;
        onSubmitInsert(formData);
    }

    /* categories 배열을 이용해 동적 콤보박스 만들기 */
    const categoryOptions = categories.map((cate, index) =>
        /* cate는 카테고리 1개를 의미하는 변수 */
        /* 파일 CreateCategory.js를 참조하여 코딩 */
        <option key={index} value={cate.EngName}>{cate.KorName}</option>
    );

    return (
        <div>
            <h2>카테고리 추가</h2>
            <form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    {/* 양식의 카테고리 콤보 상자는 동적으로 생성되어야 함. */}
                    <Form.Select name="category">
                        <option value="-">--카테고리를 선택해주세요</option>
                        {categoryOptions}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">상세설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        <Button type="submit">등록</Button>
                    </Button>
                </div>

            </form>
        </div>
    );
};
export default App;