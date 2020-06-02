import React from 'react';


export default function Content(props){
    return(
<>
<section>
        


        <div class="formulario">
                   <header>
    <h2>{props.title}</h2>
                          
                   </header>
                  {props.children}
                   </div>
                   </section>
                  
</>
    );
}