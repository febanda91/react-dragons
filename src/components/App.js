import React, { Component } from "react";
import War from "./War";
import Home from "./Home";

let updateElementInArray = (array, id, values) => {
  return array.map(element => {
      if(element.id == id) {
          return {...element,...values}
      } else{
          return element
      }
  })
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      dragons: [],
      atWar: false,
      dragonSearch: ""
    };
  }


  sendDragonToWar = (id) => {
    this.setState({dragons: updateElementInArray(this.state.dragons, id, {atWar: true})})
  }

  sendDragonHome = (id) => {
    this.setState({dragons: updateElementInArray(this.state.dragons, id, {atWar:false})})
  }


  // handleSearch = (dragonSearch) => {
  //   this.setState({dragonSearch})
  // }

  // filterDragons = () => {
  //   return this.state.dragons.filter(dragon => {
  //     dragon.name.includes(this.state.dragonSearch)
  //   })
  // }


  componentDidMount() {
    fetch("http://localhost:3001/dragons")
      .then(res => res.json())
      .then(dragons => {
        this.setState({
          dragons: dragons
        });
      });
  }



  render() {
    let dragonsAtHome = this.state.dragons.filter(dragon => !dragon.atWar)
    let dragonsAtWar = this.state.dragons.filter(dragon => dragon.atWar)
    return (
      <div>
        <Home dragons={dragonsAtHome} sendToWar={this.sendDragonToWar}/>
        <War dragons={dragonsAtWar} sendHome={this.sendDragonHome}/>
      </div>
    );
  }
}

export default App;
