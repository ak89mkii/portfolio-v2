import React from 'react'
import { Header, Icon, List, Image, Grid, Divider, Container } from 'semantic-ui-react'
import './Interest.css'


const Interest = (props) => {
    return (
        <div>
            <Container>
            <Divider horizontal>
              <h1 className={props.mode}>
                <Icon name='id badge outline' />
                About
              </h1>
            </Divider>
            </Container>
            
            <h2>Programming and...</h2>
            <br></br>
            <br></br>
            {/* <Container> */}
            <Grid stackable columns={3}>
                    <Grid.Row>
                        <Grid.Column>

                            <Container>
                                <Image src='https://thinger.rocks/3dmodels.gif' height='100px' verticalAlign='middle' />{' '}
                                <h3>3D Printing</h3>
                                <span>I am a 3D printing hobbyist as well as a side hustle level entrepreneur (charitable for-profit).</span>
                                <Divider />

                                {/* <Image src='https://media.giphy.com/media/vfZ7EwPyLnnRm/giphy.gif' height='100px' verticalAlign='middle' />{' '}
                                <h3>Drone Flight</h3>
                                <span>After working on a drone shot film shoot, I got into the hobby of flying drones. The drone I currently fly is the MJX BUGS 4W.</span>
                                <Divider /> */}

                                <Image src='https://projects-static.raspberrypi.org/projects/raspberry-pi-setting-up/0d6033edf45ad2d4185ed05d6cd9a01e2f803034/en/images/pi-plug-in.gif' height='100px' verticalAlign='middle' />{' '}
                                <h3>Raspberry Pi and PC Modifications</h3>
                                <span>I enjoy experimenting with and learn about how to utilize and customize Linux and Windows operated hardware.</span>
                                <Divider />

                                <Image src='https://64.media.tumblr.com/f0931e0667883bc7ba7fb112fe3cd312/tumblr_inline_p7kn1wHOwT1sgzopb_500.gifv' height='100px' verticalAlign='middle' />{' '}
                                <h3>Learning Korean and Japanese Language</h3>
                                <span>I am currently casually learning both the Korean and Japanese languages. They are both "subject-object-verb" languages, so hopefully that helps simplify the process of learning them at the same time somewhat.</span>
                                <Divider />

                                {/* <Image src='https://i.pinimg.com/originals/48/1f/64/481f64d751427db0e7f10c9bc2cd2701.gif' height='100px' verticalAlign='middle' />{' '}
                                <h3>Boarding</h3>
                                <span>I enjoy snowboarding and skateboading, though I am a bit better at the former than the latter. I intend on getting a One Wheel at some point.</span>
                                <Divider /> */}
                            </Container>

                        </Grid.Column>
                        <Grid.Column>

                        <Container>
                            <Image src='https://i.pinimg.com/originals/a1/86/c6/a186c6dfe00b207433a45a2c4d47a84e.gif' height='100px' verticalAlign='middle' />{' '}
                            <h3>Gamer</h3>
                            <span>I am a tabletop game design hobbyist as well as an active tabletop and video game player.</span>
                            <Divider />

                            <Image src='https://cdn.dribbble.com/users/2245526/screenshots/4476814/chemex-animation_loop.gif' height='100px' verticalAlign='middle' />{' '}
                            <h3>Coffee</h3>
                            <span>Coffee, black. One of my favorite beverages. Using a Chemex is one of my preferred methods of brewing good coffee.</span>
                            <Divider />

                            <Image src='https://cdn.dribbble.com/users/623144/screenshots/2077826/process-concept_dribbble.gif' height='100px' verticalAlign='middle' />{' '}
                            <h3>Sci-Tech</h3>
                            <span>I have a strong interest in the understanding of how things work, learning about scientific discoveries, as well as emerging technologies.</span>
                            <Divider />
                        </Container>

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