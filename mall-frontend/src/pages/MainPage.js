import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import ShowListContainer from '../containers/posts/ShowListContainer';

const MainPage = () => {
    const {category} = useParams();
    return (
        <div>
            <HeaderContainer />
            <NavigationContainer />
            <ShowListContainer category={category}/>
        </div>
    )
}

export default MainPage;