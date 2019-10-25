import React, { Component } from 'react';
import header from './components/header';
import Cards from './components/cards';
import footer from './components/footer';
import list from './components/cards/list.json';
import NavBar from './components/navbar/index';


class App extends Component {

    state = {
        score: 0,
        topScore: 0,
        messageClass: "",
        message: "Click to begin!"
    }

    updateScore = () => {
        this.setState(prevState => ({
            score: ++prevState.score
        }))
    }



    render() {
        return (
            <div>

                <NavBar
                    gameScore={this.state.score}
                    gameTopScore={this.state.topScore}
                    gameMessage={this.state.message}
                    gameMessageClass={this.state.messageClass}
                />
                <header />

                <Cards updateScore={this.updateScore} />
                <footer />
            </div>
        );



    }


}

export default App;