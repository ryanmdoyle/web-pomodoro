import React, {Component} from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTimeEntry: 25, //in min
      breakTimeEntry: 5, //in min
      sessionRemainingSeconds: 1500, //in seconds
      breakRemainingSeconds: 300, //in seconds
      running: false,
      timerLabel: "Session"
    }
    this.addSession = this.addSession.bind(this);
    this.subSession = this.subSession.bind(this);
    this.addBreak = this.addBreak.bind(this);
    this.subBreak = this.subBreak.bind(this);
    this.startStop = this.startStop.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.formatMinutes = this.formatMinutes.bind(this);
  }

  addSession() { //adding and subtracting methods need to also chage the session remaining in seconds to mirrow the entry time if ever changed
    
    this.setState({
      sessionTimeEntry: this.state.sessionTimeEntry + 1,
      sessionRemainingSeconds: (this.state.sessionTimeEntry + 1) * 60
    })
  }

  subSession() {
    this.setState({
      sessionTimeEntry: this.state.sessionTimeEntry - 1,
      sessionRemainingSeconds: (this.state.sessionTimeEntry - 1) * 60

    })
  }
  
  addBreak() {
    this.setState({
      breakTimeEntry: this.state.breakTimeEntry + 1,
      breakRemainingSeconds: (this.state.breakTimeEntry + 1) * 60
    })
  }

  subBreak() {
    this.setState({
      breakTimeEntry: this.state.breakTimeEntry - 1,
      breakRemainingSeconds: (this.state.breakTimeEntry - 1) * 60
    })
  }

  startStop() {
    
    const status = this.state.running;

    switch (status) {
      case false:
        console.log("should start!")
        this.setState({ running: true })

        this.timer = setInterval(() => {
          if (this.state.sessionRemainingSeconds > 0) {
            this.setState({
              sessionRemainingSeconds: this.state.sessionRemainingSeconds - 1,
              timerLabel: 'Session'
            });
            console.log(this.state.sessionRemainingSeconds);
          } else if (this.state.breakRemainingSeconds > 0) {
            this.setState({
              breakRemainingSeconds: this.state.breakRemainingSeconds - 1,
              timerLabel: 'Break'
            });
            console.log(this.state.breakRemainingSeconds);
          }    
          }, 1000)  
        

        break;
      case true:
        console.log("should stop")
        this.setState({ running: false })
        clearInterval(this.timer)
        break;
      default:
        break; 
    }

  }

  resetTimer() {
    this.setState({
      sessionTimeEntry: 25,
      breakTimeEntry: 5,
      sessionRemainingSeconds: 1500,
      breakRemainingSeconds: 300,
      running: false,
      timerLabel: "Session"
    })
  }

  formatMinutes(time) {
    let seconds = time;
    const minutes = (seconds % 60 === 0 ) ? ((seconds/60) < 10 ? "0" + seconds/60 : seconds/60): (Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60));
    seconds = (seconds % 60 === 0 ) ? "00" : ((seconds % 60 < 10) ? "0"+ (seconds % 60) : seconds % 60)
    console.log(minutes + ":" + seconds);
    return minutes + ":" + seconds;
  }

  render() {
    return (
      <div id="clock">
        <h1>Pomodoro Clock</h1>
        <h1>{(this.state.timerLabel==="Break") ?  this.formatMinutes(this.state.breakRemainingSeconds) : this.formatMinutes(this.state.sessionRemainingSeconds)}</h1>
        <h2>{this.state.timerLabel}</h2>
        <div className="flexContainer">
          <div id='timerContainer'>
            <h3 id="session-label">Session Time</h3>
            <h3 id="session-length">{this.state.sessionTimeEntry}</h3>
            <button onClick={this.addSession} id="session-increment">^</button>
            <button onClick={this.subSession} id="session-decrement">v</button>
          </div>
          <div id='timerContainer'>
            <h3 id="break-label">Break Time</h3>
            <h3 id="break-length">{this.state.breakTimeEntry}</h3>
            <button onClick={this.addBreak} id="break-increment">^</button>
            <button onClick={this.subBreak} id="break-decrement">v</button>
          </div>
          <div>
            <button onClick={this.startStop} id="start-stop">Start/Stop</button>
            <button onClick={this.resetTimer} id="reset">Reset</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App;


// var sessionRemainingSeconds = 12;
// var seconds = (sessionRemainingSeconds * 60) % 60;
// var minutes = sessionRemainingSeconds;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     console.log(seconds);
//     console.log(minutes);