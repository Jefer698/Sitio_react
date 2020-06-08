import React from 'react';
import InputLine from '../components/InputLine';
import {validatePassword,validateEmail} from '../utils/validations';


export default class LoginForm extends React.Component{
state={
    loginData: {
        email:'test@hola.cl',
        password:''
    },
    errors: {
        email: false,
        password: false
    }
};



    doLogin = (event) => {

   const {
        email ,
        password}=this.state.loginData;
   const emailError= !validateEmail(email);
   const passwordError= !validatePassword(password,email);
  

console.log('Email error: '+emailError);
console.log('Password error: '+passwordError);

this.setState({
errors: {
    email:emailError,
    password:passwordError
}

});
    event.preventDefault();
}
onChange = (name,event) => {
    const value = event.target.value;
    const loginData= Object.assign({},this.state.loginData)
   loginData[name]=value
   this.setState({
       loginData
   });
}





    
render(){
    const{
        email,
        password}=this.state.loginData;
    const{errors}=this.state;
    return(
        <>
        <form >
                   <InputLine 
                   name="email" 
                   label="Correo" 
                   type="text" 
                   placeholder="correo@ejemplo.cl" 
                   required={true}
                    onChange={this.onChange}
                    error={errors.email}
                    value={email}

                    />
                   <InputLine
                    name="password" 
                    label="Contraseña"
                     type="password" 
                     placeholder="Ingrese contraseña"
                      required={true} 
                      minLength={4} 
                      maxLength={8} 
                      onChange={this.onChange}
                      error={errors.password}
                      value={password}
                      />
                    <button className="boton" onClick={this.doLogin}>Ingresar</button>
                    
        
                </form>
                   <div className ="link">
               <p >Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>
        
        
                        </div>
                <div className="link">
        
                    <p >No estas registrado?</p>   <a href="registro.html">Registrar</a>
                </div>
        </>
         );
}
   
}
/*
return(
<>
<form >
           <InputLine label="Correo" type="email" placeholder="correo@ejemplo.cl" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minLength={4} maxLength={8}/>
            <button className="boton">Ingresar</button>
            

        </form>
           <div className ="link">
       <p >Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>


                </div>
        <div className="link">

            <p >No estas registrado?</p>   <a href="registro.html">Registrar</a>
        </div>
</>
*/