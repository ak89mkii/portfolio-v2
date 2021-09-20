import React from 'react'
import { Header, Icon, List, Image, Grid, Divider, Container } from 'semantic-ui-react'
import './Interest.css'


const Interest = () => {
    return (
        <div>
            <Divider horizontal>
              <Header as='h2'>
                <Icon name='id card' />
                About
              </Header>
            </Divider>
            <h2>Programming and...</h2>
            <br></br>
            <br></br>
            <Container>
            <Grid>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>

                        <Image src='https://i.pcmag.com/imagery/reviews/00Q32ax18cABlHYpnsLzXMP-3..1569478331.jpg' size='tiny' verticalAlign='middle' />{' '}
                        <h3>3D Printing</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <br></br>
            <br></br>
        </div>
        
    )
}

export default Interest