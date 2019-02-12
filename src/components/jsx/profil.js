import React, { Component } from 'react';
import '../css/profil.css';
import Axios from 'axios';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:"Ali Chami",
           photo:"https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5375ab7a-2a9d-11e8-908b-95a753c47952.png?crop=503%2C503%2C1%2C2&resize=320",
           job:"Farmer",
           review:"★★★☆☆",
           bio:" “My name is John Sullivan. I’m an HR professional with a decade of experience working within the intricacies of people management. Outside of work, I enjoy hiking with friends and family.”",
            activity:["ali 5dm andi","ali 5adem", "ali mouch hna"],
            hourPrice:50,
            hoursDay:5,
            desp:"active",
            adress:"janoub efri9ya",
            phone:55446611,
            _id:"5c60150e3a994e1bc08e3af2"
          };
    }
    getInformation=()=>{
        let ad ={};
        Axios.get('/users/'+this.state._id).then((res,err)=>{
            console.log(res.data.fullName);
             ad =Object.assign({},res.data);
             console.log(ad)
          
             this.setState({
                 name:res.data.fullName
              })
            
        })
    }
    render() {
        return (
            <div id="profil">
            <div id='Profil-Intro'>
<div className='image-profil'>
<div>
<img id='profil-img'src={this.state.photo} alt=''/>
<div className='activitee'>
                <h1>Activity</h1>
                <ul>
                    {this.state.activity.map(x=><li>{x}</li>)}
                    
                    
                </ul>
            </div>
</div></div>
<div >
<div className='det-profil'>
<h1>{this.state.name}</h1>
<div className='job-and-review'>
<p>{this.state.job}</p>
<p>Review: {this.state.review}</p>
</div>
<p id='bio'>{this.state.bio}</p>
</div><div>
<div className='sec-part-1'>
<span>Hour Price : <span>{this.state.hourPrice}</span></span>
<span>Hour/Day : <span>{this.state.hoursDay}</span></span>
<span>Availability : <span >{this.state.desp}</span></span>
<span>Adress : <span>{this.state.adress}</span></span>
<span>Phone Number : <span>{this.state.phone}</span></span>
</div>  
</div></div>


            </div>
           <button id='Order' onClick={()=> this.getInformation()}>Order</button>
           <button id='Edit'>Edit</button>
          
            </div>
        );
    }
}

export default Profil;
