import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import {useDispatch, useSelector} from 'react-redux';
import ProductInfo from '../../components/posts/ProductInfo';
import { getProductsInfo } from '../../modules/product';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductInfoContainerWrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const ProductInfoContainer = ({category}) => {
    const dispatch = useDispatch();
    const { products } = useSelector( ({product}) =>({
        products: product.products,
    }));

    const onClick = () => {
        alert(1);
    }

    useEffect(() => {
        dispatch(getProductsInfo(category));
    }, [dispatch, category]);

    return (
        <Wrapper>
            <ProductInfoContainerWrapper>
                {products.map( (product, index) => (
                    <ProductInfo key={index} product={product} onClick={onClick} />
                ))}
            </ProductInfoContainerWrapper>
        </Wrapper>
    )
};

export default ProductInfoContainer;