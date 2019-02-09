import React, { Component } from 'react';
import '../css/profil.css';
class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profil:[{name:"ali chami",photo:"",job:"alimanteur",review:"******",bio:"ali weld 3am moulla il bash",
            activity:["ali 5dm andi","ali 5adem", "ali mouch hna"],hourPrice:50,hoursDay:5,desp:"active",adress:"janoub efri9ya",phone:55446611}]
          };
    }
    render() {
        return (
            <div>
            <div id='Profil-Intro'>
<div className='image-profil'>
<img id='profil-img'src='' alt=''/>
</div>
<div className='det-profil'>
<h1>Name</h1>
<div className='job-and-review'>
<p>Job</p>
<p>Review</p>
</div>

</div>
<div>
    
</div>

            </div>
            <p>bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    
            bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    bio15    
            </p>
            <div id='act-para'>
            <div>
                <h1>Activity</h1>
                <ul>
                    <li>edfzefzef</li>
                    <li>edfzefzef</li>
                    <li>edfzefzef</li>
                </ul>
            </div>
            <div className='sec-part'>
            <div className='sec-part-1'>
<span>Hour Price</span>
<span>Hour/Day</span>
<span>Availability</span>
<span>Adress</span>
<span>Phone Number</span>
</div>
<div className='sec-part-2'>
<span>20 DT</span>
<span>5</span>
<span>Active</span>
<span>dar bil kraa</span>
<span>55446611</span>
</div>

            </div>
            </div>
            </div>
        );
    }
}

export default Profil;
