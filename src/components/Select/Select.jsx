import React, { Component } from 'react'
import { Image, Icon, Button, Grid } from 'semantic-ui-react'
import Fight from '../../Img/fight.png'
import Music from '../../components/sounds/music.wav'
import './Select.css'
import ReactHowler from 'react-howler'

class Select extends Component {
  state = {
    onMusic: false
  }

  handleToggle02 = () => {
    this.setState({
      onMusic: !this.state.onMusic
    })
  }

    render() {
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
        <Grid centered>
          <Button 
            color='blue' 
            size='huge'
            icon
            onClick={this.handleToggle02}
          > 
            <Icon centered name='volume up'/>
            <Icon centered name='volume off'/>
          </Button>
        </Grid>
        <br></br>
        <br></br>
      </div>
    )
      }
}

export default Select