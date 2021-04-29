import React, { useRef } from 'react';
import CategoryList from './CategoryList';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

const WritePost = ({title, text, price, category, categories, categoryHandler, onSubmit, onChange}) => {
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
    return (
        <WritePostBlock>
            <Wrapper>
                <div>
                    <input className="title" value={title} onChange={(e) => onChange('title', e.target.value)}/>
                    <ReactQuill
                        theme='snow'
                        modules={modules}
                        formats={formats}
                        value={text}
                        onChange={(value) => onChange('text', value)}
                    />
                </div>
                <div>
                    <p>
                        가격 : <input className='price' value={price} onChange={(e) => onChange('price', e.target.value)} />
                    </p>
                    <p>
                        카테고리 : <input className='category' value={category} 
                                        onChange={(e) => onChange('category', e.target.value)} 
                                        onKeyPress={categoryHandler}
                                />
                    </p>
                </div>
                <div>
                    <div>
                        <CategoryList categories={categories} />
                    </div>
                    <div className='button'>
                        <Button onClick={onSubmit}>저장</Button>
                        <Button>취소</Button>
                    </div>
                </div>
            </Wrapper>
        </WritePostBlock>
    )
}

export default WritePost;