import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import {useDispatch, useSelector} from 'react-redux';
import ShowList from '../../components/posts/ShowList';
import { showList } from '../../modules/list';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShowListContainerWrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const ShowListContainer = ({category}) => {
    const dispatch = useDispatch();
    const { list } = useSelector( ({list}) =>({
        list: list.list,
    }));

    useEffect(() => {
        dispatch(showList(category));
    }, [dispatch, category]);

    return (
        <Wrapper>
            <ShowListContainerWrapper>
                {list.map((product, index) => (
                    <ShowList key={index} product={product} />
                ))}
            </ShowListContainerWrapper>
        </Wrapper>
    )
};

export default ShowListContainer;