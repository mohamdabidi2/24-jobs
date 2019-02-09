import React, { Component } from 'react';
import '../css/home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
product:[{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"},

{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"},

{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"},

{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"},

{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"},
{title:"omar Gargouri",Type:"full-stack-js",img:"https://images.pexels.com/photos/33266/work-chinese-industrial-professional.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",review:"★ ★ ★ ★ ★",price:"20£"}
]
        };
    }
    render() {
        return (
            <div>
               
                <div className='home-intro'>
                    <div className='categorie'>
                        <h1>All categories</h1>

                        <span className='Agriculture'>Agriculture<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                        </ul></span>
                        <span className='Agriculture'>Security<ul className='Agriculture-drop-menu'>
                            <li>concierge</li>
                            <li>Personal guard</li>
                           
                        </ul></span>
                        <span className='Agriculture'>Art<ul className='Agriculture-drop-menu'>
                            <li>painter</li>
                            <li>sculptor</li>
                            <li>Carpenter</li>
                            <li>forgeron</li>
                        </ul></span>
                        <span className='Agriculture'>Sustainable construction<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                        </ul></span>
                        <span className='Agriculture'>Transport<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                        </ul></span>
                        <span className='Agriculture'>Sport<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                        </ul></span>
                        <span className='Agriculture'>Architect<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                        </ul></span>
                        <span className='Agriculture'>Industry<ul className='Agriculture-drop-menu'>
                            <li>A farmer</li>
                            <li>Tractor worker</li>
                            <li>Bulldozer worker</li>
                            <li>Distinguished workers</li>
                            <li></li>
                        </ul></span>
                        <span className='Agriculture'>Other</span>
                        <hr width='90%' color='white' height='1px'/>
                        <div className='price-box'>
                            <label id='price' for='checkbox'>Price</label>
                            <input type='checkbox' id='checkbox' />

                            <div className='price-filter'>
                                <input type='text' placeholder='max' />
                                <input type='text' placeholder='min' />
                            </div>
                        </div>


                    </div>
                    <div id='introduction-slide-show'>
                    <div id="slideshow">
	<ul id="sContent">
		<li><img height='500px' src="https://i.imgur.com/yZTTTEG.jpg" /></li>
        <li><img  height='500px' src="https://i.imgur.com/yZTTTEG.jpg" /></li>
        <li><img  height='500px' src="https://i.imgur.com/yZTTTEG.jpg" /></li>

	</ul>
</div>
                        <h1 id='our-av'>Our Available Partners</h1>
                        <hr width='350px' color='#26272B' height='8px'/>
<div id='products'>

                        {this.state.product.map(x => {
          return (  <div id='product'>

          <sapn  id='product-title'>{x.title}</sapn>
          <span id='product-title'>{x.Type}</span>
          <img id='Product-img' src={x.img} alt='' />
          <span id='Product-rank'>{x.review}</span>
          <div className='spacial-one'>
              <span id='Product-price'>{x.price}/jour</span>
              <span id='Product-more'>more</span>
          </div>

      </div>
)
        })}
        </div>
                      


                    </div>

                </div>

            </div>
        );
    }
}

export default Home;