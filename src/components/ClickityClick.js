// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
//   Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
//Updated react will allow us to create a state without constructor
//code below will let us do the same as code above

// state = {
//     hasBeenClicked: false
//   };

  handleClick = () => {
    // Update our state here...
    this.setState({
        hasBeenClicked: !this.state.hasBeenClicked
        //  !this.state.hasBeenClicked
        // !previousState.hasBeeenClicked
    },
    () => {
        console.log(this.state.hasBeenClicked)
    }
    )
    
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;