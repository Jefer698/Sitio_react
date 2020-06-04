import React from 'react';

export default function InputLine(props){
    const {label,type,placeholder,required,minlength,maxlength,min,max}=props;
    /*
const label = props label;
const type = props type;
const placeholder= props placeholder;
const required= props required;

    */
    return(
        <>
        <div>
        <label>{label}</label>
        
        <input type={type} placeholder={placeholder} required={required} minlength={minlength} maxlength={maxlength}min={min}max={max} />
                </div>
               

</>
    );
}