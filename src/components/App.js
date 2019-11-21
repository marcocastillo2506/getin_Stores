import React, { Component } from 'react';

import Table from './Stores/Table.js';

class App extends Component {
  render(){
    return(
    <div>
      <div><img style={{width:'20%',marginLeft:'24%'}} src='https://getin.mx/assets/imgs/seo/getin-logo-twitter.jpg' /></div>
      <Table />
    </div>
    )
  }
}

export default App;
