import React from 'react';

// 비구조화 할당 문법

const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다 <br />
            children 값은 {children}
            입니다
        </div>
    );
};

MyComponent.defaultProps = {        // props 기본값 설정 : defaultProps
    name: '기본 이름'
};

export default MyComponent;
