import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import WritePost from '../../components/posts/WritePost';
import { appendCategory, changeField, write} from '../../modules/post';
import { withRouter } from 'react-router-dom';

const WritePostContainer = ({history}) => {
    const dispatch = useDispatch();
    const { title, text, price, category, categories, writeError} = useSelector( ({post}) => ({
        title : post.title,
        text : post.text,
        price : post.price,
        category : post.category,
        categories : post.categories,
        writeError : post.writeError
    }));
    const categoryHandler = (event) => {
        if(event.key === "Enter") {
            if(categories.length < 5)  {
                dispatch(appendCategory({category}));
            }
        }
    };

    /** 에디터에서 뽑은 html형식의 문자열들을
     *  이미지 주소와 그 외에 것으로 나눈다.
     *  replacedText = <img src=<imageFile>> 형식을 가진다.
     *  blobArray는 각각의 이미지의 Blob을 갖고 있는다. 
     *  */ 
    const seperateTextandImage = (text) => {
        let regex = /".[^>]+/g;
        let typeRegex = /\/[^;]+/;
        let match = text.match(regex);
        
        let type, replacedText=text;
        let blobArray = []
        if(match != null) {
            // 확장자를 추출해낸다.
            match.forEach(m => {
                // data type
                type = m.match(typeRegex)[0].split('/')[1];
                //blob data
                let data = m.split(',')[1];
                let buffer = Buffer.from(data, 'base64');
                blobArray.push(new Blob([buffer], {type}));
                // 순수 html 파일
                replacedText = replacedText.replace(m, '<imageFile>');
            });
        }
        return [replacedText, blobArray]
    }
    const onSubmit = (event) => {
        event.preventDefault();

        const [modifiedHtml, imageBlobArray] = seperateTextandImage(text)
        let formData = new FormData();
        formData.append('html', modifiedHtml);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('categories', JSON.stringify(categories));
        for(let i=0; i<imageBlobArray.length; i++) {
            formData.append('images', imageBlobArray[i]);
        }

        dispatch(write(formData))
        if(writeError) {
            console.log(writeError);
        }
        else {
            alert('글 쓰기가 완료되었습니다.')
        }
        history.push('/');
    }
    const onChange = (key, value) => {
        dispatch(changeField({key, value}));
    }
    return (
        <div>
            <WritePost title={title} price={price} text={text}
                category={category} categories={categories} 
                categoryHandler={categoryHandler} onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>
    )
}

export default withRouter(WritePostContainer);