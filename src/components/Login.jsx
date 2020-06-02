
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
function Login(){
    return(

<>
 <NavBar/>
    <section>


    <div class="formulario">
    <header>
        <h2>Ingreso</h2>

        </header>
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
            <div>
        <label>Contraseña</label>
            <i class="fas fa-lock" ></i>
            <input type="password" placeholder="Ingrese contraseña" />
                </div>
            <button class="boton">Ingresar</button>
            

        </form>
           <div class ="link">
       <p >Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>


                </div>
        <div class="link">

            <p >No estas registrado?</p>   <a href="registro.html">Registrar</a>
        </div>


        </div>
          </section>
          <Footer/>

    </>





    );
}


export  default Login;



 