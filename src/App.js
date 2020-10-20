import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Message, Divider } from 'semantic-ui-react'
import Statement from './components/Statement/Statement'
import Project from './components/Project/Project'
import Interest from './components/Interest/Interest'
import Contact from './components/Contact/Contact'

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
            <Project
            />
            <Interest 
            />
            <Contact
            />
          </main>
          <br></br>
            <div>Copyright &#169; Alexander I. Kasem 2020</div>
          <br></br>
             
        </div>
      )
    }
  }



export default App;

