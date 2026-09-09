import React, { useState } from "react";

const Change = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const reset = () => {
        setMessage("")
        setUsername('')
    }

    return (
    <div>
        <h1>Chamge 이벤트</h1>
        <input
        type="text"
        name="메세지"
        placeholder="입력하세요"
        className="border"
        value={message}
        onChange={(e) => console.log(e.target.value)}
        />
        <input
        type="text"
        name="이름"
        placeholder="입력하세요"
        className="border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button className="mx-1 bg-red-400 p-3" onClick={() => reset}>
        초기화
        </button>
        {/* 홍길동 : 메세지 */}
        <button className="mx-1 bg-red-400 p-3" onClick={() => alert(`${username} : ${message}`)}>
        확인
        </button>
    </div>
    );
};

export default Change;
