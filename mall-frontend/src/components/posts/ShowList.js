import React from 'react';
import styled from 'styled-components';

const ShowListWrap = styled.div`
    width: 100%;
    border: 1px solid black;
`
const ImageWrap = styled.div`
    img {
        width: 100%;
    }
`

const ShowList = ({product : {thumbnail, title, price, categories}, onClick}) => {
    return (
        <ShowListWrap onClick={onClick}>
            <ImageWrap>
                <img src={thumbnail} alt='mainImage'></img>
            </ImageWrap>
            <div>
                <p>상품명   : {title}</p>
                <p>가격     : {price}원</p>
                <p>카테고리 : {categories.map(category => <span>{category} </span>)} </p>
            </div>
        </ShowListWrap>
    );
}

export default ShowList;