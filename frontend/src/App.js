import React from 'react';
import axios from 'axios';

//import logo from './logo.svg';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  state = {
    blockchainInfo: {},
    miningInfo: {},
    peerInfo: []
  };
  componentDidMount() {
    this.getBlockchainInfo();
    this.getMiningInfo();
    this.getPeerInfo();
  }
  getBlockchainInfo = () => {
    axios
      .get(`/api/getblockchaininfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockchainInfo: result });
      })
      .catch(err => console.log(err));
  };
  getMiningInfo = () => {
    axios
      .get(`/api/getmininginfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ miningInfo: result });
      })
      .catch(err => console.log(err));
  };
  getPeerInfo = () => {
    axios
      .get(`/api/getpeerinfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
 
  render() {
    return (
      <div className="App">
        <h1>Bitcoin API Data</h1>
        <p>Number of blocks: {this.state.blockchainInfo.blocks}</p>
        <p>Mining Difficulty: {this.state.miningInfo.difficulty}</p>
        <p>Number of Peers: {this.state.peerInfo.length}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// const onChange = (e)=>{
//   socket.emit('typing',{username:username})
//   }
//   useEffect(()=>{
//   socket.on('someoneTyping',(user)=>{
//   setTyping(user.username +' is typing…..')
//   });
//   },[])

export default App;

