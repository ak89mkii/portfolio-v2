import React from 'react'
import { Header, Icon, List, Image, Grid, Divider, Container } from 'semantic-ui-react'
import './Interest.css'


const Interest = (props) => {
    return (
        <div>
            <Divider horizontal>
              <h1 className={props.mode}>
                <Icon name='id badge outline' />
                About
              </h1>
            </Divider>
            <h2>Programming and...</h2>
            <br></br>
            <br></br>
            {/* <Container> */}
            <Grid stackable columns={3}>
                    <Grid.Row>
                        <Grid.Column>

                        <Image src='https://thinger.rocks/3dmodels.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>3D Printing</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        <Image src='https://media.giphy.com/media/vfZ7EwPyLnnRm/giphy.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>Drone Flight</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        <Image src='https://i.pinimg.com/originals/48/1f/64/481f64d751427db0e7f10c9bc2cd2701.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>Boarding</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        
                        </Grid.Column>
                        <Grid.Column>

                        <Image src='https://i.pinimg.com/originals/a1/86/c6/a186c6dfe00b207433a45a2c4d47a84e.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>Gamer</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        <Image src='https://cdn.dribbble.com/users/2245526/screenshots/4476814/chemex-animation_loop.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>Coffee</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        <Image src='https://cdn.dribbble.com/users/623144/screenshots/2077826/process-concept_dribbble.gif' height='100px' verticalAlign='middle' />{' '}
                        <h3>Sci-Tech</h3>
                        <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                        <Divider />

                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            {/* </Container> */}
            <br></br>
            <br></br>
        </div>
        
    )
}

export default Interest