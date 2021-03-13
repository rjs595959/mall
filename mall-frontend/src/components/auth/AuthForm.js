import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import StyledInput from '../common/StyledInput';

const textMap = {
    login: '로그인',
    register : '회원가입'
};

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`

const AuthForm = ({type, form, error, onChange, onSubmit}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                {type === 'register' && (
                        <StyledInput
                            autoComplete="nickname"
                            name="nickname"
                            placeholder="이름"
                            onChange={onChange}
                            value={form.nickname}
                        />
                )}
                <StyledInput
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <>
                        <StyledInput
                            autoComplete="new-password"
                            name="passwordConfirm"
                            placeholder="비밀번호 확인"
                            type="password"
                            onChange={onChange}
                            value={form.passwordConfirm}
                        />
                    </>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button
                    fullWidth
                    cyan
                    style={{ marginTop: '1rem'}}
                >
                    {text}
                </Button>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )
                }
            </Footer>
        </AuthFormBlock>
    )
}

export default AuthForm;