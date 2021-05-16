import React, { Component } from 'react'
import { Header, Icon, Segment, List, Card, Divider, Button } from 'semantic-ui-react'
import Resume from '../../Img/resume02.PDF'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Contact extends Component {
    state = {
      value: 'code@pondermint.com',
      copied: false,
    };
  
    render() {
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
                        <List.Header>Email Address:<p>code@pondermint.com</p><p>        {this.state.copied ? <span style={{color: 'black'}}>- COPIED TO CLIPBOARD -</span> : null}</p></List.Header>
                        <CopyToClipboard text={this.state.value}
                            onCopy={() => this.setState({copied: true})}>
                            <Button floated='right' icon color='red'>
                                <Icon name='mail' color='white' />
                            </Button>
                        </CopyToClipboard>
                        code@pondermint.com
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header>LinkedIn:</List.Header>
                        <a href='https://www.linkedin.com/in/alexander-kasem-950479105/' target="_blank">
                        <Button floated='right' color='linkedin' icon>
                            <Icon name='linkedin' />
                        </Button>
                        </a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header>Github:</List.Header>
                        <a href='https://github.com/ak89mkii' target="_blank">
                        <Button floated='right' color='black' icon>
                            <Icon name='github' />
                        </Button>
                        </a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header>Download Resume:</List.Header>
                        <a href={Resume} download>
                        <Button floated='right' color='grey' icon>
                            <Icon name='file pdf outline' />
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
}

export default Contact