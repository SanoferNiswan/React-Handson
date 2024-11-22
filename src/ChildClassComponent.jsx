import  { Component } from "react";

class ChildClassComponent extends Component {
  sendMessage = () => {
    this.props.sendToParent("Hello from \" Child Class Component! \" ");
  };

  render() {
    const { parentMessage } = this.props;
    return (
      <div>
        <h3>Child Class Component</h3>
        <p>Message from Parent: {parentMessage}</p>
        <button onClick={this.sendMessage}>Send Message to Parent</button>
      </div>
    );
  }
}


export default ChildClassComponent;
