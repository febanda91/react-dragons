import React, { Component } from 'react'
import DragonCard from './DragonCard'
class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {this.props.dragons.map(dragon => 
            <DragonCard key={dragon.id} selectedDragon={dragon} homeMode={this.props.sendHome}
            />)}
            </div>
        )
    }

}

export default War