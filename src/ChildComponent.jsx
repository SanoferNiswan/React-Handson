const ChildComponent = ({ parentMessage, sendToParent }) => {
    const sendMessage = () => {
      sendToParent('Hello from "Child Function Component!"');
    };
  
    return (
      <div>
        <h3>Child Function Component</h3>
        <p>Message from Parent: {parentMessage}</p>
        <button onClick={sendMessage}>Send Message to Parent</button>
      </div>
    );
  };
  
  export default ChildComponent;
  