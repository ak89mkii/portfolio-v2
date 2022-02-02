import React from 'react'
import { Header, Icon, Image, Card, Button, Divider, Grid, Item, Message, Segment } from 'semantic-ui-react'
import './Project.css'
import war from '../../Img/war.png'
import dicedex from '../../Img/dicedex.png'
import paj from '../../Img/paj.png'
import repbucket from '../../Img/repbucket.png'
import codecstory from '../../Img/codec_story.png'
import icontextuall from '../../Img/icontextuall.png'
import ex from '../../Img/ex_life_tracker.png'
import ig from '../../Img/ig.png'
import holo from '../../Img/holo.png'
import counter from '../../Img/counter.png'
import pondercode from '../../Img/pondercode.png'
import note from '../../Img/note.png'
import hair from '../../Img/hair.png'
import bug from '../../Img/bug.png'
import code from '../../Img/code.png'
import phone from '../../Img/phone.png'

{/* Full-Stack 01 Projects. */}
const items1 = [
    {
        image: dicedex,
        header: 'DiceDex: Tabletop Game Group Database and Tracker',
        meta: 'Express.js | Node.js | MongoDB | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://tabletop-tracker-project-117.herokuapp.com/users',
    },
    {
        image: paj,
        header: 'PAJ: Project Management App (Team Developed)',
        meta: 'React.js | Express.js | Node.js | MongoDB | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/PAJ' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://paj-03-project-hi-nu.herokuapp.com/',
    },
    {
        image: repbucket,
        header: 'RepBucket: Goals and Skills Tracker',
        meta: 'HTML5 | Python 3 | Django | PostgeSQL | CSS3 |  Bootstrap',
        description: <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://repbucket-04.herokuapp.com/',
    },
]

{/* Full-Stack 02 Projects. */}
const items2 = [
    {
        image: code,
        header: 'Code Seonbi: Coding References and Bug Tracker',
        meta: 'React.js | Django | PostgeSQL | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/code-seonbi' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://github.com/ak89mkii/code-seonbi',
    },
    {
        image: phone,
        header: 'Code Seonbi: Coding References and Bug Tracker',
        meta: 'React.js | Django | PostgeSQL | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/code-seonbi' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://github.com/ak89mkii/code-seonbi',
    },
]

{/* Front-End 03 Projects. */}
const items3 = [
    {
        image: counter,
        header: 'Donation Counter Application: Category, Total, Date',
        meta: 'React.js | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/donate-counter' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://fidgetkicounter.surge.sh/',
    },
    {
        image: ex,
        header: 'EX-Life Tracker: "Specific" Tabletop Game Stats Tool',
        meta: 'React.js | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/ex-life-tracker' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://ex-health-tracker.surge.sh/',
    },
    {
        image: note,
        header: 'Note Taking App: Editable (Data Does Not Persist)',
        meta: 'JavaScript (ES2018) | HTML5 | CSS3',
        description: <a href='https://github.com/ak89mkii/note-card-app' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://ig-note-117.surge.sh/',
    },
]

{/* Front-End 04 Projects. */}
const items4 = [
    {
        image: pondercode,
        header: 'Ponder Code: Minimalist Custom Web Apps Site',
        meta: 'React.js | CSS3 | Semantic UI React | npm Webpacks',
        description: <a href='https://github.com/ak89mkii/ponder-code' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.pondercode.com/',
    },
    {
        image: hair,
        header: 'Sam Rose Salon: Local Haircut Business Site',
        meta: 'React.js | CSS3 | Semantic UI React | npm Webpacks',
        description: <a href='' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='grey'><Icon name='github' />GitHub</Button></a>,
        href: 'https://samrosesalon.surge.sh/',
    },
    {
        image: war,
        header: 'War Card Game: Old Arcade Game Theme',
        meta: 'JavaScript (ES2018) | HTML5 | CSS3 | Bootstrap',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
]

{/* Front-End 05 Projects. */}
const items5 = [
    {
        image: icontextuall,
        header: 'iContextuall: Twilio SMS Template',
        meta: 'React.js | Flask | CSS3 | Bootstrap | Twilio SMS API',
        description: <a href='https://github.com/ak89mkii/iContextuall' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://ak89mkii.medium.com/build-a-simple-gui-for-twilio-sms-using-flask-not-deployment-ready-785e1df2e8a0',
    },
    {
        image: ig,
        header: 'IG 9000: Voice Recognition Virtual Assistant',
        meta: 'React.js | Flask | CSS3 | Semantic UI Reat | Google Text-to-Speech | PyAudio',
        description: <a href='https://github.com/ak89mkii/ig-9000' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.linkedin.com/pulse/speech-recognition-program-holographic-display-project-kasem/?trackingId=fc9Mdeuv9KrouSk%2Bo7d8Gg%3D%3D',
    },
    {
        image: holo,
        header: 'Holo-HUD: Custom Holographic Display Project',
        meta: 'React.js | CSS3 | Semantic UI React | Raspberry Pi 4 | Custom Built Display',
        description: <a href='https://github.com/ak89mkii/holo-hud' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.linkedin.com/pulse/speech-recognition-program-holographic-display-project-kasem/?trackingId=fc9Mdeuv9KrouSk%2Bo7d8Gg%3D%3D',
    },
]


{/* Front-End 06 Projects. */}
const items6 = [
    {
        image: codecstory,
        header: 'Codec Story: A Text Adventure Game',
        meta: 'HTML5 | Python 3 | Flask | Gunicorn | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/codecu' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://codecu.herokuapp.com/',
    },
    {
        image: bug,
        header: 'Bug Buster (C# | The Unity Engine)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/bug-buster' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://a-i-chasm-games.itch.io/bug-buster',
    },
    {
        header: <iframe frameborder="0" src="https://itch.io/embed-upload/4416194?color=333333" allowfullscreen="" width='260px' height='420px'  ><a href="https://a-i-chasm-games.itch.io/bug-buster">Play Bug Buster on itch.io</a></iframe>,
        description: 'Controls: Fireball (Left Mouse Click) | Movement (A, S, D) | Jump (Spacebar)',
    },
    
]

const Project = (props) => {
    return (
        <div>
            <Divider horizontal>
                <h1 className={props.mode}>
                    <Icon name='file code' />
                    Projects
                </h1>
            </Divider>
            <br></br>
            <br></br>

            {/* Full-Stack 01 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>Full-Stack Applications | Native Applications</h2>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items1} />
                </Grid.Row>
            </Grid>

            {/* Full-Stack 02 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items2} />
                </Grid.Row>
            </Grid>

            {/* Front-End 03 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>Front-End Applications</h2>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items3} />
                </Grid.Row>
            </Grid>

            {/* Front-End 04 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p hidden>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items4} />
                </Grid.Row>
            </Grid>

            {/* Miscellaneous 05 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>Miscellaneous | Templates | Video Games</h2>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items5} />
                </Grid.Row>
            </Grid>
            
            {/* Front-End 06 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>
            
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p hidden>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items6} />
                </Grid.Row>
            </Grid>

            <br></br>
            <br></br>
        </div>
    )
}

export default Project