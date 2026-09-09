import { useState } from "react";

const Signup = () => {
    // const onSubmit = (e) => {
    //     // submit 중지
    //     e.preventDefault();

    //     // formData 모두 가져오기
    //     const formData = new FormData(e.currentTarget);
    //     const username = formData.get('username')
    //     const email = formData.get('email')
    //     console.log(username, email);
    // }

    const [form, setForm] = useState<Form>({
        username: '',
        email: '',
    })

    const {username, email} = form

    const onChange = (e) => {
        // 어느 input에서 발생한 이벤트인가?
        const {name, value} =e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // 확인작업
        
    }

    return (
    <div>
        <h1>Submit 이벤트</h1>
        <form action="" method="post" onSubmit={onSubmit}>
            <input type="text" name="username" placeholder="이름" className="border" value={username}/>
            <input type="email" name="email" placeholder="이메일" className="border" value={email}/>
            {/* 홍길동 : 메세지 */}
            <button className="mx-1 bg-orange-400 p-3" type="submit">
            확인
            </button>
        </form>
    </div>
    );
};

export default Signup;
