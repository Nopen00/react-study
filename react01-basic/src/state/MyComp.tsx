import type React from 'react';
import { useState } from 'react';
import TopComt from './TopComt';

const MyComp = () => {

    const [myData, setMydata] = useState({
        frontData : ['HTML5','CSS3','JavaScript','React'],
        backData : ['JAVA','PYTHON','ORACLE','Node'],
    })


    const frontClick = () => {
        // frontData에 새로운 내용 추가
        myData.frontData.push('TypeScript')
        setMydata(myData)
    };
    const backClick = () => {
        // backData에 새로운 내용 추가
        const newBack = [...myData.backData,'SpringBoot'];
        const newMyData = {...myData,backData : newBack};
        // myData.backData.push('SpringBoot')
        setMydata(newMyData)
    };

    return (
        <div>
            {/* 개별 컴포넌트 삽입*/}
            <h2>React - 얕은비교</h2>
            <TopComt frontData = {myData.frontData} backData = {myData.backData}/>
            <button className='p-4 border-2 border-indigo-500' onClick={frontClick}>Add Front</button>
            <button className='p-4 border-2 border-purple-500' onClick={backClick}>Add Back</button>
        </div>
    );
};

export default MyComp;