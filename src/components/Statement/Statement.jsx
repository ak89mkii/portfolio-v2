import React from 'react'
import { Header, Icon, Image, Menu, Message, Divider } from 'semantic-ui-react'


const Statment = () => {
    return (
        <div className='CircleSelector'>
            <Divider horizontal>
              <Header as='h4'>
                <Icon name='left quote' />
                Mission Statement
              </Header>
            </Divider>
            <Message floating content='As a software engineer, I endeavor to work on projects that require a synergy of logic, analytical methodologies, and creativity. I have experience in entrepreneurial development, product development / design, as well as tabletop game design. I have honed my leadership skills through the military and research acumen while earning a bachelors of science degree in applied psychology.
            
            I endeavor to become a seasoned software engineer by continuing to learn new concepts as well as iterating upon what I already know. ' /> 
        </div>
    )
}

export default Statment