import React, { Component, useEffect } from 'react';
import './cards.css';
import listData from '../cards/list.json'


class Card extends Component {
    state = { 
        list: null
     };

    componentDidMount() {
        const newListData = listData.map(item => ({ ...item, clicked: false }));
        this.setState({ list: newListData }, this.shuffleCard);
    }

    handleCardOnClick = cardIndex => {
        const selectedCard = this.state.list[cardIndex];
        console.log(selectedCard);

        if (!selectedCard.clicked) {
            this.setState(prevState => {
                const newList = this.state.list.map(item => {
                    if (item.id === selectedCard.id) {
                        item.clicked = true;
                    }
                    return item;
                });

                return {
                    list: newList                        
                }
            }, () => {
                this.props.updateScore();
                this.shuffleCard();
            });
        } else {
            // end game
            alert(`You clicked this card already!!`);
        }
    }

    shuffleCard = () => {
        const list = this.state.list;
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
        this.setState({ list });
    };

    render() {
        return (
            <main className='container'>
                {this.state.list && this.state.list.map((card, cardIndex) => (
                    <div
                        id="carddiv"
                        key={card.id}
                    >
                        <img
                            src={card.url}
                            aria-label='click item'
                            style={{
                                backgroundImage: `url(${card.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                            onClick={() => this.handleCardOnClick(cardIndex)}
                        />
                    </div>
                ))}
            </main>
        );
    }
}

export default Card;