import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');     // useState --> useState 함수의 인자에는 상태의 초깃값을 넣어줌
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히가세요');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>

    );
};

export default Say;