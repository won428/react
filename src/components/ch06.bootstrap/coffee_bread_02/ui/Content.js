import Table from 'react-bootstrap/Table';


function App({ Contents, onClickToContent }) {

    /* 테이블 특정 행의 셀 1개를 클릭했습니다. */
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당합니다. */
        const itemId = event.target.parentNode.id; // 상품 아이디
        console.log(`선택된 상품 id : ${itemId}`);

        onClickToContent(itemId);
    };
    
    const ProductList = () => {
        return (
            <tbody>
                {Contents.map((item, index) => (
                    <tr id = {item.id} key={index}>
                        <td align="center" onClick={ClickItem}>{item.name}</td>
                        {/* props로 넘어가면서 문자열이 됨. -> 숫자형식으로 바꿔서 3자리마다 콤마 추가하기 */}
                        <td align="center" onClick={ClickItem}>{Number(item.price).toLocaleString()}원</td>
                        <td align="center"onClick={ClickItem}>{item.category === 'bread' ? '빵' : '커피'}</td>
                    </tr>
                ))}
            </tbody>
        );
    };




    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th align="center">이름</th>
                        <th align="center">가격</th>
                        <th align="center">카테고리</th>
                    </tr>
                </thead>
                {/* 화살표 함수를 사용하여 상품 목록을 만들어줍니다. */}
                {ProductList()}
            </Table>
        </>
    );
};
export default App;