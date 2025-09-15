import { Button, InputGroup, Form } from "react-bootstrap";
import './../css/FormStyle.css';

function App({ onSubmitCategoryAdd }) {
    const comment = '추가';

    const SubmitCategory = (event) => {
        event.preventDefault();
        const formData = event.target;
        onSubmitCategoryAdd(formData);
    }


    return (
        <div >
            <h2>카테고리 {comment}</h2>
            <form action="#" onSubmit={SubmitCategory}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">영문 이름</InputGroup.Text>
                    <Form.Control type="text" name="EngName"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">한글 이름</InputGroup.Text>
                    <Form.Control type="text" name="KorName"></Form.Control>
                </InputGroup>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        <Button type="submit">카테고리 {comment}</Button>
                    </Button>
                </div>

            </form>
        </div>
    );
};
export default App;