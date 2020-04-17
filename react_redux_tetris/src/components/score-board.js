import React, { Component } from 'react'

class ScoreBoard extends Component {

  render() {
    return (
      <div className="score-board">
        <div>Score:{ this.props.score }</div>
        <div>Level: 1</div>

        <button className="score-board-button" onClick={(e) => {

        }}>Play</button>

        <button className="score-board-button" onClick={(e) => {

        }}>Restart</button>

      </div>
    )
  }
}

export default ScoreBoard