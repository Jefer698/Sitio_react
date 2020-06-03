import React from 'react';
import InputLine from './InputLine';

export default function RegisterForm(){
    return(

<>
<form >
           <InputLine label="Correo" type="email" placeholder="Ingrese correo" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minlength={4} maxlength={8}/>
           <InputLine label="Confirme Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minlength={4} maxlength={8} /> 
                
                    
                          

               
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

            <label>Edad</label>
            <input type="number" min="1" max="150"/>


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
              
              


             <button class="boton" >Registrarse</button>
        </form>
             <div class ="link">
      <p >Estas registrado?</p>  <a href="login2.html">Ingresar</a>

                </div>


            </>

    );
}