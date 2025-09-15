import { Button, InputGroup, Form } from "react-bootstrap";
import './../css/FormStyle.css';
import { useState } from "react";

/* 등록 화면과의 차이점
1. 코멘트 변경 : 등록 -> 수정
2. 수정할 상품 정보가 props로 넘어와야함
3. 값 입력 전에 수정 양식에 이전에 기입했던 정보가 들어가있어야함. 
    일반양식은 value 속성에 명시하면 됨.
    콤보박스는 selected 속성에 명시하면 됨.
    라디오 버튼이나 체크박스는 checked 속성에 명시하면 됨.
4. id 항목은 사용자게에 보여주되, 읽기 전용으로 처리하면 됨.
*/

function App({ product, onSubmitUpdate, categories }) {

    /* 개발자가 전송버튼을 눌러서, 전송 이벤트에 의해 이 함수가 동작함. */
    const comment = '수정'; // 코드에서 반복적으로 사용되는 단어는 변수로 만들어서 JSX 문법으로 처리

    // 넘겨진 이전 상품 정보를 관리해야 하므로, state를 값으로 할당
    const [forUpdateData, setforUpdateData] = useState(product);

    const SubmittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지 = submit으로 특정페이지로 이동할게 아니라 데이터 전송용이기 때문에 preventDefault()로 전파방지
        onSubmitUpdate(forUpdateData);
        console.log(forUpdateData);
    }

    // 이 함수(이벤트 핸들러)는 입력 양식이 변경될때마다 호출이 됨.
    const InputChange = (event) => {
        const { name, value } = event.target;
        console.log(`파라미터 이름 : ${name}, 새로운 값 : ${value}`);

        /* 전개 연산자를 사용하여 과거 데이터를 보존하되, 신규 바뀐 정보만 다시 갱신하기
        previous 변수는 리액트가 자동으로 넣어주는 값으로, 이름은 개발자 마음대로 지정함. */
        setforUpdateData((previous) => ({ ...previous, [name]: value }));
    }

    const updateCategories = categories.map((cate, index) =>
        <option key={index} value={cate.EngName}>{cate.KorName}</option>
    )

    return (
        <div>
            <h2>상품{comment}</h2>
            <form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">아이디</InputGroup.Text>

                    <input name="id" type="hidden" onChange={InputChange} value={forUpdateData.id} />

                    <Form.Control type="text" name="fakeid" onChange={InputChange} value={forUpdateData.id} disabled></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={forUpdateData.name}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price" onChange={InputChange} value={forUpdateData.price}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category" onChange={InputChange} value={forUpdateData.category}>
                        <option value="-">--카테고리를 선택해주세요</option>
                        {updateCategories}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock" onChange={InputChange} value={forUpdateData.stock}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={forUpdateData.image}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">상세설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" onChange={InputChange} value={forUpdateData.description}></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        <Button type="submit">{comment}</Button>
                    </Button>
                </div>

            </form>
        </div>
    );
};
export default App;