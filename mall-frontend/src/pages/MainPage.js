import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import ShowList from '../containers/posts/ShowList';

const MainPage = () => {
    const {category} = useParams();
    return (
        <div>
            <HeaderContainer />
            <NavigationContainer />
            <ShowList category={category}/>
        </div>
    )
}

export default MainPage;