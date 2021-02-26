import React from 'react'
import { Header, Icon, Image, Card, Button, Divider, Grid, Item, Message, Segment } from 'semantic-ui-react'
import './Project.css'
import war from '../../Img/war.png'
import dicedex from '../../Img/dicedex.png'
import paj from '../../Img/paj.png'
import repbucket from '../../Img/repbucket.png'


const Project = () => {
    return (
        <div>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='file code' />
                Projects
              </Header>
            </Divider>

            
            <Item.Group>
            <Grid columns={2} divided>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>    
                        
                        <Card centered size='large' stackable>
                            <Card.Content>
                                <Item.Image src={war} size='large' wrapped ui={false} />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card centered size='large'>
                            <Card.Content>
                                <Item.Header>War Card Game (Front-End)</Item.Header>
                                <Item.Description>
                                    <p>A War playing card variant with a retro game theme.</p>
                                    <h4>Technologies Used:</h4>
                                        <p>- HTML5</p>
                                        <p>- CSS3</p>
                                        <p>- JavaScript</p>
                                        <p>- Bootstrap</p>
                                </Item.Description>
                                    <h3>
                                        <a href='http://war-were-declared-4.surge.sh/' target="_blank">
                                        <Button size='large' color='yellow'>
                                            <Icon size='large' name='power off'/>View Project
                                        </Button> 
                                        </a>
                                        <br></br>
                                        <br></br>
                                        <a href='https://github.com/ak89mkii/war-project-01' target="_blank">
                                        <Button size='large'>
                                            <Icon size='large' name='github square'/>Github Repo
                                        </Button> 
                                        </a>
                                    </h3>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
               
            {/* <Card centered>
                <Image src={dicedex} wrapped ui={false} />
                <Card.Content>
                <Card.Header>DiceDex: Tabletop Tracker</Card.Header>
                (RESTful, CRD) 
                <p>DiceDex is an application that enables groups of users to create shared tabletop libraries, wishlists, as well as leave comments on a message board.</p>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Mongoose JS</li>
                        <li>Bootstrap</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </ul>
                </Card.Description>
                    <h3>
                        <a href='https://tabletop-tracker-project-117.herokuapp.com/users' target="_blank">
                        <Button size='large' color='yellow'>
                            <Icon size='large' name='power off'/>View Project
                        </Button> 
                        </a>
                        <br></br>
                        <br></br>
                        <a href='https://github.com/ak89mkii/tabletop-tracker-project-01' target="_blank">
                        <Button size='large'>
                            <Icon size='large' name='github square'/>Github Repo
                        </Button> 
                        </a>
                    </h3>
                </Card.Content>
            </Card>

            </div>
            <div className="column">

            <Card centered>
                <Image src={paj} wrapped ui={false} />
                <Card.Content>
                <Card.Header>PAJ: Project Manager</Card.Header>
                (Team Project, MERN) 
                <p>PAJ, the Project Assistance Journal, is a platform that enables users to add and monitor their project progressions as well facilitating collaborative efforts.</p>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Semantic UI React</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </ul>
                </Card.Description>
                    <h3>
                        <a href='https://paj-03-project-hi-nu.herokuapp.com/' target="_blank">
                        <Button size='large' color='yellow'>
                            <Icon size='large' name='power off'/>View Project
                        </Button> 
                        </a>
                        <br></br>
                        <br></br>
                        <a href='https://github.com/ak89mkii/PAJ' target="_blank">
                        <Button size='large'>
                            <Icon size='large' name='github square'/>Github Repo
                        </Button> 
                        </a>
                    </h3>
                </Card.Content>
            </Card>
            
            </div>
            <div className="column">

            <Card centered>
                <Image src={repbucket} wrapped ui={false} />
                <Card.Content>
                <Card.Header>RepBucket: Goals Tracker</Card.Header>
                (CRUD) 
                <p>RepBucket is a platform that "gamifies" the tracking and highlighting of achievements, activities, skills, hobbies, and goals. From the mundane to monumental, goals are your "Quests", which can be found in your "Quest Journal". Your skills and hobbies are represented as skills on your "Talent Tree". Level them up as you see fit.</p>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Python 3</li>
                        <li>Django</li>
                        <li>PostgreSQL</li>
                        <li>Bootstrap</li>
                        <br></br>
                        <br></br>
                    </ul>
                </Card.Description>
                    <h3>
                        <a href='https://repbucket-04.herokuapp.com/' target="_blank">
                        <Button size='large' color='yellow'>
                            <Icon size='large' name='power off'/>View Project
                        </Button> 
                        </a>
                        <br></br>
                        <br></br>
                        <a href='https://github.com/ak89mkii/Repbucket-project-04' target="_blank">
                        <Button size='large'>
                            <Icon size='large' name='github square'/>Github Repo
                        </Button> 
                        </a>
                    </h3>
                </Card.Content>
            </Card> */}
            
            
            </Grid.Row>
            </Grid>
            </Item.Group>
            
            <br></br>
            <br></br>
        </div>
    )
}

export default Project