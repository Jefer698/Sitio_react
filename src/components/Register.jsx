import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import RegisterForm from './RegisterForm';
const links=[

    {href: 'login.html', title: 'Ingresar'},
    {href: 'contact.html', title: 'Contacto'},
    {href: 'terminos.html', title: 'Terminos y Condiciones'}
    
    ];
function Register(){
    return(
<>
<NavBar links={links} />
  <Content title="Registro" >
<RegisterForm/>

 </Content>
    <Footer/>
</>


    );
}

export default Register;