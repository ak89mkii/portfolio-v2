import React, { Component } from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image } from 'semantic-ui-react'
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
          <div>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
              <Header.Content>Alexander I. Kasem</Header.Content>
            </Header>
            <Image
              centered
              size='large'
              src='https://specials-images.forbesimg.com/imageserve/5f183f59c3566d0006297445/960x0.jpg?fit=scale'
              />
          </div>
          
          
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

