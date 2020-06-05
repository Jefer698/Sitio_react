import React from 'react';
import InputLine from './InputLine';
export default function LoginForm(){

    return(
<>
<form >
           <InputLine label="Correo" type="email" placeholder="Ingrese correo" required={true}/>
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

    );
}