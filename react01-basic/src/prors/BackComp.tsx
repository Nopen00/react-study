import React from 'react';

// const BackComp = (props: {propData2 :string[];baTitle : string}) => {

//     const liRows = [];
//     for (let i = 0; i < props.propData2.length; i++) {
//         // 리액트가 리스트를 렌더링 할 때 각 항목을 고유하게 시결할 수 있도록
//         // key 속성 지정
//         liRows.push(<li>{props.propData2[i]}</li>)
        
//     }

//     return (
        
//         <div>
//             <li>{props.baTitle}</li>
//             <ul>{liRows}</ul>
//         </div>
//     );
// };

const BackComp = ({
    backData,
    baTitle,
    onClick
}: {
    backData :string[];
    baTitle : string;
    onClick:(e:React.MouseEvent<HTMLLIElement>) => void;
}) => {
    const liRows = [];
    for (let i = 0; i < backData.length; i++) {
        // 리액트가 리스트를 렌더링 할 때 각 항목을 고유하게 시결할 수 있도록
        // key 속성 지정
        liRows.push(<li key={i} onClick={onClick}>{backData[i]}</li>)
        
    }

    return (
        
        <div>
            <li>{baTitle}</li>
            <ul>{liRows}</ul>
        </div>
    );
};

export default BackComp;