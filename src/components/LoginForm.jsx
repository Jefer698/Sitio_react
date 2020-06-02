import React from 'react';


export default function LoginForm(){

    return(
<>
<form >
            <div>
        <label>Correo</label>
        <i class="fas fa-user" aria-hidden="true"></i>
        <input type="email" placeholder="Ingrese correo"/>
                </div>
            <div>
        <label>Contraseña</label>
            <i class="fas fa-lock" ></i>
            <input type="password"placeholder="Ingresa contraseña"/>
                </div>
            
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