import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const ReadPostBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Wrapper = styled(Responsive)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${palette.gray[5]};
    .title {
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        height: 4rem;
        box-sizing: border-box;
        font-size: 2rem;
        border: none;
        outline: none;
    }

    .contents {
        width: 100%;
        height: 25rem;
        margin-bottom: 10px;
    }
    .button {
        float: right;
        button {
            margin-left: 1rem;
            width: 5rem;
        }
    }
`

const ReadPost = ({contents=['aaaa', 'a','a\na\na\n\an']}) => {
    return (
        <ReadPostBlock>
            <Wrapper>
                <div className="title">
                    {contents[0]}
                </div>
                <div className="contents">
                    
                </div>
                <div className='button'>
                    <Button>수정</Button>
                    <Button>확인</Button>
                </div>
            </Wrapper>
        </ReadPostBlock>
    );
}

export default ReadPost;