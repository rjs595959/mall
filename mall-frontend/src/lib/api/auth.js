import client from './client';

export const login = ({username, password}) => client.post('/api/auth/login', {username, password});

export const register = ({username, password, nickname}) => client.post('/api/auth/register', {username, password, nickname});

export const check = () => client.get('/api/auth/check');

export const logout = () => client.get('/api/auth/logout');

export const checkNickname = ({nickname}) => client.post('/api/auth/checkNickname', {nickname} )