import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import WritePostContainer from '../containers/posts/WritePostContainer';

const WritePostPageBlock = styled.div`
    width: 100%;
`

const WritePostPage = () => {
    return (
        <WritePostPageBlock>
            <HeaderContainer />
            <NavigationContainer />
            <WritePostContainer />
        </WritePostPageBlock>
    )
};

export default WritePostPage;