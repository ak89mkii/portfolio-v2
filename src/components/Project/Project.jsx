import React from 'react'
import { Header, Icon, Container, Card, Button, Divider, Grid, Item, Message, Segment } from 'semantic-ui-react'
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
import code from '../../Img/codeseonbi.png'
import phone from '../../Img/phone.png'
import sholodex from '../../Img/sholodex.png'
import graph from '../../Img/graph.png'
import nu from '../../Img/nu.png'
import io from '../../Img/io.png'
import pm from '../../Img/pm.png'
import bt from '../../Img/bt2.png'
import pes from '../../Img/pes.png'
import comcard from '../../Img/comcard.png'
import tech from '../../Img/tech.png'
import cd from '../../Img/cd.png'
import water from '../../Img/water.png'

{/* Full-Stack 01 Projects. */}
const items1 = [

    {
        image: code,
        header: 'Code Seonbi: Coding References and Bug Tracker',
        meta: 'React.js | Django REST Framework | PostgeSQL | CSS3 | Bootstrap',
        description: <a href='https://github.com/ak89mkii/code-seonbi' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.codeseonbi.com/',
    },
    {
        image: comcard,
        header: 'ComCard: Commander League Point Tracker',
        meta: 'React.js | Django REST Framework | PostgeSQL | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/commander_league_point_tracker' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://commander-league-point-tracker.herokuapp.com/',
    },
    {
        image: io,
        header: 'DiceDex.io: Board Game Tracker (Test Login: Tester_01, crentist)',
        meta: 'HTML5 | Python 3 | Django | PostgeSQL | CSS3 |  Bootstrap',
        description: <a href='https://github.com/ak89mkii/dicedex.io' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.dicedex.io/',
    },
]

{/* Full-Stack 02 Projects. */}
const items2 = [
    {
        image: tech,
        header: 'Techno Brew: IT Support Resources Hub',
        meta: 'HTML5 | Python 3 | Django | PostgeSQL | CSS3 |  Bootstrap',
        description: <a href='https://github.com/ak89mkii/techno-brew' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.technobrew.tech/',
    },
    {
        image: dicedex,
        header: 'DiceDex (Old): Board Game Tracker [ DECOMMISSIONED ]',
        meta: 'Express.js | Node.js | MongoDB | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        // href: 'https://tabletop-tracker-project-117.herokuapp.com/users',
    },
    {
        image: paj,
        header: 'PAJ: Project Management App [ DECOMMISSIONED ]',
        meta: 'React.js | Express.js | Node.js | MongoDB | CSS3 | Semantic UI React',
        description: <a href='https://github.com/ak89mkii/PAJ' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        // href: 'https://paj-03-project-hi-nu.herokuapp.com/',
    },
]

{/* Full-Stack 09 Projects. */}
const items9 = [
    {
        image: repbucket,
        header: 'RepBucket: Goals and Skills Tracker [ DECOMMISSIONED ]',
        meta: 'HTML5 | Python 3 | Django | PostgeSQL | CSS3 |  Bootstrap',
        description: <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        // href: 'https://repbucket-04.herokuapp.com/',
    },
    {
        image: phone,
        header: 'Dual-Lists 2: A Simple Shopping List App',
        meta: 'React Native | Expo (Deployed on Expo and Google Play)',
        description: <a href='https://github.com/ak89mkii/shop-list-app' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        // href: 'https://play.google.com/store/apps/details?id=com.ak89mkii.AwesomeProject',
    },
]

{/* Front-End 03 Projects. */}
const items3 = [
    {
        image: counter,
        header: 'Donation Counter Application: Category, Total, Date',
        meta: 'React.js | CSS3 | Semantic UI React | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/donate-counter' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://fidgetkicounter.surge.sh/',
    },
    {
        image: ex,
        header: 'EX-Life Tracker: "Specific" Tabletop Game Stats Tool',
        meta: 'React.js | CSS3 | Semantic UI React | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/ex-life-tracker' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://ex-health-tracker.surge.sh/',
    }, 
    {
        image: note,
        header: 'Note Taking App: Editable (Data Does Not Persist)',
        meta: 'JavaScript (ES2018) | HTML5 | CSS3 | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/note-card-app' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://ig-note-117.surge.sh/',
    },
]

{/* Front-End 04 Projects. */}
const items4 = [
    {
        image: nu,
        header: 'Nu Game Store: Sample Small Business Landing Page',
        meta: 'React.js | CSS3 | Bootstrap React | npm Webpacks',
        description: <a href='https://github.com/ak89mkii/nu-game-store' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.repbucket.com',
    },
    {
        image: pondercode,
        header: 'Ponder Code: Minimalist Custom Web Apps Site',
        meta: 'React.js | CSS3 | Semantic UI React | npm Webpacks',
        description: <a href='https://github.com/ak89mkii/ponder-code' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://www.pondercode.com/',
    },
    {
        image: pm,
        header: 'Ponder Mint LLC: Invent, Innovate, Iterate',
        meta: 'React.js | CSS3 | Bootstrap | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/ponder-mint' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://pondermint.com/',
    },
]

{/* Front-End 07 Projects. */}
const items7 = [
    {
        image: hair,
        header: 'Sam Rose Salon: Local Haircut Business Site',
        meta: 'React.js | CSS3 | Semantic UI React | npm Webpacks',
        description: <a href='' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='grey'><Icon name='github' />GitHub</Button></a>,
        href: 'https://samrosesalon.surge.sh/',
    },
    {
        image: sholodex,
        header: 'Sholodex: The Show Lowdown Index',
        meta: 'React.js | CSS3 | Bootstrap | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/sholodex-v2' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://sholodex.com',
    },
    {
        image: graph,
        header: 'Table Visualization App: Bar and Line Graphs',
        meta: 'React.js | CSS3 | Bootstrap | Git with GitHub',
        description: <a href='https://github.com/ak89mkii/table-visualization' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://data-graph-ig.surge.sh/',
    },
]

