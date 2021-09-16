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

{/* Full-Stack 01 Projects. */}
const items1 = [
    {
        image: dicedex,
        header: 'DiceDex (Express.js | Node.js | MongoDB)',
        meta: 'Tabletop Game Group Database and Tracker', 
        description: <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://tabletop-tracker-project-117.herokuapp.com/users',
    },
    {
        image: codecstory,
        header: 'Codec Story (Python 3 | Flask | Gunicorn)',
        meta: 'A Text Adventure Game (Using Placeholder Images)', 
        description: <a href='https://github.com/ak89mkii/codecu' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://codecu.herokuapp.com/',
    },
    {
        image: paj,
        header: 'PAJ (React.js | Node.js | MongoDB | Team Developed)',
        meta: 'Project Assistance Journal, Project Tracker App',
        description: <a href='https://github.com/ak89mkii/PAJ' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://paj-03-project-hi-nu.herokuapp.com/',
    },
]

{/* Full-Stack 02 Projects. */}
const items2 = [
    {
        image: repbucket,
        header: 'RepBucket (Python 3 | Django | PostgeSQL)',
        meta: 'Goals and Skills Tracker with Gaming / RPG Elements',
        description: <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://repbucket-04.herokuapp.com/',
    },
]

{/* Front-End 03 Projects. */}
const items3 = [
    {
        image: war,
        header: 'War Card Game (JavaScript ES2018)',
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
                    <h1 className={props.mode}>- <Icon name='server' />Full-Stack Applications -</h1>
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
                    <p hidden>- <Icon name='code' />Front-End Applications -</p>
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
                    <h1 className={props.mode}>- <Icon name='code' />Front-End Applications -</h1>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items3} />
                </Grid.Row>
            </Grid>


            <br></br>
            <br></br>
        </div>
    )
}

export default Project