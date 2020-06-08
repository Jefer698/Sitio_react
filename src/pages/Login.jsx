
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../containers/LoginForm';

const links=[

{href: 'register', title: 'Registrarse'},
{href: 'contact', title: 'Contacto'},
{href: 'terminos', title: 'Terminos y Condiciones'}


];

export default function Login(){

    return(

<>
         <NavBar links={links} />
         <Content title="Ingreso" >
             <LoginForm/>
             </Content>
         <Footer/>

    </>





    );
}






 