import React, {Component} from "react";

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    const {count} = this.state
    return (<div>
      <h1>Count - {count}</h1>
      <button onClick={() => this.count()}>Increment</button>
      <button onClick={() => this.incrementFive()}>Increment 5</button>
    </div>)
  }

  count() {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 5
    }))
  }

  incrementFive() {
    this.increment()
  }
}

export default Counter