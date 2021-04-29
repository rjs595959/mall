import client from './client'

export const write = (formData) => {
    client.post('/api/post/write', formData);
}
    