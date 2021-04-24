import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import ProductInfoContainer from '../containers/posts/ProductInfoContainer';

const MainPage = () => {
    const {category} = useParams();
    return (
        <div>
            <HeaderContainer />
            <NavigationContainer />
            <ProductInfoContainer category={category}/>
        </div>
    )
}

export default MainPage;