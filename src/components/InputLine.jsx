import React from 'react';
import LineField from './LineField';
export default function InputLine(props){
    const {label,
        type,
        placeholder,
        required,
        minLength,
        maxLength,
        min,
        max,
        step,
        list,
        onChange,
        name,
        error
        }=props;
    /*
const label = props label;
const type = props type;
const placeholder= props placeholder;
const required= props required;


if(error === true){
    className='InputError';}
    else{
        className='';
    }

    className=Error===true?'InputError':'';
    */
    return(
        <>
        <LineField label={label}>
        
        <input type={type} 
        placeholder={placeholder} 
        required={required}
         minLength={minLength} 
         maxLength={maxLength}
         min={min}
         max={max} 
         step={step}
         onChange={(event) => onChange(name,event)}
         className={error ? 'inputError':undefined}
         list={list && list.id}/>
         {list &&
            <datalist id={list.id}>
                {list.options.map((option,key)=>
                        <option key={key}>{option}</option>
                    )}
            
               
            </datalist>

         }
         </LineField>
         
              
               

</>
    );
}