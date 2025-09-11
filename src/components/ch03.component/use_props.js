// ui 폴더에 있는 Top02이라는 앱을 나는 Top이라고 부를거야.
import Top from './ui/Top02';
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';

function App(){
    //console.log('샘플');
    
    const breadlist = ["소금빵", "단팥빵", "샌드위치", "도넛", "소보루빵"];
    const coffeelist = ["아메리카노", "카페라떼", "콜드브루", "바닐라라떼", "카페모카"];
    
    return(
        <div className = "App">
            <Top greeting = "포레스트 커피&빵" welcome = "어서오세요. 우리 매장에서 재밌는 시간 되시길 바랍니다." />
            
            {/*<Content bread01 = "소금빵" bread02 = "단팥빵" bread03 = "샌드위치" bread04 = "도넛" />  */}
            
            {/* breadList를 props로 전달하기 */}
            <Content type = "ul" menus = {breadlist} />
            <hr />
            <Content type = "ol" menus = {coffeelist} />
            <Bottom goodbye = "안녕하 가세요" comment = "다음 번에 또 뵐 수 있으면 좋겠습니다." />
        </div>
    );
}
export default App;