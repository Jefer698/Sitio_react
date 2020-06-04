import React from 'react';
import InputLine from './InputLine';
import SelectLine from './SelectLine';

const browsers=[
{value:'',label:'Seleccione...'},
{ value:'Google_Chrome', label:'Google Chrome'},
{ value:'Mozilla_Firefox', label:'Mozilla Firefox'},
{ value:'Safari', label:'Safari'},
{ value:'Microsoft_Edge',label:'Microsoft Edge'}

];

export default function RegisterForm(){
    return(

<>
<form >
           <InputLine label="Correo" type="email" placeholder="Ingrese correo" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minlength={4} maxlength={8}/>
           <InputLine label="Confirme Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minlength={4} maxlength={8} /> 
                
                    
              <SelectLine label="Navegador Preferido"options={browsers}/>            

               
           
            <InputLine label="Edad" type="number"min={1}max={150}/>
            


     
               <div>
               <label >Descripción</label>
                   <textarea rows="8">Texto Ejemplo</textarea>


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