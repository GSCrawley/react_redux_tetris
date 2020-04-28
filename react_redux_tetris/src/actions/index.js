export const PAUSE      = "PAUSE"       // Pause the game
export const RESUME     = "RESUME"      // Resume a paused game
export const MOVE_LEFT  = "MOVE_LEFT"   // Move piece left
export const MOVE_RIGHT = "MOVE_RIGHT"  // Move piece right
export const ROTATE     = "ROTATE"      // Rotate piece
export const MOVE_DOWN  = "MOVE_DOWN"   // Move piece down
export const GAME_OVER  = "GAME_OVER"   // The game is over
export const RESTART    = "RESTART"     // Restart Game

export const moveRight = () => {
    return { type: MOVE_RIGHT }
  }
  
  export const moveLeft = () => {
    return { type: MOVE_LEFT }
  }
  
  export const rotate = () => {
    return { type: ROTATE }
  }
  
  export const moveDown = () => {
    return { type: MOVE_DOWN }
  }
  
  export const pause = () => {
    return { type: PAUSE }
  }
  
  export const resume = () => {
    return { type: RESUME }
  }
  
  export const restart = () => {
    return { type: RESTART }
  }

  // Returns the next rotation for a shape
// rotation can't exceed the last index of the the rotations for the given shape.
  export const nextRotation = (shape, rotation) => {
    return (rotation + 1) % shapes[shape].length
  }

  export const canMoveTo = (shape, grid, x, y, rotation) => {
    const currentShape = shapes[shape][rotation]
  // Loop through all rows and cols of the **shape**
    for (let row = 0; row < currentShape.length; row++) {
      for (let col = 0; col < currentShape[row].length; col++) {
          // Look for a 1 here
          if (currentShape[row][col] !== 0) {
              // x offset on grid
              const proposedX = col + x
              // y offset on grid
              const proposedY = row + y
              if (proposedY < 0) {
                  continue
              }
              // Get the row on the grid
              const possibleRow = grid[proposedY]
              // Check row exists
              if (possibleRow) {
                  // Check if this column in the row is undefined, if it's off the edges, 0, and empty
                  if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
                      // undefined or not 0 and it's occupied we can't move here.
                      return false
                  }
              } else {
                  return false
              }
          }
      }
  }
  return true
}