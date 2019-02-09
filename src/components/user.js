import axios from 'axios'
import React, { Component } from 'react';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
    full_name:" zied",
     mail:"ziedncir@hjh",
     password:"vqsvdv",
     job:"dvddv",
    review:"dvdvd",
     hour_price:"srfgr",
     hour_day:"fegre",
     bio:"regre",
     adress:"regre",
     desponibilite:"true",
     num_tel:"rgar",
     activity:"rgarg",
     succes:false
         };
    }
    handleChange=(e) => {
        this.setState({
            [e.id]: e.value
        })
    } 
    register = () => {
        const {full_name,mail,password,job,review,hour_price} = this.state
        axios.post("/users/add", {"user":this.state}).then(res => {
            console.log(this.state)
            this.setState({
                succes:true
            })
        })
    }
    render() {
        return (
            <div>
                <label for='full_name'>full_name</label>
                <input id='full_name' type='text'/>
                <label for='mail'>mail</label>
                <input id='mail' type='text'/>
                <label for='password'>password</label>
                <input id='password' type='text'/>
                <label for='job'>job</label>
                <input id='job' type='text'/>
                <label for='review'>review</label>
                <input id='review' type='text'/>
                <label for='hour_price'>hour_price</label>
                <input id='hour_price' type='text'/>
                <label for='hour_day'>hour_day</label>
                <input id='hour_day' type='text'/>
                <label for='bio'>bio</label>
                <input id='bio' type='text'/>
                <label for='adress'>adress</label>
                <input id='adress' type='text'/>
                <label for='desponibilite'>desponibilite</label>
                <input id='desponibilite' type='text'/>
                <label for='num_tel'>num_tel</label>
                <input id='num_tel' type='text'/>
               <button onClick={()=>this.register()}> dez gadi </button>
                
            </div>
        );
    }
}

export default User;