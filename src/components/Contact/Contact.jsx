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
            <Segment inverted>
                <List divided inverted relaxed>
                <List.Item>
                    <List.Content>
                    <List.Header>Email Address:</List.Header>
                    aikasem@gmail.com
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                    <List.Header></List.Header>
                    <a href='https://www.linkedin.com/in/alexander-kasem-950479105/'>
                    <Button color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    </a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                    <List.Header></List.Header>
                    <a href='https://www.linkedin.com/in/alexander-kasem-950479105/'>
                    <Button color='github'>
                        <Icon name='github' /> GitHub
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