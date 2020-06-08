import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ContactForm from '../containers/ContactForm';

const links=[

    {href: 'login', title: 'Ingresar'},
    {href: 'register', title: 'Registrarse'},
    {href: 'terminos', title: 'Terminos y Condiciones'}
    
    
    ];

export default function Contact (){
    return(

        <>
                 <NavBar links={links} />
                 <Content title="Cont&aacute;tenos" >
                     <ContactForm/>
                     </Content>
                 <Footer/>
        
            </>
        
        
        
        
        
            );
        }
        
        