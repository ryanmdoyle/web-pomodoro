import React, {Component} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      sessionRemaining: 25,
      breakRemaining: 5
    }
    this.addSession = this.addSession.bind(this);
    this.subSession = this.subSession.bind(this);
    this.addBreak = this.addBreak.bind(this);
    this.subBreak = this.subBreak.bind(this);
    this.startStop = this.startStop.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  addSession() {
    this.setState({
      sessionTime: this.state.sessionTime + 1,
      sessionRemaining: this.state.sessionRemaining + 1
    })
  }

  subSession() {
    this.setState({
      sessionTime: this.state.sessionTime - 1,
      sessionRemaining: this.state.sessionRemaining - 1

    })
  }
  
  addBreak() {
    this.setState({
      breakTime: this.state.breakTime + 1,
      breakRemaining: this.state.breakRemaining + 1
    })
  }

  subBreak() {
    this.setState({
      breakTime: this.state.breakTime - 1,
      breakRemaining: this.state.breakRemaining - 1
    })
  }

  startStop() {
    const seconds = (this.state.sessionRemaining * 60) % 60;
    const minutes = this.state.sessionRemaining;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    this.setState({

    })
  }

  resetTimer() {
    this.setState({
      sessionTime: 25,
      breakTime: 5,
      sessionRemaining: 25,
      breakRemaining: 5
    })
  }

  render() {
    return (
      <div>
        <h1>Pomodoro Clock</h1>
        <h2>{this.state.sessionTime}</h2>
        <div id='timerContainer'>
          <h3>Session Time</h3>
          <h3>{this.state.sessionTime}</h3>
          <button onClick={this.addSession}>^</button>
          <button onClick={this.subSession}>v</button>
        </div>
        <div id='timerContainer'>
          <h3>Break Time</h3>
          <h3>{this.state.breakTime}</h3>
          <button onClick={this.addBreak}>^</button>
          <button onClick={this.subBreak}>v</button>
        </div>
        <div>
          <button onClick={this.startStop}>Start/Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )
  }

}

export default App;


var sessionRemaining = 12;
var seconds = (sessionRemaining * 60) % 60;
var minutes = sessionRemaining;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    console.log(seconds);
    console.log(minutes);