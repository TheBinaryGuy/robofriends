import React from 'react';

const Scroll = (props) => {
    const style = {
        overflowY: 'scroll', border: '1px solid black', height: '450px'
    };
    return (
        <div className='' style={style}>
            {props.children}
        </div>
    );
};

export default Scroll;