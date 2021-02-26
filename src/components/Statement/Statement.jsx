import React from 'react'
import { Header, Grid, Image, Menu, Message, Divider } from 'semantic-ui-react'
import './Statment.css'


const Statment = () => {
    return (
        <div>
            <Divider horizontal>
              <Header as='h2'>
                {/* <Icon name='left quote' /> */}
                Mission Statement
              </Header>
            </Divider>
            <Grid>
            <Grid.Column width={14}>
            <Message className='mission' size='huge'content='As a software engineer, I endeavor to work on projects that require a synergy of logic, analytical methodologies, and creativity. I have experience in entrepreneurial development, product development / design, as well as tabletop game design. I have honed my leadership skills through the military and research acumen while earning a bachelors of science degree in applied psychology.
            
            I endeavor to become a seasoned software engineer by continuing to learn new concepts as well as iterating upon what I already know. ' /> 
            </Grid.Column>
            </Grid>
            <br></br>
            <br></br>
        </div>
    )
}

export default Statment