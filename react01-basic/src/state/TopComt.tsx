import React from 'react';

const TopComt = ({frontData, backData}) => {
    return (
        <div>
            <ol>
                <li>프론트 엔드</li>
                {/* frontData 보여주기 */}
                <ul>
                    {frontData.map((item,idx)=>(
                        <li key={{idx}}>{item}</li>
                    ))}
                </ul>
                <li>백엔드</li>
                {/* backData 보여주기 */}
                <ul>
                    {backData.map((item2,idx2)=>(
                        <li key={{idx2}}>{item2}</li>
                    ))}
                </ul>
            </ol>
        </div>
    );
};

export default TopComt;