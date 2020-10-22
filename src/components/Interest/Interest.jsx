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
                <p>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for profit). </p>
                <List.Item as='li'>Drone Flight:</List.Item>
                <p>I recently got into the hobby of flying drones. I drone I currently fly is the MJX BUGS 4W. </p>
                <List.Item as='li'>Boarding:</List.Item>
                <p>I enjoy snowboarding and skateboading, though I am a bit better at the former than the latter. </p>
                <List.Item as='li'>Gamer:</List.Item>
                <p>I am a tabletop game design hobbyist as well as an active tabletop and video game player. </p>
                <List.Item as='li'>Coffee:</List.Item>
                <p>One of my favorite beverages, I tend to favor drinking coffee without anything added to it. Using a Chemex is one of my preferred methods of brewing good coffee.  </p>
                <List.Item as='li'>Sci-Tech:</List.Item>
                <p>I have a strong interest in the understanding of how things work, learning about scientific discoveries, as well as emerging technologies. </p>
            </List> 
        </div>
    )
}

export default Interest