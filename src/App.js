import React, { Component } from 'react'
import './App.css';
// import Circle from './components/Circle/Circle'
// import Button from './components/Button/Button'

const ballNo = ['0', '1', '2', '3']

class App extends Component {
  state ={
    ballIdx: 0
  }
  handleSummon = (idx) => {
    this.setState({ ballIdx: idx })
  }
    render() {
      return (
        <div className='App'>
          <header className="App-header">
          Dragon Ball Z!!
          <br></br>
          <br></br>
          <img 
            height='400'
            src='https://i.pinimg.com/originals/25/ca/a1/25caa13756952660b740f4ad8660e21f.gif'
            alt="none" 
          />
          </header>
          <main>
            {/* <Button 
            ballNo={ballNo}
            ballIdx={this.state.ballIdx}
            handleSummon={this.handleSummon}
            />
            <Circle
            ballNo={ballNo}
            ballIdx={this.state.ballIdx}
            handleSummon={this.handleSummon} 
            /> */}
          </main>
        </div>
      )
    }
  }



export default App;

