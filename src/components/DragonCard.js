import React, { Component } from 'react';

class DragonCard extends Component {
    render() {
        const warButton =  <button onClick={() => this.props.warMode(this.props.selectedDragon.id)}>Send to War!</button>
        const homeButton =  <button onClick={() => this.props.homeMode(this.props.selectedDragon.id)}>Send Home!</button>
        return (
            <div className="ui card">
                <h1>Dragon Name: {this.props.selectedDragon.name}</h1>
                <p>Description: {this.props.selectedDragon.description}</p>
                <img src={this.props.selectedDragon.image} width="200" height="200"></img>
                {this.props.selectedDragon.atWar == false ? warButton : homeButton}
            </div>
        );
    }
}

export default DragonCard;