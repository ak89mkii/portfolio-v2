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

            {/* Row 01*/}
            <Item.Group>
            <Grid columns={2} divided stackable>
                <Grid.Row verticalAlign='middle'>
                    
                    <Grid.Column>   
                        <Card fluid centered size='large' stackable>
                            <Card.Content>
                                <Item.Image src={war} size='large' wrapped ui={false} />
                                <Divider/>
                                <Item.Header>War Card Game (Front-End)</Item.Header>
                                <Item.Description>
                                    <p>A War playing card variant with a retro game theme.</p>
                                    <h4>Technologies Used:</h4>
                                        <p>- HTML5</p>
                                        <p>- CSS3</p>
                                        <p>- JavaScript</p>
                                        <p>- Bootstrap</p>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
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
                    
                    <Grid.Column> 
                    <Card fluid centered size='large' stackable>
                            <Card.Content>
                                <Item.Image src={dicedex} size='large' wrapped ui={false} />
                                <Divider/>
                                <Item.Header>DiceDex: Tabletop Tracker(RESTful, CRD)
                                </Item.Header>
                                <Item.Description>
                                    <p>DiceDex is an application that enables groups of users to create shared tabletop libraries, wishlists, as well as leave comments on a message board.</p>
                                    <h4>Technologies Used:</h4>
                                        <p>- HTML5</p>
                                        <p>- CSS3</p>
                                        <p>- Express.js</p>
                                        <p>- Node.js</p>
                                        <p>- MongoDB</p>
                                        <p>- Mongoose JS</p>
                                        <p>- Bootstrap</p>
                                </Item.Description>
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Item.Group>

            {/* Row 02 */}
            <Item.Group>
            <Grid columns={2} divided stackable>
                <Grid.Row verticalAlign='middle'>
                    
                    <Grid.Column>   
                        <Card fluid centered size='large' stackable>
                            <Card.Content>
                                <Item.Image src={paj} size='large' wrapped ui={false} />
                                <Divider/>
                                <Item.Header>PAJ: Project Manager (Team Project, MERN)</Item.Header>
                                <Item.Description>
                                    <p>PAJ, the Project Assistance Journal, is a platform that enables users to add and monitor their project progressions as well facilitating collaborative efforts.</p>
                                    <h4>Technologies Used:</h4>
                                        <p>- HTML5</p>
                                        <p>- CSS3</p>
                                        <p>- React.js</p>
                                        <p>- Express.js</p>
                                        <p>- Node.js</p>
                                        <p>- MongoDB</p>
                                        <p>- Semantic UI React</p>
                                </Item.Description>
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
                    </Grid.Column>
                    
                    <Grid.Column> 
                    <Card fluid centered size='large' stackable>
                            <Card.Content>
                                <Item.Image src={repbucket} size='large' wrapped ui={false} />
                                <Divider/>
                                <Item.Header>DiceDex: Tabletop Tracker(RESTful, CRD)
                                </Item.Header>
                                <Item.Description>
                                    <p>RepBucket is a platform that "gamifies" the tracking and highlighting of achievements, activities, skills, hobbies, and goals. From the mundane to monumental, goals are your "Quests", which can be found in your "Quest Journal". Your skills and hobbies are represented as skills on your "Talent Tree". </p>
                                    <h4>Technologies Used:</h4>
                                        <p>- HTML5</p>
                                        <p>- CSS3</p>
                                        <p>- Python 3</p>
                                        <p>- Django</p>
                                        <p>- PostgreSQL</p>
                                        <p>- Bootstrap</p>
                                        <br></br>
                                </Item.Description>
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
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Item.Group>
            
            <br></br>
            <br></br>
        </div>
    )
}

export default Project