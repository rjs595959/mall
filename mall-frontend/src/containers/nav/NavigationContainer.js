import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, changeField } from '../../modules/nav';
import Navigation from '../../components/nav/Navigation';

const NavigationContainer = () => {
    const dispatch = useDispatch();
    const { val, queries } = useSelector( ({nav}) => ({
        val : nav.val,
        queries : nav.queries
    }));

    const onChange = e => {
        dispatch(changeField(e.target.value));
        dispatch(search(e.target.value));
    }

    return (
        <Navigation
            onChange={onChange}
            val={val}
            queries={queries}
        />
    )
}

export default NavigationContainer;