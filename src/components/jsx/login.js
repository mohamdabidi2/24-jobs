import React, { Component } from 'react';
import axios from 'axios'
class Login extends Component {
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
         };
    }
    hundleChange=(e)=>{
        this.setState({
          [e.id] :e.value
        })
     
        
      }
      handlePrint() {
        if (this.refs.list_job) {
            this.setState({
                job:this.refs.list_job.value 
               
              })
              console.log(this.refs.list_job.value)
        }
      }
      register = (e) =>{
        e.preventDefault()
      
        const {fullName,phone,password,mail,job} = this.state
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
             login=(e)=>{
                 e.preventDefault();
                 const {email,password}=this.state;
            axios.post('/login',this.state).then(res=>{
                alert ("you can log");
                    
                }).catch(err =>
                    console.log (err))
             }
    render() {
        return (
        <div>
        <div>
            <h1>Login</h1>
            <form>
<label for='Email'>Email</label>
<input type='email' id="email"
 value={this.state.mail}
onChange={(e)=>this.hundleChange(e.target)}/>
<label for='password'>password</label>
<input type='password' id="password"
value={this.state.password}
onChange={(e)=>this.hundleChange(e.target)}/>
<div>
    <button onClick={(e)=>this.login(e)}>
Login</button>
<button value='reset'>Reset</button></div>
</form>
        </div>
        <div>
                       <h1>sign up </h1>
            <form>
<label for='fullname'>Full Name</label>
<input type='text' id="fullName" 
 value={this.state.fullName}
 onChange={(e)=>this.hundleChange(e.target)}/>  
<label for='Email'>Email</label>

<input type='mail' id="mail" 
 value={this.state.mail}
onChange={(e)=>this.hundleChange(e.target)}/>
<label for='password'>password</label>
<input type='password' id="password"
 value={this.state.password}
 onChange={(e)=>this.hundleChange(e.target)}/>

<label for='phone'>phone</label>
<input type='phone' id="phone"
 value={this.state.phone}
 onChange={(e)=>this.hundleChange(e.target)}/>
<label for='job'>job</label>
<select ref ="list_job" 
 value={this.state.job}
onChange={(e)=>this.handlePrint(e)} >
    <option id='job'>mou7ami</option>
    <option id='job'>moudir</option>
    <option id='job'>sare9 </option>
    <option id='job'>liis</option>
    <option id='job'></option>
    <option id='job'></option>
    <option id='job'></option>
    <option id='job'></option>


</select>
<div>
<button
            onClick={(e)=>this.register(e)}
            className="form-btn">enregister</button>
</div>
</form>        </div>
        </div>
        );
    }
}

export default Login;