import React from 'react'
import { Header, Icon, Image, Card, Button, Divider, Grid } from 'semantic-ui-react'
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

            <div className='UserList-grid'>
            <Grid centered stackable columns={1}>
            <Grid.Row centered columns={4}>
            <div className="column">

            
            <Card centered>
                <Image src={war} size='small' wrapped ui={false} />
                <Card.Content>
                <Card.Header>War Card Game</Card.Header>
                (Front-End) 
                <p>A War playing card variant with a retro game theme.</p>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <br></br>
                        <br></br>
                        <br></br>
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
                        <a href='https://github.com/ak89mkii/war-project-01'>
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
                        <a href='https://github.com/ak89mkii/tabletop-tracker-project-01'>
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
                        <li>Semantic UI</li>
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
                        <a href='https://github.com/ak89mkii/PAJ'>
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
                        <a href='https://github.com/ak89mkii/Repbucket-project-04'>
                        <Button size='large'>
                            <Icon size='large' name='github square'/>Github Repo
                        </Button> 
                        </a>
                    </h3>
                </Card.Content>
            </Card>
           

            </div>
            </Grid.Row>
            </Grid>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Project