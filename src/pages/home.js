import React from 'react';
// import { add } from '../lib/utils.js'

class App extends React.Component {
  componentDidMount() {
    import("../lib/utils").then(utils => {
      console.log(utils.add(1,2));
    })
    // console.log(add(1,2));
  }
  render() {
    return <h2>Home</h2>;
  }
}

export default App;