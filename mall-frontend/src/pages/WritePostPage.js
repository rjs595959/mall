import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import WritePost from '../components/posts/WritePost';

const WritePostPageBlock = styled.div`
    width: 100%;
`

const WritePostPage = () => {
    return (
        <WritePostPageBlock>
            <HeaderContainer />
            <NavigationContainer />
            <WritePost />
        </WritePostPageBlock>
    )
};

export default WritePostPage;