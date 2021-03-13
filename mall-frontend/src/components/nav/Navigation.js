import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import StyledInput from '../common/StyledInput';
import { BiSearch } from "react-icons/bi";

const NavigationBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled(Responsive)`
    height: 2rem;
    padding-bottom: 1rem;   
    border-bottom: 1px solid ${palette.gray[5]};
    ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
            line-height: 2rem;
        }
    }
`
const SearchWrap = styled.div`
    display: flex;
    svg {
        font-size: 2rem;
    }
`

const Navigation = () => {
    return (
        <NavigationBlock>
            <Wrapper>
                <ul>
                    <li><Link to='/shop/best'>BEST</Link></li>
                    <li><Link to='/shop/new'>NEW</Link></li>
                    <li><Link to='/shop/outer'>OUTER</Link></li>
                    <li><Link to='/shop/top'>TOP</Link></li>
                    <li><Link to='/shop/pants'>PANTS</Link></li>
                    <li><Link to='/shop/shirts'>SHIRTS</Link></li>
                    <li><Link to='/shop/shoes'>SHOES</Link></li>
                    <li><Link to='/shop/bag'>BAG</Link></li>
                    <li><Link to='/shop/accessories'>ACCESSORIES</Link></li>
                    <li>
                        <SearchWrap>   
                            <StyledInput />
                            <BiSearch />
                        </SearchWrap>
                    </li>
                </ul>
            </Wrapper>
        </NavigationBlock>
    )
};

export default Navigation;