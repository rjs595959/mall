import React, {  useState, useRef } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import CategoryList from './CategoryList';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const WritePostBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

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
        border: 1px solid ${palette.gray[4]};
    }
    .ql-container {
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
    .price {
        outline: none;
        border: 1px solid ${palette.gray[5]};
        border-radius: 3px 3px 3px 3px;
        height: 2rem;
    }
`

const WritePost = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const quillRef = useRef();

    const modules = {
        toolbar: [
            [{'header' : [1,2,3,4,5,6]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list':'ordered'}, {'list':'bullet'}, {'indent':'-1'}, {'indent':'+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ]
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    const onSubmit = async (e) => {
        e.preventDefault();
        
        let editor = quillRef.current.getEditor();
        let contents = JSON.stringify(editor.getContents());

        const formData = new FormData();
        formData.append('title', title);
        formData.append('contents', contents);
        formData.append('price', price);
        formData.append('categories', categories);
        
        const config = {header : {'content-type' : 'multipart/form-data'}};
        await axios.post('/api/post/write', formData, config).then(response => {
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    }

    const categoryHandler = (event) => {
        if(event.key === "Enter") {
            if(categories.length < 5) {
                setCategories(categories.concat(category));
                setCategory('');
            }
        }
    }

    return (
        <WritePostBlock>
            <Wrapper>
                <form onSubmit={onSubmit}>
                    <div>
                        <input className="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <ReactQuill
                            value={text}
                            onChange={setText}
                            theme='snow'
                            modules={modules}
                            formats={formats}
                            ref={quillRef}
                        />
                    </div>
                    <div>
                        <p>
                            가격 : <input className='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </p>
                        <p>
                            카테고리 : <input className='category' value={category} 
                                              onChange={(e) => setCategory(e.target.value)} 
                                              onKeyDown={categoryHandler}
                                       />
                        </p>
                    </div>
                    <div>
                        <div>
                            <CategoryList categories={categories} />
                        </div>
                        <div className='button'>
                            <Button type="submit">저장</Button>
                            <Button>취소</Button>
                        </div>
                    </div>
                </form>
            </Wrapper>
        </WritePostBlock>
    )
}

export default WritePost;