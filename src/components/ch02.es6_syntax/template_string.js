function App(){
    // ES5 버전
    let string1 = 'hello'
    let string2 = 'world'
    let greeting = string1 + ' ' + string2;
     
    console.log('greeting : ' + greeting);
    
    let product = {};
    product = {name: 'apple', pirce: 20000}; // 상품 객체
    let message = '제품 : ' + product.name + ', 단가 : ' + product.pirce;
    console.log(message)

    let multiLine = 'hello\neveryone'
    console.log(multiLine);

    let value1 = 14;
    let value2 = 5;
    let boolValue = false;
    let operator1 = '연산 결과 : ' + (value1 * value2)
    console.log(operator1)

    let operator2 = '삼항 연산자 : ' + (boolValue ? '참' : '거짓');
    console.log(operator2);

    
    // ES6 버전 이후...
    let string3 = '여러분'
    let string4 = '반갑습니다.'
    // 백틱(`)은 템플릿 문자열로 기존의 복잡한 문자열 결합 연산자(+) 기능을 개선한 것이 템플릿 문자열(template literal)입니다.
    // template literal은 백틱(`) 문자를 사용하여 데이터를 표현하는 방식
    // 백틱(`)을 사용하고, 수식의 표현은 ${} 기호를 사용합니다.
    greeting = `${string3}~~~${string4}`; 
    console.log(' 인사말 : ' + greeting);
    product = {name: 'react', pirce: 30000};
    // toLocaleString() 메소드는 숫자를 3자리마다 콤마 유형으로 변경해주는 자바 스크립트 메소드입니다.
    message = `제품 ${product.name}의 단가는 ${product.pirce.toLocaleString()}입니다.`;
    console.log(message);
    let discount = 0.3;
    message = `할인가는 ${(product.pirce*(1 - discount)).toLocaleString()}원입니다.`
    console.log(message);

    multiLine = `여러분
안녕하세요`;
    console.log(multiLine)

    boolValue = 14 > 5;
    operator1 = `덧셈 결과 : ${value1 + value2}`
    console.log(operator1);
    operator2 = `삼항 연산자 : ${boolValue ? '참' : '거짓'}`;
    console.log(operator2);

    return(
        <div className = "App"> 
            탬플릿 문자열
        </div>
    );
}

export default App;
