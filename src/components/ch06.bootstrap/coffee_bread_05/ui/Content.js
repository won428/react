import Table from 'react-bootstrap/Table';

function App({ Contents, onClickToContent, categories }) {

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




    return (
        <>
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