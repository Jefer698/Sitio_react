import React from 'react';
import InputLine from './InputLine';

export default class LoginForm extends React.Component{
state={
    loginData:{
        email:'',
        password:''
    }
};


    doLogin = (event) => {
   console.log(this.state);

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
    return(
        <>
        <form >
                   <InputLine name="email" label="Correo" type="email" placeholder="correo@ejemplo.cl" required={true} onChange={this.onChange}/>
                   <InputLine name="password" label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minLength={4} maxLength={8} onChange={this.onChange}/>
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