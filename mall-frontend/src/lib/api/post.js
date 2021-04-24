import client from './client'

export const write = ({title, contents}) => client.post('/api/post', {title, contents});