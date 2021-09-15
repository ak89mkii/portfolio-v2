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

{/* Full-Stack Projects. */}
const items1 = [
    {
        image: dicedex,
        header: 'DiceDex (Express.js | Node.js | MongoDB)',
        meta: 'Tabletop Game Group Database', 
        description: <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://tabletop-tracker-project-117.herokuapp.com/users',
    },
    {
        image: codecstory,
        header: 'Codec Story (Python 3 | Flask | Gunicorn)',
        meta: 'A Text Adventure', 
        description: <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://tabletop-tracker-project-117.herokuapp.com/users',
    },
    {
        image: paj,
        header: 'PAJ (React.js | Node.js | MongoDB | Team Developed)',
        meta: 'Project Assistance Journal',
        description: <a href='https://github.com/ak89mkii/PAJ' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://paj-03-project-hi-nu.herokuapp.com/',
    },
    {
        image: repbucket,
        header: 'RepBucket (Python 3 | Django | PostgeSQL)',
        meta: 'Goals and Skills Tracker',
        description: <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank" rel="noopener noreferrer"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://repbucket-04.herokuapp.com/',
    },
]

{/* Front-End Projects. */}
const items2 = [
    {
        image: war,
        header: 'War Card Game',
        meta: 'A War playing card variant with a retro game theme.', 
        description: <a href='https://github.com/ak89mkii/war-project-01' target="_blank"><Button attached='bottom' icon='github' color='black'><Icon name='github' />GitHub</Button></a>,
        href: 'https://war-were-declared-4.surge.sh/',
    },
    {
        image: dicedex,
        header: 'DiceDex: Tabletop Game Group Database ',
        meta: 'www.dicedex.io',
        href: 'https://www.aikasem.com/',
    },
    {
        image: paj,
        header: 'Sam Rose Salon',
        meta: 'www.samrosesalon.com',
        href: 'https://www.aikasem.com/',
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

            {/* Full-Stack Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h1 className={props.mode}><Icon name='server' />Full-Stack Applications</h1>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items1} />
                </Grid.Row>
            </Grid>

            {/* Front-End Projects. */}
            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <h1 className={props.mode}><Icon name='code' />Front-End Applications</h1>
                </Grid.Row>
            </Grid>

            <Grid stackable centered itemsPerRow={1}>
                <Grid.Row>
                    <Card.Group centered items={items2} />
                </Grid.Row>
            </Grid>

            <Grid>
            <Grid.Column computer={14}>
            <Card.Group itemsPerRow={2} stackable>

                {/* Card 01 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>War Card Game</h1>(Front-End, JavaScript)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={war} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='http://war-were-declared-4.surge.sh/' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/war-project-01' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Front-End, JavaScript) | A War playing card variant with a retro game theme.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>N/A</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>surge.sh</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
                    
                {/* Card 02 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>DiceDex: Tabletop Tracker</h1>(RESTful, CRD, Express.js)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={dicedex} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                                <a href='https://tabletop-tracker-project-117.herokuapp.com/users' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (RESTful, CRD, Express.js) | DiceDex is an application that enables groups of users to create shared tabletop libraries, wishlists, as well as leave comments on a message board.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Node.js | Express.js | MongoDB (Database) | Mongoose</p>
                                <p><h4>Authentication:</h4>Google OAuth</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
                                
                {/* Card 03 */}
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>PAJ: Project Manager</h1>(Team Project, RESTful, CRUD, MERN Stack)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={paj} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                                <a href='https://paj-03-project-hi-nu.herokuapp.com/' target="_blank">                                
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/PAJ' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (Team Project, RESTful, CRUD, MERN Stack) | PAJ, the Project Assistance Journal, is a platform that enables users to add and monitor their project progressions as well facilitating collaborative efforts.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | React.js | Semantic UI React (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Node.js | Express.js | MongoDB (Database)</p>
                                <p><h4>Authentication:</h4>Authentication</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 04 */}  
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>RepBucket: Goals Tracker</h1>(MVC, CRUD, Django)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={repbucket} size='large' wrapped ui={false} />
                        </div>
                            <h3>
                                <a href='https://repbucket-04.herokuapp.com/' target="_blank">
                                <Button size='large' color='yellow'>
                                    <Icon size='large' name='power off'/>View Project
                                </Button> 
                                </a>
                                <br></br>
                                <br></br>
                                <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank">
                                <Button size='large' color='black'>
                                    <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                                </Button> 
                                </a>
                            </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3> (MVC, CRUD, Django) | RepBucket is a platform that "gamifies" the tracking and highlighting of achievements, activities, skills, hobbies, and goals. From the mundane to monumental, goals are your "Quests", which can be found in your "Quest Journal". Your skills and hobbies are represented as skills on your "Talent Tree".</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Django | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Django | PostgreSQL (Database)</p>
                                <p><h4>Authentication:</h4>Django Built-in Auth</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 05 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>Codec Story: A Text Adventure</h1>(Back-End, Flask)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={codecstory} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='https://codecu.herokuapp.com/' target="_blank">
                            <Button size='large' color='yellow'>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/codecu' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Back-End, Flask) | Codec Story is a text adventure game where players make decisions, branching and progressing the story. Choose wisely, not every decision will result in success. (Character Image Placeholders Used) </p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Flask | Gunicorn</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>Heroku</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 06 */}  
                <Card centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>iContextuall: Twilio SMS GUI</h1>(Template | Guide)</p>
                        </Item.Header>
                        <Divider/>
                        <div className='photo'>
                            <Item.Image src={icontextuall} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='https://ak89mkii.medium.com/build-a-simple-gui-for-twilio-sms-using-flask-not-deployment-ready-785e1df2e8a0' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name="medium icon"/>View Article
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/iContextuall' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Template | Guide) | A basic browser-based GUI template for the Twilio SMS Python platform. You must add your own credentials (account_sid, auth_token, phone number, etc.). Links to the Twilio docs and other references are linked below. code . NOT DEPLOY READY.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | Bootstrap (CSS Framework)</p>
                                <p><h4>Back-End:</h4>Python 3 | Flask | Twilio Python (Helper Library)</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>N/A</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 07 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>EX-Life Tracker</h1>(Front-End, React.js)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={ex} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='http://www.ex-health-tracker.surge.sh' target="_blank">
                            <Button size='large' color='yellow'>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/ex-life-tracker' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Front-End, React.js) | A stats tracker application for a specific tabletop game.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | JavaScript (ES2018) | React.js | Semantic UI React (CSS Framework)</p>
                                <p><h4>Back-End:</h4>N/A</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>surge.sh</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 08 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>IG 9000</h1>(Back-End, Flask, gTTS, PyAudio)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={ig} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            {/* <a href='' target="_blank"> */}
                            <Button size='large' color='yellow' disabled>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            {/* </a> */}
                            <br></br>
                            <br></br>
                            <a href='http://holo-hud.surge.sh/' target="_blank">
                            <Button size='large' color='linkedin'>
                                <Icon size='large' name='linkedin'/>View Article
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/ig-9000' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Back-End, Flask, gTTS, PyAudio) | A voice recognition and natural speech (Google Text-to-Speech) programmable response virtual assistant with GUI.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3</p>
                                <p><h4>Back-End:</h4>Flask</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>localhost</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 09 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>Holo-HUD</h1>(Front-End, React.js, Raspberry Pi 4, Holographic Display)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={holo} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='http://holo-hud.surge.sh/' target="_blank">
                            <Button size='large' color='yellow'>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://www.linkedin.com/pulse/speech-recognition-program-holographic-display-project-kasem/' target="_blank">
                            <Button size='large' color='linkedin'>
                                <Icon size='large' name='linkedin'/>View Article
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/holo-hud' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square' inverted color='grey'/>Github Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Front-End, React.js, Raspberry Pi 4, Raspberry Pi OS, Holographic Display) | A home built holographic display with a custom web-based HUD.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | React.js</p>
                                <p><h4>Back-End:</h4>N/A</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>surge.sh</p>
                        </Item.Description>
                    </Card.Content>
                </Card>

                {/* Card 10 */}
                <Card fluid centered size='large' stackable>
                    <Card.Content>
                        <Item.Header><p className='card'><h1>Donation Counter</h1>(Front-End, React.js)</p>
                        </Item.Header>
                        <Divider />
                        <div className='photo'>
                            <Item.Image src={counter} size='large' wrapped ui={false} />
                        </div>
                        <h3>
                            <a href='http://fidgetkicounter.surge.sh/' target="_blank">
                            <Button size='large' color='yellow'>
                                <Icon size='large' name='power off'/>View Project
                            </Button> 
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://github.com/ak89mkii/donate-counter' target="_blank">
                            <Button size='large' color='black'>
                                <Icon size='large' name='github square'/>GitHub Repo
                            </Button> 
                            </a>
                        </h3>
                        <Divider/>
                        <Item.Description>
                            <p><h3>Description:</h3>(Front-End, React.js) | A counter application designed to improve the donation responsibility counting process for a specific entrepreneurial venture.</p>
                            <h3>- Technologies Used -</h3>
                                <p><h4>Front-End:</h4>HTML5 | CSS3 | React.js | Semantic UI React (CSS Framework)</p>
                                <p><h4>Back-End:</h4>N/A</p>
                                <p><h4>Authentication:</h4>N/A</p>
                                <p><h4>Version Control:</h4>Git | GitHub</p>
                                <p><h4>Deployment:</h4>surge.sh</p>
                        </Item.Description>
                    </Card.Content>
                </Card>
                    
            </Card.Group>
            </Grid.Column>
            </Grid>
            <br></br>
            <br></br>
            <Grid centered>
                <iframe frameborder="0" src="https://itch.io/embed/1110852" width="552" height="167"><a href="https://a-i-chasm-games.itch.io/bug-buster">Bug Buster by a_i_chasm_games</a></iframe>
            </Grid>
            <br></br>
            <br></br>
            <Grid centered>
                <a href='https://github.com/ak89mkii/bug-buster' target="_blank">
                <Button size='large' color='black'>
                    <Icon size='large' name='github square'/>GitHub Repo
                </Button>
                </a>
            </Grid>
            
            <br></br>
            <br></br>
        </div>
    )
}

export default Project