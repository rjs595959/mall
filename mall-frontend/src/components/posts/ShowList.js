import React from 'react';
import styled from 'styled-components';

const ShowListWrap = styled.div`
    width: 320px;
    border: 1px solid black;
`
const ImageWrap = styled.div`
    height: 4rem;
    img {
        height: 100%;
    }
`

const ShowList = ({product : {imgUrl, name, price, category}, onClick}) => {
    return (
        <ShowListWrap onClick={onClick}>
            <ImageWrap>
                <img src={imgUrl} alt='mainImage'></img>
            </ImageWrap>
            <div>
                <p>상품명   : {name}</p>
                <p>가격     : {price}원</p>
            </div>
        </ShowListWrap>
    );
}

export default ShowList;