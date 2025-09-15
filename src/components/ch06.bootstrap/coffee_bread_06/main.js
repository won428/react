import { useState } from 'react';

// 부트스트랩 관련 임포트
import Card from 'react-bootstrap/Card';

// 하위 컴포넌트 추가
import Top from './ui/Top';
import Content from './ui/Content';
import Bottom from './ui/Bottom';
import Switcher from './ui/Switcher';

function App() {
    const title = 'React 맛집';
    const comment = '어서오세요, React 맛집입니다.';
    const message = '카운터에서 주문 부탁드립니다. 즐거운 시간 되세요!';


    //신규 상품 추가를 위해 setProducts가 필요함
    const [products, setProducts] = useState([
        { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_01.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." },
        { id: 5, name: "스폰지 케이크", price: 5000, category: 'cake', stock: 555, image: 'sponge_cake_01.png', description: "가장 일반적인 케이크로, 부드럽고 공기가 많은 스폰지 텍스처를 가지고 있습니다. 일반적으로 크림, 과일, 초콜릿 등 다양한 토핑과 함께 제공됩니다." },
        { id: 6, name: "초콜릿 케이크", price: 6000, category: 'cake', stock: 666, image: 'chocolate_cake_01.png', description: "초콜릿으로 만든 케이크로, 풍부하고 진한 초콜릿 맛을 가지고 있습니다. 초콜릿으로 만든 케이크 스폰지와 초콜릿으로 만든 크림 또는 가나슈를 사용하여 제작됩니다." },
        { id: 7, name: "바닐라 마카롱", price: 2500, category: 'macaron', stock: 120, image: 'vanilla_macaron.png', description: "부드럽고 달콤한 바닐라 크림이 들어 있는 프랑스식 디저트입니다. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다." },
        { id: 8, name: "딸기 마카롱", price: 2800, category: 'macaron', stock: 90, image: 'strawberry_macaron.png', description: "상큼한 딸기 크림이 가득 들어 있는 마카롱으로, 달콤하면서도 상큼한 맛을 즐길 수 있습니다." }
    ]);
    /* mode : 현재 상태의 모드 지정 */
    /* insert, update, delete, read, detail 등등 */
    const [mode, setMode] = useState('');

    /* selectedId는 현재 선택이 된 항목의 상품 id 정보.
    프로그램 최초 시작 시 1번이 선택되었다고 가정. */
    const [selectedId, setSelectedId] = useState(1);

    /* 상품 목록에서 특정 상품 1개를 클릭. */
    const ClickArrived = (id) => {
        console.log(`상품아이디 : ${id}`);
        setSelectedId(Number(id)); // 선택한 상품의 id가 변경됨.
        setMode('detail'); // 상세보기 모드로 변환.
    }
    console.log('products is array?', Array.isArray(products), products);
    const getProductById = () => {
        // selectedId : 임의의 사용자가 클릭한 상품의 id
        // 상품 목록(products)에서 filter 함수를 이용하여 추출
        // bean은 방금 추출한 객체
        const selelctedProduct = products.filter((bean) => bean.id === selectedId);
        // selelctedProduct는 객체 1개를 저장하고 있는 배열로 반환됨.
        // 따라서, 1번째 항목은 0으로 가져감
        return selelctedProduct[0]
    }

    // /* 수정하려는 상품 1개의 정보를 저장하기 위해 정의 */
    // const [currentProduct, setCurrentProduct] = useState(null);

    /* 버튼을 클릭하여 모드 변경 */
    const ModeChanged = (mode) => {
        console.log(`변경된 모드 : ${mode}`);
        setMode(mode); // 변경된 모드로 mode 스테이트에 할당.

        if (mode === 'get_delete') { // 사용자가 특정 항목을 삭제하려고 시도.
            // 삭제하려고 선택한 품목의 id만 제외하고, 다시 필터링함.
            const remainProduct = getExceptData(selectedId);
            setProducts(remainProduct);
            setMode('read');
        }

        // if (mode === 'get_update') {
        //     // const currentProduct = getProductById();
        //     // console.log('수정할 상품 정보 출력 : ');
        //     // console.log(currentProduct)
        //     setCurrentProduct(getProductById());

        // }
    }

    // /* 신규 상품을 관리할 state 정의 */
    // const [newItem, setNewItem] = useState(null);

    /* 사용자가 상품 등록 화면에서 내용을 기입하고, 등록 버튼을 누름 */
    const InsertData = (formData) => {
        console.log('등록버튼 누름');

        // 생성될 상품에 적용시킬 신규 아이디
        const newId = Math.max(...products.map((bean) => bean.id)) + 1;

        // newData는 사용자가 입력한 데이터를 저장하는 배열.
        const newData = [{
            id: newId,
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value,
        }];

        console.log(newData);

        // 이전 상품 목록과 신규 품목을 합침(concat : 배열에 사용시 배열끼리 합침)
        const newProducts = products.concat(newData);
        setProducts(newProducts);

        setMode('read'); // 읽기모드로 변경
    }

    const getExceptData = (id) => {
        return products.filter((item) => item.id !== id);
    }

    /* 사용자가 상품 수정 화면에서 내용을 수정하고, 수정버튼 누르기 -> 쌤 버전 */
    const UpdateDataT = (formData) => {
        // 수정된 상품을 제외하고, 나머지 데이터 추출
        const anotherProduct = getExceptData(formData.id);
        // 추출된 상품 목록과 수정된 상품 합치기
        const newProductList = anotherProduct.concat(formData);
        setProducts(newProductList); // 상품 업데이트
    }

    // 사용자가 수정화면에서 내용을 수정하고, [수정] 버튼 누르기 -> 독학 버전
    const UpdateData = (formData) => {
        const newData = {
            ...formData,
            id: formData.id,
            name: formData.name,
            price: Number(formData.price),
            category: formData.category,
            stock: Number(formData.stock),
            image: formData.image,
            description: formData.description,
        };

        console.log(newData);

        setProducts(products.map((bean) => bean.id === newData.id ? { ...bean, ...newData } : bean));
        setSelectedId(newData.id);
        setMode('detail'); // 읽기모드로 변경
    }

    /* 카테고리 정보는 동적으로 갱신이 되어야 하므로, 다음과 같이 자바 스크립트 배열을 만들어서 처리해야함.
        1. 자바 스크립트 배열로 카테고리 초기화.
        2. 관리해야 하므로 state로 처리해야함.
        3. 폼 양식(상품등록, 상품수정)에서 카테고리를 동적으로 생성. 
        4. 추가/삭제 작업이 발생하면 동적으로 갱신해야 함.
        5. 상품목록 페이지(Content)에 카테고리 한글 이름 나오도록 수정(배열의 find() 함수)
    */

    const categoryList = [
        { EngName: 'bread', KorName: '빵' },
        { EngName: 'beverage', KorName: '음료수' },
        { EngName: 'cake', KorName: '케이크' },
        { EngName: 'macaron', KorName: '마카롱' },
    ];

    const [categories, setCategories] = useState(categoryList);

    /* 사용자가 카테고리 추가 화면에서 내용을 기입하고, 추가 버튼을 누름. */
    const InsertCategory = (formData) => {
        // formData = 신규 추가할 카테고리

        // 파라미터 이름은 파일 CreateCategory.js에서 참조해야함.
        const newCategory = { EngName: formData.EngName.value, KorName: formData.KorName.value };

        // totalCategory는 이전 카테고리에 신규 카테고리를 추가한 총 카테고리 목록
        const totalCategory = categories.concat(newCategory);

        setCategories(totalCategory); // 카테고리 정보 갱신
        setMode('read'); // 모드 변경
    }

    /* 정렬 기능 추가 */
    /* 기본 정렬 방식으로 name 칼럼으로 오름차순으로 정렬할게요. */
    const [orderInfo, setOrderInfo] = useState({column:'name', ordering: 'asc'});

    /* 정렬 정보를 활용하여 정렬을 실행해주는 함수입니다. */
    /* cartegory 조회시 영문이 아닌 한글로 수정하도록 합니다. */
    const Ordering = (orderInformation) => {
        const column = orderInformation.column; // 정렬할 때 사용할 컬럼
        const method = orderInformation.ordering; // 정렬 방식(오름차, 내림차)

        const textColumns = ['name','category']; // 문자열 컬럼 목록
        const isCharacter = textColumns.includes(column); // 문자열 컬럼인지 판단 

         // a와 b는 각가 상품 1개를 의미하는 객체 정보(java의 bean으로 봐도 무방)
        products.sort((a, b)=>{
            let aValue = a[column];
            let bValue = b[column];

            // 정렬할 컬럼이 카테고리 이면, 한글로 변환해서 비교를 수행합니다.
            if(column === 'category'){
                const aCategory =  categories.find(c=> c.EngName === a.category);
                const bCategory =  categories.find(c=> c.EngName ===b.category);
                aValue = aCategory ? aCategory.KorName : a.category;
                bValue = bCategory ? bCategory.KorName : a.category;
            }

            if(isCharacter){ // 문자열 컬럼
                return method === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
            }else{ // 숫자형 컬럼
                return method === 'asc' ? aValue - bValue : bValue - aValue
            }
        });
    }
    



    /* 사용자가 '컬럼' 또는 '정렬방식'을 선택하면 여기 코드가 실행됩니다. */
    const ClickOrderby = (column_name, order_by) => {
        const newOrderInfo = {column : column_name, ordering : order_by };
        setOrderInfo(newOrderInfo);
        
        //정렬 함수를 호출합니다.
        Ordering(newOrderInfo);
    }

   

    return (

        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/* onClickToContent 프롭스가 리턴되고 난 후 ClickArrived 함수가 동작되도록 하기 */}
                <Content 
                Contents={products} 
                onClickToContent={ClickArrived}
                categories={categories}
                onOrderbyClick={ClickOrderby}
                orderInfo = {orderInfo} />
            </Card.Body>
            <Switcher
                mode={mode}
                product={getProductById()}
                onSubmitInsert={InsertData}
                onSubmitUpdate={UpdateData}
                onSubmitCategoryAdd={InsertCategory}
                categories={categories}
                
            />
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>
        </Card>

    );
};
export default App;