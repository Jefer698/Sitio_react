import React from 'react';
export default function NavBar(props){
    
    return(    
<header>
    <nav>
     <ul>
         {
         props.links.map((link,key)=><li key={key}><a href={link.href}>{link.title}</a></li>) }
        </ul>

     </nav>

    </header>


    );
}

/*

function(link){ return <li><a href={link.href}>{link.title}</a></li>} es lo mismo que poner link=><li><a href={link.href}>{link.title}</a></li>

.map(function) lo que hace es traer los objetos de otro lado

props.links.map(function(link){
    return <li><a href={link.href}>{link.title}</a></li>
})


Es lo mismo que: 
function transformacion(link){
    return <li><a href={link.href}>{link.title}</a></li>
}
const returnElements=[];
for(i=0;i<links.length;i++){
    const link=links[i];
    returnElements[i]=transformacion(link);
}

*/