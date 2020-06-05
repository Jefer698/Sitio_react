import React from 'react';
import LineField from './LineField';
export default function InputLine(props){
    const {label,
        type,
        placeholder,
        required,
        minlength,
        maxlength,
        min,
        max,
        step,
        list
        }=props;
    /*
const label = props label;
const type = props type;
const placeholder= props placeholder;
const required= props required;

    */
    return(
        <>
        <LineField label={label}>
        
        <input type={type} 
        placeholder={placeholder} 
        required={required}
         minlength={minlength} 
         maxlength={maxlength}
         min={min}
         max={max} 
         step={step}
         list={list && list.id}/>
         {list &&
            <datalist id={list.id}>
                {list.options.map(option=>
                        <option >{option}</option>
                    )}
            
               
            </datalist>

         }
         </LineField>
         
              
               

</>
    );
}