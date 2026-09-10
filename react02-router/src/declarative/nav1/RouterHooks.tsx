import { useSearchParams, useLocation } from 'react-router-dom';

const RouterHooks = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // ? 로 전달되는 파라메터를 가져옴
    const mode = searchParams.get('mode')
    const pageNum = searchParams.get('pageNum')

    const changeMode = () => {
        const nextMode = mode === 'list'?'view':'list'
        setSearchParams({
            mode:nextMode,
            pageNum: pageNum??"",
        })
    };
    const nextPage = () =>{
        const pgaeTemp = pageNum === null||isNaN(Number(pageNum))? 1:parseInt(pageNum) + 1;
        setSearchParams({
            mode:mode??'',
            pageNum: pgaeTemp.toString(),
        })
    };
    const prevPage = () =>{
        const pgaeTemp = pageNum === null||isNaN(Number(pageNum))? 1:parseInt(pageNum) - 1;
        setSearchParams({
            mode:mode??'',
            pageNum: pgaeTemp.toString(),
        })
    };

    return (

        <div>
            <h2>라우터 관련 Hook</h2>
            <div>
                <ul>
                    <li>URL : {location.pathname}</li>
                    <li>퀘리스트링 : {location.search}</li>
                    <li>mode : {mode}</li>
                    <li>pageNum : {pageNum}</li>
                </ul>
                <button onClick={changeMode}>mode 변경</button>
                <button onClick={prevPage}>이전 page</button>
                <button onClick={nextPage}>다음 page</button>
            </div>
        </div>
    );

};


export default RouterHooks;