import React, { useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from "styled-components";

let Box = styled.div`
    padding-top: 30px;
`;

let Title = styled.h4`
    font-size: 25px;
    color: ${props => props.색상};
`;

let Alert = styled.div`
    background: #eeeeee;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
    margin: auto;
`;

let Altmsg = styled.p`
    margin: 0;    
`;

function Detail(props){
    
    let {id} = useParams();
    let 찾은상품 = props.sbShoes.find(상품 => 상품.id == id);
    let history = useHistory();     // 방문기록 등을 저장해놓는 object

    return (
        <div className="container">
            <Box>
                <Title 색상='red'>Detail</Title>
            </Box>
            <Alert>
                <Altmsg>재고가 얼마 남지 않았습니다</Altmsg>
            </Alert>
            <div className="row">
                <div className="col-md-6">  
                <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={() => {
                    history.goBack();
                    //history.push('/');  --> history.push() = 특정 경로로 이동시킴
                }}>뒤로가기</button> 
                <button className="btn btn-danger" onClick={() => {
                    history.goForward();
                }}>앞으로가기</button>
                </div>
            </div>
        </div> 
    );
}

// sass
// @extend .class --> css코드 복사, 가져올 수 있음
// @mixin function(){....}, @include funciton() --> 함수형태로 코드를 불러올 수 있음

export default Detail;
