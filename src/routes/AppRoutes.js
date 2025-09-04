// 'react-router-dom'은 라우팅을 위한 라이브러리입니다.
// 기본으로 설치가 안되어 있으니, 차후 설치를 해주어야 합니다.
// npm install react-router-dom 엔터
import {Routes, Route} from 'react-router-dom';


// ./ 은 현재폴더 , ../ 은 상위폴더 (.../은 없음 , ../을 ../../ 식으로 이어붙여서 계속 상위폴더로 타고올라감)
//ch02 장
// import 앱이름(임의로 설정한 이름) from '전체경로/파일명'
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import AppTemplateString from './../components/ch02.es6_syntax/template_string';
import AppSubjectList from './../components/ch02.es6_syntax/make_subject_list';

import AppMakeFunction from './../components/ch02.es6_syntax/make_function';
import AppArrowFunction from './../components/ch02.es6_syntax/arrow_function';
import AppArrayMap from './../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from './../components/ch02.es6_syntax/spread_operator';

//ch03장
import AppClassComponent from './../components/ch03.component/components01';
import AppFunctionComponent from './../components/ch03.component/components02';
import AppComponentSeparate from './../components/ch03.component/component_separate';
import AppFileSeparator from '../components/ch03.component/file_separator';
import AppUserProps from '../components/ch03.component/use_props';
import AppMakeTable01 from '../components/ch03.component/array_and_table01';


function AppRoutes(){
    return(
        // element 속성에는 컴포넌트 자체가 아니라 JSX 요소를 넣어야합니다.
       <Routes>
        <Route path = '/' element = {<AppLetConst/>}/>
        <Route path = '/let_const' element = {<AppLetConst/>}/>
        <Route path = '/template_string' element = {<AppTemplateString/>}/>
        <Route path = '/make_subject_list' element = {<AppSubjectList/>}/>
        <Route path = '/make_function' element = {<AppMakeFunction/>}/>
        <Route path = '/arrow_function' element = {<AppArrowFunction/>}/>
        <Route path = '/array_map' element = {<AppArrayMap/>}/>
        <Route path = '/spread_operator' element = {<AppSpreadOperator/>}/>
        <Route path = '/components01' element = {<AppClassComponent/>}/>
        <Route path = '/components02' element = {<AppFunctionComponent/>}/>
        <Route path = '/component_separate' element = {<AppComponentSeparate/>}/>
        <Route path = '/file_separator' element = {<AppFileSeparator/>}/>
        <Route path = '/use_props' element = {<AppUserProps/>}/>
        <Route path = '/array_and_table01' element = {<AppMakeTable01/>}/>
        
       </Routes>
    );
};

export default AppRoutes;