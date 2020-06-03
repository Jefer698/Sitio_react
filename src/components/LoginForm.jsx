import React from 'react';
import InputLine from './InputLine';
export default function LoginForm(){

    return(
<>
<form >
           <InputLine label="Correo" type="email" placeholder="Ingrese correo" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minlength={4} maxlength={8}/>
            <button class="boton">Ingresar</button>
            

        </form>
           <div class ="link">
       <p >Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>


                </div>
        <div class="link">

            <p >No estas registrado?</p>   <a href="registro.html">Registrar</a>
        </div>
</>

    );
}