{/* Miscellaneous 05 Projects. */}
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


{/* Miscellaneous 06 Projects. */}
const items6 = [
    {
        image: bug,
        header: 'Bug Buster (C# | The Unity Engine)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/bug-buster' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://a-i-chasm-games.itch.io/bug-buster',
    },
    // {
    //     header: <iframe frameborder="0" src="https://itch.io/embed-upload/4416194?color=333333" allowfullscreen="" width='520px' height='420px'  ><a href="https://a-i-chasm-games.itch.io/bug-buster">Play Bug Buster on itch.io</a></iframe>,
    //     description: 'Controls: Fireball (Left Mouse Click) | Movement (A, S, D) | Jump (Spacebar)',
    // },
]

{/* Miscellaneous 08 Projects. */}
const items8 = [
    
    
    {
        image: codecstory,
        header: 'Codec Story: A Text Adventure Game [ DECOMMISSIONED ]',
        meta: 'HTML5 | Python 3 | Flask | Gunicorn | CSS3 | Bootstrap', 
        description: <a href='https://github.com/ak89mkii/codecu' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        // href: 'https://codecu.herokuapp.com/',
    },
    {
        image: war,
        header: 'War Card Game: Old Arcade Game Theme',
        meta: 'JavaScript (ES2018) | HTML5 | CSS3 | Bootstrap',
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'http://war-were-declared-4.surge.sh/',
    },
    {
        image: bt,
        header: 'Battle Thesis: Who Would Win in a Fight? (WordPress)',
        meta: 'A site that discusses hypothetical matchups for fun (hopefully).',
        description: <a href='' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='grey'><Icon name='github' />GitHub</Button></a>,
        href: 'https://battlethesis.com/',
    },
]


{/* Miscellaneous 10 Projects. */}
const items10 = [
    {
    image: pes,
    header: 'Ponder Enterprises Store (Shopify) [ DECOMMISSIONED ]',
    meta: 'The Ponder Enterprises online store developed with Shopify.',
    description: <a href='' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='grey'><Icon name='github' />GitHub</Button></a>,
    // href: 'https://ponderenterprises.com/',
    },
    {
    image: cd,
    header: 'Code_Deck: The Card Game (Instructions | Shop)',
    meta: 'The Ponder Enterprises online store developed with Shopify.',
    description: <a href='https://www.thegamecrafter.com/games/code_deck:-the-card-game-alpha_v_0.40-' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='light'><Icon name='chess' />The Game Crafter</Button></a>,
    href: 'https://www.codedeckcg.com/',
    },
]

{/* Miscellaneous 11 Projects. */}
const items11 = [
    {
        image: water,
        header: 'Bathophobia (C# | The Unity Engine)',
        meta: 'War Playing Card Game with Retro Game Theme',
        description: <a href='https://github.com/ak89mkii/bathophobia' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://a-i-chasm-games.itch.io/bug-buster',
    },
]

const Project = (props) => {
    return (
        <div>
            <Divider horizontal>
                <h1 className={props.mode}>
                    <Icon name='file' />
                    Projects
                </h1>
            </Divider>

            {/* Message */}
            <Container className='projectType'>
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className={props.mode}>Click on a <b>project thumbnail</b> to view the deployed application or on the <b>GitHub button</b> to view the docs and source code.</p>
                </Grid.Row>
            </Grid>
            </Container>
            {/* <br></br>
            <br></br> */}

            {/* Full-Stack 01 Projects. */}
            <Container className='projectType'>
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>[ <Icon name='database' /> Full-Stack Applications | Native Applications ]</h2>
                </Grid.Row>
            </Grid>
            </Container>

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

             {/* Full-Stack 09 Projects. */}
             <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items9} />
                </Grid.Row>
            </Grid>

            {/* Front-End 03 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Container className='projectType'>
                <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>[ <Icon name='react' /> Front-End Applications ]</h2>
                </Grid.Row>
            </Grid>
            </Container>

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

            {/* Front-End 07 Projects. */}
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
                    <Card.Group centered items={items7} />
                </Grid.Row>
            </Grid>

            {/* Miscellaneous 05 Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <p className='break'>-</p>
                </Grid.Row>
            </Grid>

            <Container className='projectType'>
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h2 className={props.mode}>[ <Icon name='game' /> Miscellaneous | Templates | Video Games | CMS Projects ]</h2>
                </Grid.Row>
            </Grid>
            </Container>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items5} />
                </Grid.Row>
            </Grid>
            
            {/* Miscellaneous 06 Projects. */}
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
                    <iframe id='goku' frameborder="0" src="https://itch.io/embed-upload/4416194?color=333333" allowfullscreen="" width='48%' height='420px'  ><a href="https://a-i-chasm-games.itch.io/bug-buster">Play Bug Buster on itch.io</a></iframe>
                </Grid.Row>
                <Grid.Row>
                    <Card.Group centered items={items11} />
                    <iframe id='goku' frameborder="0" src="https://itch.io/embed-upload/11295018?color=333333" allowfullscreen="" width='48%' height='420px'  ><a href="https://a-i-chasm-games.itch.io/bathophobia-v2">Bathophobia_V2 by a_i_chasm_games</a></iframe>
                </Grid.Row>
            </Grid>
            
            {/* Miscellaneous 08 Projects. */}
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
                    <Card.Group centered items={items8} />
                </Grid.Row>
            </Grid>

            {/* Miscellaneous 10 Projects. */}
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
                    <Card.Group centered items={items10} />
                </Grid.Row>
            </Grid>

            <br></br>
            <br></br>
        </div>
    )
}

export default Project