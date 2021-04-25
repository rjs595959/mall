import React from 'react';
import styled from 'styled-components';

const Category = styled.span`
    height: 2rem;
    margin-right: 1rem;
`

const CategoryList = ({categories}) => {
    return (
        <div>
            {categories.map(category => (
                <Category>#{category}</Category>
            ))}
        </div>
    );
}

export default CategoryList;