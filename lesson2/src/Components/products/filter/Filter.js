import React from 'react';

const Filter = ({getFilterValue, value}) => {
    return (
        <input type="text" onChange={getFilterValue} value={value}/>
    );
}

export default Filter;