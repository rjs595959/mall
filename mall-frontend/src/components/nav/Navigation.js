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
    margin-bottom: 1rem;
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
            .searchBar {
                width: 100%;
                position: relative;
            }
        }
    }
`
const SearchWrap = styled.div`
    display: flex;
    svg {
        font-size: 2rem;
    }
    margin-bottom: 0.2rem;
`
const SearchBar = styled(StyledInput)`
    border-bottom: none;
    &:focus {
        color: $oc-teal-7;
        border-bottom: none;
    }
`

const SearchHistory = styled.div`
    width: 90%;
    padding: 5px 10px 10px 10px;  
    position: absolute;
    background-color: white;
    box-shadow: 1px 1px 10px gray;
    border-radius: 4px 4px 4px 4px;

    .query {
        border-bottom: 1px solid ${palette.gray[5]};
    }
`

const Navigation = ({onChange, val, queries}) => {
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
                        <div className='searchBar'>
                            <SearchWrap>   
                                <SearchBar
                                    autoComplete="off" 
                                    name="search"
                                    onChange={onChange}
                                    value={val}
                                />
                                <BiSearch />
                            </SearchWrap>
                            {queries.length !== 0 &&  
                                (
                                    val !== '' && 
                                    (
                                        <SearchHistory>
                                            {queries.map(query => (
                                                <div className='query' key={query}>{query}</div>
                                            ))} 
                                        </SearchHistory>
                                    )
                                )}
                        </div>
                    </li>
                </ul>
            </Wrapper>
        </NavigationBlock>
    )
};

export default Navigation;