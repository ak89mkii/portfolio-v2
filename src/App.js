import React, { Component, createRef } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Sticky, Menu, Segment, Divider } from 'semantic-ui-react'
import Statement from './components/Statement/Statement'
import Project from './components/Project/Project'
import Interest from './components/Interest/Interest'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Select from './components/Select/Select'
import Skill from './components/Skill/Skill'
import Audio from './components/sounds/select.mp3'
import ReactHowler from 'react-howler'

class App extends Component {
    state = {
      activeItem: 'Mission',
      on: false,
      onMusic: false
    }

  contextRef = createRef()

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleToggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  handleToggle02 = () => {
    this.setState({
      onMusic: !this.state.onMusic
    })
  }

    render() {
      const { activeItem } = this.state
      return (
        <div>
        <br></br>
        <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
        <Segment inverted>
          <Menu
          inverted
          pointing
          secondary
          size='large'
          attached='top'
          // stackable
          >
            <a href='#mission'>
            <Menu.Item
              name='Mission'
              // active={activeItem === 'Mission'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#projects'>
            <Menu.Item
              name='Projects'
              // active={activeItem === 'Projects'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#skills'>
            <Menu.Item
              name='Skills'
              // active={activeItem === 'Skills'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#interests'>
             <Menu.Item
              name='Interests'
              // active={activeItem === 'Interests'}
              onClick={this.handleItemClick}
            />
            </a>
            <a href='#contact'>
             <Menu.Item
              name='Contact'
              // active={activeItem === 'Contact'}
              onClick={this.handleItemClick}
            />
            </a>
            </Menu>
          </Segment>
          </Sticky>
          <Segment attached='bottom'>
            <div id='mission'>
              <Intro/>
            </div>
            <br></br>
            <br></br>
          <main>
            <div id='projects'>
            <Statement className='Statement'
            />
            </div>
            <div>
            <Project className='Project'
            />
            </div>
            <div id='skills'>
            <Skill className='Project'
            />
            </div>
            <div>
              {this.state.on && (<Select />)}
              {this.state.on && (<ReactHowler
                src={Audio}
                playing={true}
              />)}
            </div>
            <br></br>
            <br></br>
            <Grid centered>
              <Button 
                color='yellow' 
                size='huge'
                onClick={this.handleToggle}
              >Toggle Skills View 
              </Button>
            </Grid>
             <br></br>
             <br></br>

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
            <div className='copyright'>Copyright &#169; Alexander I. Kasem 2020-2021</div>
          <br></br>
        </Segment>
        </div>
        </div>
      )
    }
  }

export default App;

