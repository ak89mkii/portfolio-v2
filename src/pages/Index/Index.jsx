import React, { Component, createRef } from 'react'
import '../../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Sticky, Menu, Segment, Divider } from 'semantic-ui-react'
import NavBar from '../../components/NavBar/NavBar'
import Statement from '../../components/Statement/Statement'
import Project from '../../components/Project/Project'
import Interest from '../../components/Interest/Interest'
import Contact from '../../components/Contact/Contact'
import Intro from '../../components/Intro/Intro'
import Select from '../../components/Select/Select'
import Skill from '../../components/Skill/Skill'
import Audio from '../../sounds/select.mp3'
import ReactHowler from 'react-howler'

class Home extends Component {
    state = {
        activeItem: 'Mission',
        on: false,
        sound: false,
        onMusic: false
    }

    contextRef = createRef()

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleToggle = () => {
        this.setState({
        on: !this.state.on,
        sound: !this.state.sound
        })
    }

    handleToggle02 = () => {
        this.setState({
        sound: !this.state.sound
        })
    }

    render() {
        const { activeItem } = this.state
        return (
            <div>
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
                    {this.state.sound && (<ReactHowler
                        src={Audio}
                        playing={true}
                        onEnd={this.handleToggle02}
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
        )
    }
}

export default Home;

