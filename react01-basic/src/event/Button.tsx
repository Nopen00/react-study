import React from 'react';

const Button = () => {
    return (
        <div>
            <button onClick={() => alert('버튼클릭')} className=' p-4 bg-lime-500'>버튼 클릭</button>
        </div>
    );
};

export default Button;