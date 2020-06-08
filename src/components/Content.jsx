import React from 'react';


export default function Content(props){
    const {title,children}=props;
    return(
<>
<section>
        <div className="formulario">
        <header>
            <h2>{title}</h2>                
        </header>
                  {children}
                   </div>
                   </section>
                  
</>
    );
}