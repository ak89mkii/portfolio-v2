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
    activeItem: 'Mission Statement' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
      return (
        <div>
        <br></br>
          <Menu tabular size='huge'>
          <a href='#mission'>
            <Menu.Item
              name='Mission Statement'
              active={activeItem === 'Mission Statement'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#projects'>
            <Menu.Item
              name='Projects'
              active={activeItem === 'Projects'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#interests'>
             <Menu.Item
              name='Interests'
              active={activeItem === 'Interests'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#contact'>
             <Menu.Item
              name='Contact Information'
              active={activeItem === 'Contact Information'}
              onClick={this.handleItemClick}
            />
            </a>
            </Menu>
            <Image
              bordered
              centered
              size='medium'
              src={Profile}
            />
             <h1>Alexander I. Kasem</h1>
             <h3>Full Stack Software Engineer</h3>
             <br></br>
             <br></br>
             
          <main>
            <div id='mission'>
            <Statement className='Statement'
            />
            </div>
            <div id='projects'>
            <Project className='Project'
            />
            </div>
            <div id='interests'>
            <Interest className='Interest'
            />
            </div>
            <div id='contact'>
            <Contact 
            />
            </div>
          </main>
          <br></br>
          <Divider />
            <div className='copyright'>Copyright &#169; Alexander I. Kasem 2020</div>
          <br></br>
             
        </div>
      )
    }
  }



export default App;

