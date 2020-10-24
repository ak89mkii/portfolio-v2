import React from 'react'
import { Header, Icon, Segment, List, Card, Divider, Button } from 'semantic-ui-react'


const Contact = () => {
    return (
        <div>
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
                    <a href='mailto:code@pondermint.com'>
                    <Button floated='right' icon color='red'>
                        <Icon name='mail' color='white' />
                    </Button>
                    </a>
                    code@pondermint.com
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
                    <a href='https://github.com/ak89mkii'>
                    <Button floated='right' color='black' icon>
                        <Icon name='github' />
                    </Button>
                    </a>
                    </List.Content>
                </List.Item>
                </List>
            </Segment>
            </Card>
            <br></br>
            <br></br>
        </div>
    )
}

export default Contact