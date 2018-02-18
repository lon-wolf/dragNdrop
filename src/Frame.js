import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card'

const style = {
  width: 800,
}

class Frame extends Component {

  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Row 1',
        },
        {
          id: 2,
          text: 'Row 2',
        },
        {
          id: 3,
          text: 'Row 3',
        },
        {
          id: 4,
          text: 'Row 4',
        },
        {
          id: 5,
          text: 'Row 5',
        },
        {
          id: 6,
          text: 'Row 6',
        },
        {
          id: 7,
          text: 'Row 7',
        },
        {
          id: 8,
          text: 'Row 8',
        },
      ],
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    const { cards } = this.state

    return (
      <div class="container">
      <div class="center">
      {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={this.moveCard}
          />
        ))}
      </div>
      </div>
    )
  }

}

export default DragDropContext(HTML5Backend)(Frame);
