import React from 'react';
import NavBar from './NavBar';
function Register(){
    return(
<>
<NavBar/>
    <section>
        


 <div class="formulario">
            <header>
            <h2>Registro de usuario</h2>
                   
            </header>

           <form class="register">
               <div>
               <label>Correo</label>
                <i class="fas fa-at"></i>

                   <input type="email"  placeholder="Ingrese correo"/>
                </div>
               <div>
               <label>Usuario</label>
              <i class="fas fa-user" aria-hidden="true" ></i>
               <input type="text" placeholder="Ingrese nombre de usuario"/>
               </div>
               <div>
               <label>Contraseña</label>
                <i class="fas fa-lock" ></i>
                    <input id="password" type="password" placeholder="Ingrese contraseña" minlength="4" maxlength="8" />
                  

               </div>
                 <div>
               <label>Confirme contraseña</label>
                <i class="fas fa-lock" ></i>
                    <input id="confirmacion" type="password" placeholder="Ingrese contraseña" />
                          

               </div>
               <div>
               <label>Navegadores Preferidos</label>
               <select required>
                   <option value=""disabled selected>Seleccione...</option>
                   <option value="google_chrome"> Google Chrome </option>
                     <option value="moziila_firefox"> Mozilla Firefox </option>
                     <option value="safari"> Safari</option>
                     <option value="microsoft-edge"> Microsoft Edge </option>

                   </select>


               </div>
               <div>
               <label class="d1">Descripción</label>
                   <textarea rows="8"></textarea>


               </div>
               <div>
               <label>Lenguaje de Programación Preferido</label>
                   <input list="lenguajes"/>
                   <datalist id="lenguajes">
                <option>Javascript</option>
                 <option>Python</option>
                       <option>Java</option>

                   </datalist>

               </div>
               <div>

               <label>Edad</label>
            <input type="number" min="1" max="150"/>


               </div>
              


             <button class="boton" >Registrar</button>
        </form>
             <div class ="link">
      <p >Estas registrado?</p>  <a href="login2.html">Login</a>

                </div>


             </div>
          </section>
    <footer/>
</>


    );
}

export default Register;