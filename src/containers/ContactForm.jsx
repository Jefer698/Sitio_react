import React from 'react';
import InputLine from '../components/InputLine';
import TextareaLine from '../components/TextareaLine';
import {validateEmail,isEmpty,validateName} from '../utils/validations';

export default class ContactForm extends React.Component{
state={
    contactData:{
    email:'',
    name:'',
    comments: ''
    },

errors:{
    email:false,
    name:false,
    comments:false
}
}

doContact=(event)=>{
    const{
        email,
        name,
        comments}=this.state.contactData;
    
    const emailError=!validateEmail(email);
    const nameError=!validateName(name,email);
    const commentsError=isEmpty(comments);

this.setState({
    errors:{
    email:emailError,
    name:nameError,
    comments:commentsError
}
});
event.preventDefault();
}
onChange = (name,event) => {
    const value = event.target.value;
    const contactData= Object.assign({},this.state.contactData)/*Object.assign para copiar unn objeto*/
   contactData[name]=value
   this.setState({
       contactData
   });
}



    render(){

    const{
        email,
        name,
        comments
    }=this.state.contactData;
    const{errors}=this.state;
    return(
<form>

        <InputLine 
                   name="email" 
                   label="Correo" 
                   type="email" 
                   placeholder="correo@ejemplo.cl" 
                   required={true}
                   error={errors.email}
                   onChange={this.onChange}
                   value={email}
                    />
        <InputLine 
                    
                    name="name"
                   label="Nombre" 
                   type="text" 
                   placeholder="Ingrese nombre" 
                   required={true}
                    error={errors.name}
                    onChange={this.onChange}
                    value={name}
                   />
        <TextareaLine 
            name="comments"
            label="Comentarios" 
            rows="8" 
            placeholder="Texto ejemplo"
            error={errors.comments}
            onChange={this.onChange}
            value={comments}
            />
            
        
 <button className="boton" onClick={this.doContact}>Enviar Solicitud</button>

</form>
     );
    }}
