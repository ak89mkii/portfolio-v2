import React from 'react'
// import '../../App.css'
import { Image, Card, Grid } from 'semantic-ui-react'
import Profile from '../../Img/photo.jpeg'

const Intro = (props) => {
    return (
        <div>
            <Grid centered columns={1}>
                <Grid.Column>
                    <div className={props.photo}>
                    <Card
                        className='text'
                        image={Profile}
                        header='Alex Kasem'
                        description='Software Engineer'
                    />
                    </div>
                </Grid.Column>
            </Grid>
             <br></br>
             <br></br>
        </div>
    )
}

export default Intro