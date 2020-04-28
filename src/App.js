import React ,{Component}from 'react';
import Web3 from 'web3';
import Navbar from './Navbar'
import Main from './Main';
import {SOCIAL_NETWORK_ABI, SOCIAL_NETWORK_ADDRESS} from './config'

import './App.css';

class App extends Component{
  componentWillMount(){
    this.detectMetamask()
    this.loadBlockchain()
  }
  async detectMetamask(){
   if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchain(){
    const web3 = window.web3
    const network = await web3.eth.net.getNetworkType()
    console.log(network)

    const contract =new web3.eth.Contract(SOCIAL_NETWORK_ABI, SOCIAL_NETWORK_ADDRESS)
    this.setState({contract})

    const accounts = await web3.eth.getAccounts()
    this.setState({
      account:accounts[0]
    })

   
    const count = await contract.methods.get_count().call()
    this.setState({count})    

    for(var i=1; i<=count; i++){
      const record = await contract.methods.contributorsList(i).call()
        this.setState({
          records: [...this.state.records, record]
        })
    }
  }

  constructor(props){
    super(props)
    this.state = {
      account:'',
      loading:true,
      count:0,
      contract : [],
      records : []

    }
  }

  
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className="container-fluid">
      <Navbar accounts={this.state.account}/>
      </div>
      <div className="container">
       <h1>SOCIAL NETWORK</h1>
       <h1>{this.state.count}</h1>
       <h3>{this.state.account}</h3>
       </div>
       <div>
         <Main records={this.state.records}/>
       </div>
      </header>
    </div>

   
  );
}
}

export default App;
