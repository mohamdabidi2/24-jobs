import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName:"",
          phone:"",
          password:"",
          mail:"",
          job:"",
          profil:"",
          success:false
           }
    }

    hundleChange=(e)=>{
      this.setState({
        [e.id] :e.value
      })
      
    }

    register = () =>{
      
const {fullName,phone,password,mail,job,user} = this.state
if(fullName.length>5 && !isNaN(phone) && phone.length === 8 && password.length>5){

    axios.post("users/add",{"user":this.state}).then(res=>{
      console.log("hhhhh");
       this.setState({
         success:true
       })
  
  
       })
    
      }else{
alert('error !')
      }
    }
update =() =>{
  const {fullName,phone,password,mail,id} = this.state

  axios.put('/users/update/'+{fullName,phone,password,mail,id}).then (res =>{
    console.log(res)
  })

}
// delate =()=>{
//   const {fullName,phone,password,mail,id} = this.state
//   axios.delete('/users/delete/'+this.state.id,{fullName,phone,password,mail,id}).then (res =>{
//       console.log(res)
//       })
// }

    render() { 
        return ( 
            <div className="login-form" id="register">
           
             <div className="form-row">
              <input
              value={this.state.fullName}
              id="fullName"
              onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="nom & prenom" className="form-input" />
              <i id="phone" className="fa fa-user" />
            </div>
            <div className="form-row">
              <input
              value={this.state.phone}
             
              id="phone"
              onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="télephone" className="form-input" />
              <i id="phone" className="fa fa-phone" />
            </div>
            <div className="form-row">
              <input
                value={this.state.password}
                id="password"
                onChange={(e)=>this.hundleChange(e.target)}
                type="text"
                placeholder="mot de passe"
                className="form-input"
              />
              <i className="fa fa-key" />
            </div>
            <div className="form-row">
              <input 
                value={this.state.mail}
                id="mail"
                onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="e-mail" className="form-input" />
            
            </div>
            <div className="form-row">
              <input 
                value={this.state.job}
                id="job"
                onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="job" className="form-input" />
              <i id="job" className="fa fa-envelope" />
            </div>
            <button
            onClick={()=>this.register()}
            className="form-btn">enregister</button>
          </div>
         );
    }
}
 


export default Register;