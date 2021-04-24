import Post from '../models/post';

export default async function makeFakeData() {
    try {
        const posts = [];
        for(let i=0; i<5; i++) {
            posts.push({
                name : i.toString(),
                price : i.toString(),
                imgUrl : i.toString(),
                category : i.toString(),
            })
        };
        console.log(posts);
        Post.create(posts);
    } catch(e) {
        console.log(e);
    }
}