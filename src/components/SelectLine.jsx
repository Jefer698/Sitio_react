import React from 'react';
import LineField from './LineField';
export default function SelectLine(props){
    const{name,label,options,required,onChange,error,value}=props;
return(

    <LineField label={label}>
    <select 
    required={required}
    onChange={(event)=>onChange(name,event)}
    className={error?'inputError':undefined}
    value={value}
    >
        {   options.map((option,key)=>
            <option 
            key={key}
            value={option.value}
            disabled={option.value===''}
           
            >{option.label}</option>)
        }
        

        </select>

        </LineField>
  









);



    





    }
