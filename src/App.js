import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Message, Divider } from 'semantic-ui-react'
import Statement from './components/Statement/Statement'
// import Project from './components/Project/Project'
// import Interest from './components/Interest/Interest'
// import Contact from './components/Contact/Contact'

class App extends Component {
  state ={
  }
    render() {
      return (
        <div>
       
            <Menu tabular>
              <Menu.Item
                name='Mission Statement'
                // active={activeItem === 'bio'}
                // onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Projects'
                // active={activeItem === 'photos'}
                // onClick={this.handleItemClick}
              />
            </Menu>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
              <Header.Content>Alexander I. Kasem</Header.Content>
            </Header>
            <Image
              centered
              size='large'
              src='https://specials-images.forbesimg.com/imageserve/5f183f59c3566d0006297445/960x0.jpg?fit=scale'
              />
          
          <main>
            <Statement 
           
            />
            {/* <Project
            ballNo={ballNo}
            ballIdx={this.state.ballIdx}
            handleSummon={this.handleSummon} 
            />
            <Interest 
            ballNo={ballNo}
            ballIdx={this.state.ballIdx}
            handleSummon={this.handleSummon}
            />
            <Contact
            ballNo={ballNo}
            ballIdx={this.state.ballIdx}
            handleSummon={this.handleSummon} 
            /> */}
          </main>
            <Message>
              <footer className='footer'>
                <Message.Header>Copyright &#169; Alexander I. Kasem 2020
                </Message.Header>
              </footer>
            </Message>
          </div>
      )
    }
  }



export default App;

