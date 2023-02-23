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
import Coin01 from '../../sounds/coin1.wav'
import Coin02 from '../../sounds/coin2.wav'
import ReactHowler from 'react-howler'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'
import coin from '../../Img/coin.png'

class Home extends Component {
    state = {
        activeItem: 'Mission',
        check: 0,
        mode: 'light',
        photo: 'photo',
        mission: 'mission',
        on: false,
        sound: false,
        coin1: false,
        coin2: false,
        onMusic: false,
        icon: sun,
        coinImg1: coin,
        coinImg2: coin,
        coinMessage: 'INSERT COINS',
    }

    contextRef = createRef()

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleToggle = () => {
        this.setState({
        // on: !this.state.on,
        // sound: !this.state.sound
        coin1: false,
        coin2: false,
        coinImg1: coin,
        coinImg2: coin,
        })
    }
    
    // Resets state of remaining sound effects in Index.jsx.
    handleToggle02 = () => {
        this.setState({
        sound: false,
        coin2: false
        })
    }

    // Coin 01 sounds and image state.
    insertCoin01 = () => {
        this.setState({
            coin1: !this.state.coin1,
            coinImg1: false
        })
    }

    handleCoin01 = () => {
        this.setState({
            coin1: false,
            coin2: !this.state.coin2,
        })
    }

    // Coin 02 sounds and image state.
    insertCoin02 = () => {
        this.setState({
            coin1: !this.state.coin1,
            coinImg2: false
        })
    }

    handleCoin02 = () => {
        this.setState({
            coin1: false,
            coin2: !this.state.coin2,
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
                    </Grid.Row>
                    <div>
                    <Grid.Row>
                    {(this.state.coinImg2 == false && this.state.coinImg2 == false) && (<Select />)}
                    </Grid.Row>
                    {this.state.sound && (<ReactHowler
                        src={Audio}
                        playing={true}
                        onEnd={this.handleToggle02}
                    />)}
                    {this.state.coin1 && (<ReactHowler
                        src={Coin01}
                        playing={true}
                        onEnd={this.handleCoin02}
                    />)}
                    {this.state.coin2 && (<ReactHowler
                        src={Coin02}
                        playing={true}
                        onEnd={this.handleToggle02}
                    />)}
                    </div>
                    <br></br>
                    <br></br>
                    {/* </Grid.Row> */}
                    {/* Insert Coin Message */}
                    {(this.state.coinImg2 == coin && this.state.coinImg2 == coin) && (<Grid.Row centered><h1 className='coinTitle'>{this.state.coinMessage}</h1></Grid.Row>)}
                    {(this.state.coinImg2 == coin && this.state.coinImg2 == coin) && (<Grid.Row centered><p><b>Click</b> on the coins below.</p></Grid.Row>)}
                    {/* Coins. */}
                    <Grid.Row centered>
                    <Image src={this.state.coinImg1} className='coin' onClick={this.insertCoin01} />
                    <Image src={this.state.coinImg2} className='coin' onClick={this.insertCoin02} />
                    </Grid.Row>
                    {/* Skills Toggle Button. */}
                    {(this.state.coinImg2 == false && this.state.coinImg2 == false) && (
                        <Grid.Row centered>
                            <Button 
                            color='yellow' 
                            size='huge'
                            onClick={this.handleToggle}
                            >
                                Close 
                            </Button>
                        </Grid.Row>
                    )} 
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

