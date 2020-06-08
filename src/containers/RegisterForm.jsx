import React from 'react';
import InputLine from '../components/InputLine';
import SelectLine from '../components/SelectLine';
import TextareaLine from '../components/TextareaLine';
import OutputLine from '../components/OutputLine';
import {validateEmail,validatePassword,validateConfirmation,isEmpty} from '../utils/validations';
const browsers=[
{value:'',label:'Seleccione...'},
{ value:'Google_Chrome', label:'Google Chrome'},
{ value:'Mozilla_Firefox', label:'Mozilla Firefox'},
{ value:'Safari', label:'Safari'},
{ value:'Microsoft_Edge',label:'Microsoft Edge'}

];

const languages={
id:'lenguajes',
options:['Javascript','Python','Java']

};

export default class RegisterForm extends React.Component{
    state={
        registerData: {
            email:'',
            password:'',
            confirmation:'',
            browser:'',
            age:'',
            description:'',
            language:'',
            currentDate:'27/05/2020'


        },
        errors: {
            email:false,
            password:false,
            confirmation:false,
            browser:false,
            age:false,
            description:false,
            language:false,
            
        }
    };
    
    
        doRegister = (event) => {
    
       const {email,
       password,
       confirmation,
       browser,
       age,
       description,
       language,
       }=this.state.registerData;

       const emailError= !validateEmail(email);
       const passwordError= !validatePassword(password,email);
       const confirmationError= !validateConfirmation(confirmation,password);
       const browserError= isEmpty(browser);
       const ageError= isEmpty(age);
       const descriptionError= isEmpty(description);
       const languageError= isEmpty(language);
    
    
    
    this.setState({
    errors: {
            email:emailError,
            password:passwordError,
            confirmation:confirmationError,
            browser:browserError,
            age:ageError,
            description:descriptionError,
            language:languageError,
        
    }
    
    });
        event.preventDefault();
    }
    onChange = (name,event) => {
        const value = event.target.value;
        const registerData= Object.assign({},this.state.registerData)
       registerData[name]=value
       this.setState({
           registerData
       });
    }

    render(){
        const {
            email,
            password,
            confirmation,
            browser,
            age,
            description,
            language,
            currentDate}=this.state.registerData;
        const {errors}=this.state;

    return(

<>
<form >
           <InputLine 
            name="email"
           label="Correo" 
           type="text" 
           placeholder="Ingrese correo" 
           required={true}
            error={errors.email}
            onChange={this.onChange}
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
           error={errors.password}
           onChange={this.onChange}
           value={password}
           />
           <InputLine
            name="confirmation"
           label="Confirme Contraseña" 
           type="password" 
           placeholder="Ingrese contraseña" 
           required={true} 
           minLength={4} 
           maxLength={8} 
           error={errors.confirmation}
           onChange={this.onChange}
           value={confirmation}
           /> 
                
                    
            <SelectLine 
            name="browser"
              label="Navegador Preferido"
              options={browsers} 
              required={true} 
              step="any"
             error={errors.browser} 
             onChange={this.onChange}
             value={browser}
              />            

               
           
            <InputLine 
            name="age"
            label="Edad" 
            type="number"
            min={1}
            max={150}
            error={errors.age}
            onChange={this.onChange}
            value={age}
            />
            <TextareaLine 
            name="description"
            label="Descripción" 
            rows="8" 
            placeholder="Texto ejemplo"
            error={errors.description}
            onChange={this.onChange}
            value={description}
            />

            <InputLine 
            name="language"
            label = "Lenguaje de Programacion Preferido"  
            type="text"
            list={languages}
            required={true}
            error={errors.language}
            onChange={this.onChange}
            value={language}
            />
            
     <OutputLine 
     label="Fecha de hoy" 
     value={currentDate}/>
     <button onClick={this.doRegister} className="boton" >Registrarse</button>
 
        </form>
      
             <div className ="link">
      <p >Estas registrado?</p>  <a href="login2.html">Ingresar</a>

                </div>


            </>

    );
}
}
