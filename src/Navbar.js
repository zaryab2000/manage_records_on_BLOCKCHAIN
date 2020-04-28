import React ,{Component}from 'react';
import Web3 from 'web3';

import './App.css';

class Navbar extends Component{
	render(){
		return(
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h3 className="text-light">RECORD MANAGER</h3>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">   <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#" className="text-light">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <small className="text-dark">Public Key: </small>
      <small className="text-light">{this.props.accounts}</small>
    </form>
  </div>
</nav>


	)
	}
}

export default Navbar;