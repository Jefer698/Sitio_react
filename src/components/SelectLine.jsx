import React from 'react';
import LineField from './LineField';
export default function SelectLine(props){
    const{label,options,required}=props;
return(

    <LineField label={label}>
    <select required={required}>
        {   options.map(option=>
            <option 
            value={option.value}
            disabled={option.value===''}
            selected={option.value===''}
            >{option.label}</option>)
        }
        

        </select>

        </LineField>
  









);



    





    }
