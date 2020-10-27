import React from 'react'
import { Image } from 'semantic-ui-react'
import Profile from '../../Img/profile.jpeg'

const Intro = () => {
    return (
        <div>
            <Image
              bordered
              centered
              size='medium'
              src={Profile}
            />
             <h1>Alexander I. Kasem</h1>
             <h3>Full Stack Software Engineer</h3>
             <br></br>
             <br></br>
        </div>
    )
}

export default Intro