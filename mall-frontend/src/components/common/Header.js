import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
    display: flex;
    justify-content: center;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
        font-size: 2rem;
        font-family: 'Yeon Sung', cursive;
    }
    .right {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-family: 'Do Hyeon', sans-serif;    
        div {
            margin-right: 1rem;
            cursor: pointer;
        }
    }
`

const Spacer = styled.div`
    height: 4rem;
    margin-bottom: 1rem;
`

const UserInfo = styled.div`
    font-weight: 800;
`

const Header = ({user, onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to='/' className='logo'>
                        Shopping Mall
                    </Link>
                    {user ? (
                            <div className="right">
                                <UserInfo>{user.nickname}</UserInfo>
                                <div onClick={onLogout}>로그아웃</div>
                            </div>
                        ) :
                        (
                            <div className="right">
                                <div>
                                    <Link to='/login'>로그인</Link>
                                </div>
                                <div>
                                    <Link to='/register'>회원가입</Link>
                                </div>
                            </div>
                        )
                    }
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    )
}

export default Header;