// 메뉴 목록을 만들어주는 페이지
// export 키워드는 외부에서 참조 가능하도록 길을 틔워줌
export const menuData = [
    {
        chapter : "ch02.ECMAScript",
        items : [
            {path : '/let_const', lable : 'let & const 실습'},
            {path : '/template_string', lable : '템플릿 문자열'},
            {path : '/make_subject_list', lable : '과목 목록 표시'},
            {path : '/make_function', lable : '함수 만들기'},
            {path : '/arrow_function', lable : '화살표 함수'},
            {path : '/array_map', lable : '배열 함수'},
            {path : '/spread_operator', lable : '전개 연산자'},
            
        ]
    },
    {
        chapter : "ch03.Component",
        items : [
            {path : '/components01', lable : '클래스형 컴포넌트'},
            {path : '/components02', lable : '함수형 컴포넌트'},
            {path : '/component_separate', lable : '컴포넌트별 분리하기'},
            {path : '/file_separator', lable : '파일 분리하기'},
            {path : '/use_props', lable : 'props 사용'},
            {path : '/array_and_table01', lable : '테이블 만들기 01'},
            {path : '/array_and_table02', lable : '테이블 만들기 02'},
            
            
        ]
    },
    {
        chapter : "ch04.Event",
        items : [
        {path : '/click_event', lable : '클릭 이벤트'},
        {path : '/change_event', lable : '체인지 이벤트'},
        {path : '/mouse_event', lable : '마우스 이벤트'},
        {path : '/key_event', lable : '키 이벤트'},
        {path : '/combo_change', lable : '콤보 문제'},

        ]
    }
    //여기에 4장, 5장 등등...추가되는 내용을 계속 계속 추가하면 됩니다.
];