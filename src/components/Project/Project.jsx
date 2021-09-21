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
        image: codecstory,
        header: 'Codec Story: A Text Adventure Game',
        meta: 'HTML5 | Python 3 | Flask | Gunicorn | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/codecu' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://codecu.herokuapp.com/',
    },
    {
        image: paj,
        header: 'PAJ: Project Management App (Team Developed)',
        meta: 'React.js | Express.js | Node.js | MongoDB | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/PAJ' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://paj-03-project-hi-nu.herokuapp.com/',
    },
]

{/* Full-Stack 02 Projects. */}
const items2 = [
    {
        image: repbucket,
        header: 'RepBucket: Goals and Skills Tracker',
        meta: 'HTML5 | Python 3 | Django | PostgeSQL | CSS3 |  Bootstrap',
        description: <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://repbucket-04.herokuapp.com/',
    },
    {
        image: code,
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
        header: 'Donation Counter Application (React.js)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: ex,
        header: 'EX-Life Tracker (JavaScript ES2018)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: note,
        header: 'Note Taking App (JavaScript ES2018)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
]

{/* Front-End 04 Projects. */}
const items4 = [
    {
        image: pondercode,
        header: 'Ponder Code Website (React.js | Semantic UI React)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: hair,
        header: 'Sam Rose Salon Website (JavaScript ES2018)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: war,
        header: 'War Card Game (JavaScript ES2018)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
]

{/* Front-End 05 Projects. */}
const items5 = [
    {
        image: icontextuall,
        header: 'iContextuall (React.js | Flask | Twilio SMS API)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: ig,
        header: 'IG 9000 (React.js | Flask | Google Text-to-Speech | PyAudio)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: holo,
        header: 'Holo-HUD (React.js | Raspberry Pi 4 | Custom Built Display)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
]


{/* Front-End 06 Projects. */}
const items6 = [
    {
        image: bug,
        header: 'Bug Buster (C# | The Unity Engine)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
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
                    <h2 className={props.mode}>Full-Stack Applications</h2>
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