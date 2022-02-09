import React, { Component, createRef } from 'react'
import '../../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Sticky, Radio, Container, Image } from 'semantic-ui-react'
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
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'


class Home extends Component {
    state = {
        activeItem: 'Mission',
        mode: 'light',
        photo: 'photo',
        mission: 'mission',
        on: false,
        sound: false,
        onMusic: false,
        icon: sun,
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

    // Function Toggle Dark Mode.
    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                photo: 'photoDark',
                mission: 'missionDark',
                menu: 'ui inverted menu',
                icon: moon
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                photo: 'photo',
                mission: 'mission',
                menu: 'ui menu',
                icon: sun
            })
        }
    }

    render() {
        const { activeItem } = this.state
        return (
            <div className={this.state.mode} ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <NavBar />
                </Sticky>
                <br></br>
                <Container>
                <Radio 
                    className='main'
                    mode={this.state.mode}
                    toggle
                    onClick={this.toggleMode}
                    // label='Light / Dark Mode Toggle'
                />   
                <Image  
                    className='sun' 
                    src={this.state.icon} />
                </Container>
                <Grid>
                    {/* Photo, Name, and Title. */}
                    <Grid.Row>
                    <div id='mission'>
                        <Intro 
                            photo={this.state.photo}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    </Grid.Row>
                    {/* Mission Statement. */}
                    <Grid.Row>
                    <div id='mission'>
                        <Statement 
                            mission={this.state.mission}
                            mode={this.state.mode}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    </Grid.Row>
                    {/* Skills. */}
                    <Grid.Row>
                    <div id='skills'>
                    <Skill 
                        className='main'
                        mode={this.state.mode}
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
                    </Grid.Row>
                    {/* Skills Toggle Button. */}
                    <Grid.Row centered>
                    <Button 
                        color='yellow' 
                        size='huge'
                        onClick={this.handleToggle}
                    >Toggle Skills View 
                    </Button>
                    </Grid.Row>
                    <br></br>
                    <br></br>
                    {/* Projects. */}
                    <Grid.Row>
                    <div id='projects'>
                        <Project 
                            className='main'
                            mode={this.state.mode}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    </Grid.Row>
                    {/* About. */}
                    <Grid.Row centered>
                    <div id='about'>
                    <Interest 
                        className='about'
                        mode={this.state.mode}
                    />
                    </div>
                    </Grid.Row>
                    {/* Contacts. */}
                    <Grid.Row centered>
                    <div id='contact'>
                    <Contact 
                        mode={this.state.mode}
                    />
                    </div>
                    </Grid.Row>
                </Grid>
                <br></br>
                <Footer />
            </div>
        )
    }
}

export default Home;

