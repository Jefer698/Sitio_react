import React from 'react';

import './App.css';

function App() {
  return (

    <>
   <header>
      <nav>
       <ul>

        <li> <a href="#">Contacto</a></li>

          </ul>

       </nav>


      </header>
      <section>


      <div class="tarjeta">
      <header>
          <h2>Ingreso</h2>

          </header>
          <form class="login">
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
              <label>FECHA</label>

          </form>
             <div class ="link">
         <p class="mensaje">Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>


                  </div>
          <div class="link2">

              <p class="mensaje2">No estas registrado?</p>   <a href="registro.html">Registrar</a>
          </div>


          </div>
            </section>

      </>



  ) ;
}

export default App;
