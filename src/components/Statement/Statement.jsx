import React from 'react'
import { Header, Grid, Image, Menu, Container, Divider } from 'semantic-ui-react'
import './Statment.css'


const Statment = (props) => {
    return (
        <div>
            <Divider horizontal>
              <h1 className={props.mission}>
                {/* <Icon name='left quote' /> */}
                Mission Statement
              </h1>
            </Divider>
            <br></br>
            <br></br>
            <Grid>
            <Grid.Column mobile={16} tablet={20} computer={10}>
            <Container className={props.mission} size='huge'content='As a software engineer, I endeavor to work on projects that require a synergy of logic, analytical methodologies, and creativity. I have experience in entrepreneurial development, product development / design, as well as tabletop game design. I have honed my leadership skills through the military and research acumen while earning a bachelors of science degree in applied psychology.
            
            I endeavor to become a seasoned software engineer by continuing to learn new concepts as well as iterating upon what I already know.'/> 
            </Grid.Column>
            </Grid>
            <br></br>
            <br></br>
        </div>
    )
}

export default Statment