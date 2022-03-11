import React, {Component} from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    onChange={
                        (e) => {        // e --> 파라미터(매개변수)
                            console.log(e.target.value);     // e.target --> 특정 이벤트가 발생하는 태그, e.target.value --> 인풋태그에 입력되는 값
                        }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;
