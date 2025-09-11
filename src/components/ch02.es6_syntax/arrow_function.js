function App(){
    const function01 = function(){
        return 'hello~~world';
    }

    const function02 = () => {
        return '여러분~~안녕하세요';
    }
    
    const function03 = () => '어서오세요~~방가워요.';

    console.log('\n매개 변수가 없는 함수 표현식');
    console.log(function01());

    console.log('\n매개 변수가 없는 화살표 함수');
    console.log(function02());

    console.log('\n중괄호와 return 문이 없는 화살표 함수');
    console.log(function03());

    const name = '김철수';
    const function04 = (name) => {
        if(name === undefined){ // == 은 자동으로 형변환(0 == false, 1 == '1' 등등이 참으로 나옴.)을 비교하기 때문에 기준이 엄격하지 않음, 하지만 === 은 타입까지 비교하기 때문에 기준이 엄격 확실하게 비교할때는 === 사용한다.
            return `누구신가요?`
        }else{
            return `hello~~${name}님`
        }
    };

    console.log('\n매개 변수 1개짜리 함수');
    console.log(function04(name));
    
    console.log(function04());

    const function05 = (first, second) => {
        if(first === undefined || second === undefined){
            return `계산할 수 없는 값입니다.`
        }else{
            return `${first} 더하기 ${second}는 ${first + second}입니다.`
        }
    };
    
    console.log('\n매개 변수 2개짜리 함수');
    console.log(function05(10,20))
    
    console.log('\n중괄호와 return 문이 없는 매개 변수 2개짜리 화살표 함수');
    const function06 = (first,second) => `${first} 곱하기 ${second}는 ${first*second}입니다.`;
    console.log(function06(10,20));

    const function07 = (name, age) => {
        let adult = `${age >= 19 ? '성인' : '미성년자'}`
        
        if(name === undefined || age === undefined){
            const result = `잘못된 값이 입력되었습니다.`;
            return result;
        }else if(age < 0){
            const result = `입력할 수 없는 나이입니다.`;
            return result;
        }else if(age > 19){
            const result = `${name}(${age}세)님은 ${adult}입니다.`;
            return result;
        }else if (age <= 19){
            const result = `${name}(${age}세)님은 ${adult}이 아닙니다.`;
            return result;
        }
    };

    console.log(function07());
    console.log(function07('철수', -1));
    console.log(function07('영희',20));
    console.log(function07('유신',17));

    console.log(`\n반환타입이 객체인 경우`);
    const function08 = (first, second) => {
        const result = {add:first + second , mul:first * second};
        return result;
    }

    
    console.log(function08(14, 5));
    console.log('대괄호 기호와 key 이름을 이용하여 접근이 가능합니다, .을 이용한 참조 연산자도 사용가능 합니다.')
    let answer = function08(10,20);
    console.log(`덧셈 결과 : ${answer['add']}`)
    console.log(`곱셈 결과 : ${answer['mul']}`)
    console.log(`곱셈 결과(참조연산자) : ${answer.mul}`)


    return(
        <div className = "App">
            화살표 함수
        </div>
    );
}
export default App;