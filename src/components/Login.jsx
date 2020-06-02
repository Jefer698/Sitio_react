
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import LoginForm from './LoginForm';

function Login(){
    return(

<>
         <NavBar/>
         <Content title="Ingreso" >
             <LoginForm/>
             </Content>
         <Footer/>

    </>





    );
}


export  default Login;



 