import React, { Component, createRef } from 'react'
import '../../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Grid, Sticky, Menu, Segment, Divider } from 'semantic-ui-react'

class Footer extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Divider />
                    <div className='copyright'>Copyright &#169; Alexander I. Kasem 2020-2023</div>
                <br></br>
            </div>
        )
    }
}

export default Footer;