import React from 'react'
import { Header, Icon, Segment, List, Card, Divider, Button } from 'semantic-ui-react'


const Contact = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='id card' />
                Contact Information
              </Header>
            </Divider>
           
            <Card centered>
            <Segment>
                <List divided relaxed>
                <List.Item>
                    <List.Content>
                    <List.Header>Email Address:</List.Header>
                    <a href='mailto:aikasem@gmail.com'>
                    <Button floated='right' icon color='red'>
                        <Icon name='mail' color='white' />
                    </Button>
                    </a>
                    aikasem@gmail.com
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                    <List.Header>LinkedIn:</List.Header>
                    <a href='https://www.linkedin.com/in/alexander-kasem-950479105/'>
                    <Button floated='right' color='linkedin' icon>
                        <Icon name='linkedin' />
                    </Button>
                    </a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                    <List.Header>Github:</List.Header>
                    <a href='https://www.linkedin.com/in/alexander-kasem-950479105/'>
                    <Button floated='right' color='black' icon>
                        <Icon name='github' />
                    </Button>
                    </a>
                    </List.Content>
                </List.Item>
                </List>
            </Segment>
            </Card>
        </div>
    )
}

export default Contact