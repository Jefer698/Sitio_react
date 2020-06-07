import React from 'react';
import InputLine from './InputLine';
import SelectLine from './SelectLine';
import TextareaLine from './TextareaLine';
import OutputLine from './OutputLine';
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

export default class RegisterForm extends React.component{
    state={
        registerData: {
            email:'',
            password:'',
            confirmation:'',
            browser:'',
            age:'',
            description:'',
            language:'',
            currentDate:''


        },
        errors: {
            email:false,
            password:'',
            confirmation:'',
            browser:'',
            age:'',
            description:'',
            language:'',
            currentDate:''
        }
    };
    
    isEmpty = (value) => {
        return value.trim() === '';
        /*
        if(value ==='') {
            return true;
        }
        else{
            return false;
        }*/
    }
    
        doLogin = (event) => {
    
       const {email , password}=this.state.loginData;
       const emailError= this.isEmpty(email);
       const passwordError= this.isEmpty(password);
    
    console.log('Email error: '+emailError);
    console.log('Password error: '+passwordError);
    
    this.setState({
    errors: {
        email:emailError,
        password:passwordError
    }
    
    });
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
           <InputLine label="Correo" type="email" placeholder="Ingrese correo" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minLength={4} maxLength={8}/>
           <InputLine label="Confirme Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minLength={4} maxLength={8} /> 
                
                    
              <SelectLine label="Navegador Preferido"options={browsers} required={true} step="any"/>            

               
           
            <InputLine label="Edad" type="number"min={1}max={150}/>
            <TextareaLine label="Descripción" rows="8" placeholder="Texto ejemplo"/>

            <InputLine label = "Lenguaje de Programacion Preferido"  
            type="text"
            list={languages}
            required={true}/>
            
     <OutputLine label="Fecha de hoy" value="04/06/2020"/>
     <button className="boton" >Registrarse</button>
 
        </form>
      
             <div className ="link">
      <p >Estas registrado?</p>  <a href="login2.html">Ingresar</a>

                </div>


            </>

    );
}
}