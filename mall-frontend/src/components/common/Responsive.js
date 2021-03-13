import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    width: 100%;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 768px;
    }

    @media (min-width: 1024px) {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 1024px;
        margin: 0 auto;
    }
`

const Responsive = ({ children, ...rest }) => {
    return (
        <ResponsiveBlock {...rest}>
            {children}
        </ResponsiveBlock>
    )
};

export default Responsive;