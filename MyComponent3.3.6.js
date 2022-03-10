import React from 'react';
import PropTypes from 'prop-types';     // propTypes --> props를 지정하거나 props의 타입을 지정할 때 사용

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다 <br />
            children 값은 {children}
            입니다
            <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다
        </div>
    );
};

MyComponent.defaultProps = {        // props 기본값 설정 : defaultProps
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,      // name 값은 무조건 문자열(string) 형태로 전달 됨
    favoriteNumber: PropTypes.number.isRequired     // isRequired --> propTypes를 지정하지 않았을 때 경고 메시지를 띄워줌
};

export default MyComponent;
