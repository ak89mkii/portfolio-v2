import React from 'react'
import { Header, Icon, Image, Card, Button, Divider, Grid } from 'semantic-ui-react'
import './Project.css'
import war from '../../Img/war.png'
import dicedex from '../../Img/dicedex.png'

const Project = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='file code' />
                Projects
              </Header>
            </Divider>

            <div className='grid'>
            <Grid centered>
            <Grid.Row centered columns={4}>
            <Grid.Column>

            <Card>
                <Image src={war} size='small' wrapped ui={false} />
                <Card.Content>
                <Card.Header>War Card Game</Card.Header>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
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

            </Grid.Column>
            <Grid.Column>

            <Card>
                <Image src={dicedex} wrapped ui={false} />
                <Card.Content>
                <Card.Header>DiceDex: Tabletop Game Tracker</Card.Header>
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

            </Grid.Column>
            <Grid.Column>

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>PAJ: The Project Assistance Journal</Card.Header>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Semantic UI</li>
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
            
            </Grid.Column>
            <Grid.Column>

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                <Card.Header>RepBucket: Skills and Objectives Tracker</Card.Header>
                <Card.Description>
                    Technologies Used:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Python 3</li>
                        <li>Django</li>
                        <li>PostgreSQL</li>
                        <li>Bootstrap</li>
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

            </Grid.Column>
            </Grid.Row>
            </Grid>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Project