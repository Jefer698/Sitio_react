import React from 'react';

export default function(props){
    const{label,children}=props;
    return(

 <div>
    <label>{label}</label>
        {children}

        </div>
    );
}