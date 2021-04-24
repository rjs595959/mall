import React from 'react';
import styled from 'styled-components';

const PostBlock = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    .title {
        width: 70%;
        height: 4rem;
        input {
            width: 100%;
            height: 100%;
            font-size: 2rem;
            line-height: 4rem;
            padding: 0 1rem;
        }
        input::placeholder {
            font-size: 2rem;
            line-height: 4rem;
        }
    }
`

const Post = () => {
    return (
        <PostBlock>
            <div className="title">
                <input name="title" placeholder="제목을 입력하세요" />
            </div>
            <div className="price">

            </div>
        </PostBlock>
    )
}

export default Post;