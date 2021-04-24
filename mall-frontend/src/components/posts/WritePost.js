import React, {  useState, useRef } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
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
`

const WritePost = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
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
        await axios.post('/api/post/write', {
            'title' : title,
            'contents' : contents,
        }).then(response => {
            console.log(response)
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <WritePostBlock>
            <Wrapper>
                <form onSubmit={onSubmit}>
                    <div>
                        <input name="title" className="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <ReactQuill
                            value={text}
                            onChange={setText}
                            theme='snow'
                            modules={modules}
                            formats={formats}
                            ref={quillRef}
                        />
                    </div>
                    <div className='button'>
                        <Button type="submit">저장</Button>
                        <Button>취소</Button>
                    </div>
                </form>
            </Wrapper>
        </WritePostBlock>
    )
}

export default WritePost;