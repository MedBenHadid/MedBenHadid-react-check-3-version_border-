import React, { Component } from 'react';

import Member from './components/member';
import img1 from './images/yahya.JPG';
import img2 from './images/amine.JPG';
import img3 from './images/arsslen.JPG';
import img4 from './images/sameh.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
     <center>
        <h1>Notre équipe</h1>
        <Member value="h" name="yahya" role="web" image={img1} />
        <Member value="h" name="amine" role="web" image={img2}/>
        <Member value="f" name="arsslen" role="web" image={img3}/>
        <Member value="f" name="semah" role="web" image={img4}/>
     </center>                                
    );
  }
}

export default App;
