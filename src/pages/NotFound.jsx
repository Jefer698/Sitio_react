import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';


const links=[
{href: 'login', title: 'Ingresar'},
{href: 'register', title: 'Registrarse'},
{href: 'contact', title: 'Contacto'},
{href: 'terminos', title: 'Terminos y Condiciones'}


];

export default function NotFound(){

    return(

<>
         <NavBar links={links} />
         <Content title="Pagina no encontrada 404" />
           
           
         <Footer/>

    </>
    );
}