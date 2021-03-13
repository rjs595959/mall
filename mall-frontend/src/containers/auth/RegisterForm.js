import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register, checkNickname } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form ,auth, authError, user, nicknameCheck } = useSelector( ({ auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
        nicknameCheck : auth.nicknameCheck,
    }));

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        )

        if(name === "nickname") {
            dispatch(
                checkNickname({nickname : value})
            );
            
            if(!nicknameCheck) {
                setError('같은 닉네임이 존재합니다.');
                return;
            }
            else {
                setError('');
            }
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        const { username, nickname, password, passwordConfirm } = form;
        if (!nicknameCheck) {
            setError('같은 닉네임이 존재합니다.');
            return;
        }
        if ([username, nickname, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요');
            return;
        }
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form : 'register', key : 'password', value : ''}));
            dispatch(changeField({form : 'login', key : 'passwordConfirm', value: ''}));
            return;
        }
        dispatch(register({ username, password, nickname }));
    };

    useEffect(() => {
        if (authError) {
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            setError(authError.response.status);
            return;
        }

        if (auth) {
            console.log('회원가입 성공');
            dispatch(check());
        }
    },[auth, authError, dispatch]);

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                console.log('localStorage is not working');
            }
        }
    }, [user, history]);

    return (
        <AuthForm
            type='register'
            form={form}
            error={error}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default withRouter(RegisterForm);