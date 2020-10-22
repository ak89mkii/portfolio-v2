import React from 'react'
import { Header, Icon, Image, Menu, Message, Divider } from 'semantic-ui-react'


const Interest = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h4'>
                <Icon name='info' />
                Interests
              </Header>
            </Divider>
            
        </div>
    )
}

export default Interest