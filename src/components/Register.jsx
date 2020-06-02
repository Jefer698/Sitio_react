import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import RegisterForm from './RegisterForm';
function Register(){
    return(
<>
<NavBar/>
  <Content title="Registro" >
<RegisterForm/>

 </Content>
    <Footer/>
</>


    );
}

export default Register;