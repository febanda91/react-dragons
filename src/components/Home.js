import React, { Component } from 'react'
import DragonCard from './DragonCard'

class Home extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>

            
            <h1>Home</h1>
            {this.props.dragons.map(dragon => 
            <DragonCard key={dragon.id} selectedDragon={dragon} warMode={this.props.sendToWar}
            />)}
            
        </div>
        )
    }

}

export default Home