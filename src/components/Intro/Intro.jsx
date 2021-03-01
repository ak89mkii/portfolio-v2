import React from 'react'
import '../../App.css'
import { Image, Button, Grid } from 'semantic-ui-react'
import Profile from '../../Img/profile.jpeg'

const Intro = () => {
    return (
        <div>
            <Image
              bordered
              centered
              rounded
              size='medium'
              src={Profile}
            />
            <Grid centered columns={1}>
            <Grid.Column mobile={16} tablet={8} computer={8}>
            <div className="name">
                <h1>Alexander I. Kasem</h1>
                <h3>Full Stack Software Engineer</h3>
            </div>
            </Grid.Column>
            </Grid>
             <br></br>
             <br></br>
        </div>
    )
}

export default Intro