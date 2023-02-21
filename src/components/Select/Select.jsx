import React, { Component } from 'react'
import { Image, Icon, Button, Grid, Header,Segment, TransitionablePortal,} from 'semantic-ui-react'
import Fight from '../../Img/fight02.png'
import Music from '../../sounds/music.wav'
import Arcade from '../Arcade/Arcade.jsx'
import './Select.css'
import ReactHowler from 'react-howler'
import Iframe from 'react-iframe'

class Select extends Component {
  state = {
    onMusic: false,
    open: false
  }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
  handleClose = () => this.setState({ open: false })

  handleToggle02 = () => {
    this.setState({
      onMusic: !this.state.onMusic
    })
  }

    render() {
      const { open } = this.state
      return (
      <div>
        {this.state.onMusic && (<ReactHowler
          src={Music}
          playing={true}
        />)}
        <Image
          bordered
          centered
          src={Fight}
        />
        <br></br>
        <br></br>
        <Arcade />
        <br></br>
        <br></br>
        <Grid centered>
        <Button
          size='huge'
          content={open ? 'Close Skill List' : 'Open Skill List'}
          // black={open}
          // black={!open}
          onClick={this.handleClick}
        />
        </Grid> 
        <br></br>
        <br></br>
        <Grid centered>
          <Button 
            color='black' 
            size='huge'
            icon
            onClick={this.handleToggle02}
          > 
            <Icon centered name='volume up'/> |
            <Icon centered name='volume off'/>
          </Button>
        </Grid>
      <div>
        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{ left: '60%', position: 'fixed', top: '50%', zIndex: 1000 }}
          >
            <Header>Technology List:</Header>
            <p>Row 01: HTML5, CSS3, JavaScript (ES2018), Python 3</p>
            <p>Row 02: React.js, Node.js, Express.js, Django, MongoDB, PostreSQL</p>
            <p>Row 03: Flask, Bootstrap, Semantic UI React, GitHub, Heroku, Coffee (the drink)</p>
          </Segment>
        </TransitionablePortal>
      </div>
        <br></br>
        <br></br>
      </div>
    )
      }
}

export default Select