import Table from 'react-bootstrap/Table';


function App({ Contents }) {

    const ProductList = () => {
        return (
            <tbody>
                {Contents.map((item, index) => (
                    <tr id ={item.id} key={index}>
                        <td align="center">{item.name}</td>
                        {/* props로 넘어가면서 문자열이 됨. -> 숫자형식으로 바꿔서 3자리마다 콤마 추가하기 */}
                        <td align="right">{Number(item.price).toLocaleString()}원</td>
                        <td align="left">{item.category === 'bread' ? '빵' : '커피'}</td>
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