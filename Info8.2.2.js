import React, {useState, useEffect} from 'react';
// useEffect() --> 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook (componentDidMount + componentDidUpdate)
// componentDidMount() --> 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됨
// componentDIdUpdate() --> 

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {       
        console.log('effect');      // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는
        console.log(name);    
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);                                    // 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 뱅ㄹ을 넣어 주면 됨

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
