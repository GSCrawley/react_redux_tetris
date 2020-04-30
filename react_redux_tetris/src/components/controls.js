import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

class Controls extends Component {

  render() {
    const { isRunning } = this.props

    return (
      <div className="controls">
        {/* left */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveLeft()
        }}>Left</button>

        {/* right */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveRight()
        }}>Right</button>

        {/* rotate */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.rotate()
        }}>Rotate</button>

        {/* down */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveDown()
        }}>Down</button>

      </div>
    )
  }
  }
  const mapStateToProps = (state) => {
    return {
      isRunning: state.game.isRunning,
      gameOver: state.game.gameOver
    }
  }
  const mapDispatchToProps = () => {
    return {
        moveRight,
        moveLeft,
        moveDown,
        rotate
  }
}
export default connect(mapStateToProps, mapDispatchToProps())(Controls)