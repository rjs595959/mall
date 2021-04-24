import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import NavigationContainer from '../containers/nav/NavigationContainer';
import ReadPost from '../components/posts/ReadPost';

const ReadPostPageBlock = styled.div`
    width: 100%;
`

const ReadPostPage = () => {
    return (
        <ReadPostPageBlock>
            <HeaderContainer />
            <NavigationContainer />
            <ReadPost />
        </ReadPostPageBlock>
    )
};

export default ReadPostPage;