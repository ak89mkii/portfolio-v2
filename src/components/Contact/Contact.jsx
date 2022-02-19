import React, { Component } from 'react'
import { Header, Icon, Segment, List, Card, Divider, Button, TransitionablePortal } from 'semantic-ui-react'
import Resume from '../../Img/resume02.PDF'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Contact extends Component {
    state = {
      value: 'code@pondermint.com',
      copied: false,
      open: false,
    };
  
    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render(props) {
        const { open } = this.state
        return (
            <div>
                {/* <Divider horizontal> */}
                    <h2 className={this.props.mode}>
                        Contact Information
                    </h2>
                {/* </Divider> */}
            
                <Card centered>
                <Segment>
                    <List divided relaxed>
                    <List.Item>
                        <List.Content>
                        <List.Header>Email Address:<p>code@pondermint.com</p></List.Header>
                        <CopyToClipboard text={this.state.value}
                            onCopy={() => this.setState({copied: true})}>
                            <Button floated='right' icon color='yellow' onClick={this.handleClick}>
                                <Icon name='copy' color='black' />
                            </Button>
                        </CopyToClipboard>
                        </List.Content>
                    </List.Item>

                    <TransitionablePortal onClose={this.handleClose} open={open}>
                    <Segment
                        style={{ left: '5%', position: 'fixed', top: '80%', zIndex: 1000 }}
                    >
                        <Header>Email address copied to clipboard.</Header>
                    </Segment>
                    </TransitionablePortal>

                    <List.Item>
                        <List.Content>
                        <List.Header>LinkedIn:</List.Header>
                        <a href='https://www.linkedin.com/in/alexander-kasem/' target="_blank">
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