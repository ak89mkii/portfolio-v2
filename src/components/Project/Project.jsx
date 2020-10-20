import React from 'react'
import { Header, Icon, Image, Card, Button, Divider } from 'semantic-ui-react'

const Project = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='file code' />
                Projects
              </Header>
            </Divider>

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
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
                   
                    <Button link='https://github.com/ak89mkii/war-project-01' size='large'><Icon size='large' name='github square'/>Github Repo</Button> 
                       
                    
                    </h3>
                    
                </Card.Content>
            </Card>

            
        </div>
    )
}

export default Project