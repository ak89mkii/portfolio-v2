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
import Footer from '../../components/Footer/Footer'
import Audio from '../../sounds/select.mp3'
import ReactHowler from 'react-howler'

class Home extends Component {
    state = {
        activeItem: 'Mission',
        mode: 'dark',
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
            <div className={this.state.mode} ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <NavBar />
                </Sticky>
                {/* <Segment attached='bottom'> */}
                    <div className={this.state.mode} id='mission'>
                    <Intro
                    />
                    </div>
                    <br></br>
                    <br></br>
                    <div id='projects'>
                    <Statement 
                    />
                    </div>
                    <div>
                    <Project className='main'
                    />
                    </div>
                    <div id='skills'>
                    <Skill className='main'
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
                <br></br>
                <Footer />
                {/* </Segment> */}
            </div>
        )
    }
}

export default Home;

