import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, Image, Menu, Message, Divider } from 'semantic-ui-react'
import Statement from './components/Statement/Statement'
import Project from './components/Project/Project'
import Interest from './components/Interest/Interest'
import Contact from './components/Contact/Contact'
import Profile from './Img/profile.jpeg'

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
             <Menu.Item
              name='Interests'
              // active={activeItem === 'photos'}
              // onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Contact Information'
              // active={activeItem === 'photos'}
              // onClick={this.handleItemClick}
            />
            </Menu>
            <Image
              bordered
              centered
              size='medium'
              src={Profile}
            />
             <h1>Alexander I. Kasem</h1>
             <br></br>
             <br></br>
             
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

