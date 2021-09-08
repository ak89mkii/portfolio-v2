import React, { Component, createRef } from 'react'
import '../../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Sticky, Menu, Segment, Divider } from 'semantic-ui-react'

class NavBar extends Component {
    state = {
        activeItem: 'Mission',
        on: false,
        sound: false,
        onMusic: false
    }

    contextRef = createRef()

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleToggle = () => {
        this.setState({
        on: !this.state.on,
        sound: !this.state.sound
        })
    }

    handleToggle02 = () => {
        this.setState({
        sound: !this.state.sound
        })
    }

    render() {
      const { activeItem } = this.state
        return (
            <div>
                <br></br>
                <div>
                <Segment inverted>
                <Menu
                className='menu'
                inverted
                pointing
                secondary
                size='large'
                attached='top'
                // stackable
                >
                    <a href='#mission'>
                    <Menu.Item
                    name='Mission'
                    // active={activeItem === 'Mission'}
                    onClick={this.handleItemClick}
                    />
                    </a>
                    <a href='#projects'>
                    <Menu.Item
                    name='Projects'
                    // active={activeItem === 'Projects'}
                    onClick={this.handleItemClick}
                    />
                    </a>
                    <a href='#skills'>
                    <Menu.Item
                    name='Skills'
                    // active={activeItem === 'Skills'}
                    onClick={this.handleItemClick}
                    />
                    </a>
                    <a href='#interests'>
                    <Menu.Item
                    name='Interests'
                    // active={activeItem === 'Interests'}
                    onClick={this.handleItemClick}
                    />
                    </a>
                    <a href='#contact'>
                    <Menu.Item
                    name='Contact'
                    // active={activeItem === 'Contact'}
                    onClick={this.handleItemClick}
                    />
                    </a>
                    </Menu>
                </Segment>
                </div>
            </div>
        )
    }
}

export default NavBar;

