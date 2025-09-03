

function App() {
  let su = 10;
  su += 3;

  console.log('su : ' + su);
  
  let str = 'hohoho';
  str = 'hahaha';
  console.log('str : ' + str);

  let arr = []; // empty array
  arr = [10, 20, 30]; // 배열은 대괄호를 사용합니다.
  console.log('arr : ' + arr);
  
  let obj = {}; // 객체는 중괄호를 사용합니다.
  // 속성의 이름과 값은 콜론으로 구분합니다.
  obj ={name:'hong', password:'adc123', age:30};
  console.log('obj : ');
  console.log(obj);

  // 중괄호를 block이라고 부릅니다.
  // Scope : 접근할 수 있는 어떠한 영역을 의미합니다.

  if(true){
    let x1 = 10;
    var x2 = 20;
  }

  //console.log('x1 : ' + x1); // let 키워드는 Block Scope 내에서만 유요합니다.
  console.log('x2 : ' + x2);

  // const를 사용한 상수(Constant)
  // const su2 = 10;
  // su2 += 3;
  const su2 = 15;
  console.log('su2 : ' + su2);

  //const str2 = 'hohoho';
  //str2 += 'hahaha';
  const str2 = 'hohoho';
  console.log('str2 : ' + str);

  //const arr2 =[];
  //arr2 = [40, 50, 60];
  const arr2 = [40, 50, 60];
  console.log('arr2 : ' + arr2);

  //const obj2 ={};
  //obj2 = {name:'park', password:'hello5678', gender:'남자'};
  const obj2 = {name:'park', password:'hello5678', gender:'남자'};
  console.log('obj2 : ');
  console.log(obj2);

  return (
    <div className="App">
      ECMAScript
    </div>
  );
}

export default App;
