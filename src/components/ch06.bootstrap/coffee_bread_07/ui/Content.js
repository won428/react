import { Dropdown, ListGroup, Form  } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function App({ Contents, onClickToContent, categories, onOrderbyClick, orderInfo, onChangeCategory }) {

    /* 테이블 특정 행(row)의 셀(cell) 1개를 클릭 */
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당함. */
        const itemId = event.target.parentNode.id; // 상품 아이디
        console.log(`선택된 상품 id : ${itemId}`);
        onClickToContent(itemId); // 상위 컴포넌트에 해당 id를 넘겨줍니다.

    }

    const ProductList = () => {
        return (
            <tbody>
                {Contents.map((item, index) => {
                    const match = categories.find((cate) => cate.EngName === item.category);
                    return (
                        <tr id={item.id} key={index}>
                            <td align='center' onClick={ClickItem}>{item.name}</td>
                            {/* props로 넘어가면서 문자열이 됨. -> 숫자형식으로 바꿔서 3자리마다 콤마 추가하기 */}
                            <td align='right' onClick={ClickItem}>{Number(item.price).toLocaleString()}원</td>
                            {/* match가 의미 있는 데이터면 한글이름을, 아니면 원래 값을 표시 */}
                            <td align='center' onClick={ClickItem}>
                                {match ? match.KorName : item.category}
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        );
    };


    /* 사용자가 드롭 다운 버튼을 클릭했습니다. 상위 컴포넌트에게 정렬 방식을 알려주는 함수 입니다. */
    const ClickButtonGroup = (event) => {
        event.preventDefault(); // 이벤트 전파 동작 방지
        const targetId = event.target.id; 
        // orderColumnList : 정렬할 칼럼 정보와 관련 있는 배열
        const orderColumnList = ['name','price','category'];
        // 클릭한 항목의 id가 orderColumnList 배열에 포함이 되어있으면 true를 반환해줍니다.
        const isColumn = orderColumnList.includes(targetId);
        // 넘어온 onOrderByClick 프롭스에 '정렬할 컬럼', '정렬 방식'을 각각 전송해 줍니다.
        if(isColumn === true){// '정렬할 컬럼' 선택
            onOrderbyClick(targetId, orderInfo.ordering)
            
        }else{// '정렬 방식 선택'
            onOrderbyClick(orderInfo.column, targetId)
        }
        
    }

    //  여러 곳에서 사용되는 문구는 상수(constant) 형태로 재활용하여 사용하면 편리합니다.
    const OrderCoulmn = '정렬할 컬럼'
    const OrderType = '정렬 방식';


    /* 필드 검색 */
    /* 넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 벅스에 들어갈 목록들을 생성합니다. */
    const comboCategory = categories.map((bean, index)=>
        <option key = {index} value={bean.EngName}>{bean.KorName}</option>
    );
    
    /* 사용자가 콤보 박스의 특정 카테고리 항목을 change하였습니다. */
    const ChangedComboItem = (event) =>{
        const selectedCategory = event.target.value;
        // 체인지와 관련된 프롭스에게 해당 카테고리 정보(영문 이름)를 넘겨 줍니다.
        onChangeCategory(selectedCategory);
    };
    
    return (
        <>
        <Table>
            <tbody>
                <tr>
                    {/* 버튼이 붙어있는 효과를 주기 위해 width를 10%로 설정함 */}
                    <td width = "10%" valign="middle">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {OrderCoulmn}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item id = "name" onClick={ClickButtonGroup}>이름</Dropdown.Item>
                                <Dropdown.Item id = "price" onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                <Dropdown.Item id = "category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td valign="middle">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {OrderType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item id = "asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                <Dropdown.Item id = "desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td valign="middle">
                        <ListGroup horizontal>
                            <ListGroup.Item>{OrderCoulmn} : {orderInfo.column}</ListGroup.Item>
                            <ListGroup.Item>{OrderType} : {orderInfo.ordering}</ListGroup.Item>
                        </ListGroup>
                    </td>
                </tr>
            </tbody>
        </Table>
        <div>
            <Form.Select name = "category" onChange={ChangedComboItem}>
                <option value="all">전체보기</option>
                {comboCategory} {/* 동적으로 생성된 콤보아이템들 */}
            </Form.Select>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            {/* 화살표 함수를 사용하여 상품 목록을 만들어줍니다. */}
            {ProductList()}
        </Table>
    </>
    );
};
export default App;