import React from 'react'
import { Header, Icon, List, Menu, Message, Divider } from 'semantic-ui-react'


const Interest = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='info' />
                Interests
              </Header>
            </Divider>
            <List size='large' as='ul'>
                <List.Item as='li'>3D Printing:</List.Item>
                <p>I am a 3D printing hobbyist as well as a side hustle level entrepreneur. </p>
                <List.Item as='li'>Drone Operator:</List.Item>
                <List.Item as='li'>Apples</List.Item>
                <List.Item as='li'>Apples</List.Item>
            </List> 
        </div>
    )
}

export default Interest