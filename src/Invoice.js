import React from 'react';

export const Invoice = (props) => {
    return (
        <div className="row"> 
            <div className="column">{props.buyer} </div>
            <div  className="column">{props.date} </div>
            </div>
    )
}