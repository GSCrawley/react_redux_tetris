import React, { Component } from 'react'
import GridSquare from './grid-square'

// Represents a 10 x 18 grid of grid squares

class GridBoard extends Component {

  // generates an array of 18 rows, each containing 10 GridSquares.
  makeGrid() {
    const grid = []
    for (let row = 0; row < 18; row ++) {
      grid.push([])
      for (let col = 0; col < 10; col ++) {
        grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
      }
    }

    return grid
  }

  // The components generated in makeGrid are rendered in div.grid-board
  render () {
    return (
      <div className='grid-board'>
        {this.makeGrid()}
      </div>
    )
  }
}

export default GridBoard