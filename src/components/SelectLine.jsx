import React from 'react';

export default function SelectLine(props){
    const{label,options}=props;
return(

    <div>
    <label>{label}</label>
    <select required>
        {   options.map(option=>
            <option value={option.value}>{option.label}</option>)
        }
        

        </select>


    </div>









);



    





    }
