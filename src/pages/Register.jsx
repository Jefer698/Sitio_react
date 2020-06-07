import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../components/RegisterForm';
const links=[

    {href: 'login', title: 'Ingresar'},
    {href: 'contact', title: 'Contacto'},
    {href: 'terminos', title: 'Terminos y Condiciones'}
    
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