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
        check: 0,
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
            this.handleFormSubmitDark();
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                photo: 'photo',
                mission: 'mission',
                menu: 'ui menu',
                icon: sun
            })
            this.handleFormSubmitLight();
        }
    }

    // Save mode: light in local Storage:
    handleFormSubmitLight = () => {
        localStorage.setItem('mode', 'light');
        localStorage.setItem('photo', 'photo');
        localStorage.setItem('nav', 'nav');
        localStorage.setItem('menu', 'ui menu');
        localStorage.setItem('contact', 'contact');
        localStorage.setItem('s1TitleSub', 's1TitleSub');
        localStorage.setItem('s2', 's2');
        localStorage.setItem('s2TitleSub', 's2TitleSub');
        localStorage.setItem('icon', sun);
    };

    // Save mode: dark in local Storage:
    handleFormSubmitDark = () => {
        localStorage.setItem('check', 1);
        localStorage.setItem('mode', 'dark');
        localStorage.setItem('photo', 'photoDark');
        localStorage.setItem('nav', 'navDark');
        localStorage.setItem('menu', 'ui inverted menu');
        localStorage.setItem('contact', 'contactDark');
        localStorage.setItem('s1TitleSub', 's1TitleSubDark');
        localStorage.setItem('s2', 's2Dark');
        localStorage.setItem('s2TitleSub', 's2TitleSubDark');
        localStorage.setItem('icon', moon);
    };

    // Retreive mode in localStorage:
    componentDidMount() {
        const check = localStorage.getItem('check');
        this.setState({ check });
        console.log({check})

        if (check == 1) {
        // console.log("halo")

        const mode = localStorage.getItem('mode');
        this.setState({ mode });
        const photo = localStorage.getItem('photo');
        this.setState({ photo });
        const nav = localStorage.getItem('nav');
        this.setState({ nav });
        const menu = localStorage.getItem('menu');
        this.setState({ menu });
        const contact = localStorage.getItem('contact');
        this.setState({ contact });
        const s1TitleSub = localStorage.getItem('s1TitleSub');
        this.setState({ s1TitleSub });
        const s2 = localStorage.getItem('s2');
        this.setState({ s2 });
        const s2TitleSub = localStorage.getItem('s2TitleSub');
        this.setState({ s2TitleSub });
        const icon = localStorage.getItem('icon');
        this.setState({ icon });

        }
    };

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
                    src={this.state.icon} 
                />
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

