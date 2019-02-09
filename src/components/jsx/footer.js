import React, { Component } from 'react';
import '../css/footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='foooter'>
 <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">At 24-jobs.tn, we believe everyone deserves<br/> to have a 
Services en ligne or online Service store.<br/>  Innovation and simplicity makes us happy:<br/>  our goal is to remove any technical or financial barriers<br/>  that can prevent business owners from making their Projects.<br/>  We're excited to help you on your journey!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">Agriculture</a></li>
              <li><a href="">Security</a></li>
              <li><a href="">Art</a></li>
              <li><a href="">Sustainable construction</a></li>
              <li><a href="">Transport</a></li>
              <li><a href="">Architect</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li><a href="">Home</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Be one of us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2019 All Rights Reserved by 
         <a href="#"> 24-jobs.tn</a>.
            </p>
          </div>

        
        </div>
      </div>
</footer>
            </div>
        );
    }
}

export default Footer;