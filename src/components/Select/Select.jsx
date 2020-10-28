import React from 'react'
import { Image, Icon, Grid } from 'semantic-ui-react'
import Fight from '../../Img/fight.png'
import './Select.css'

const Select = (props) => {
    return (
        <div>
          <Image
            bordered
            centered
            src={Fight}
          />
         <br></br>
         <br></br>
    </div>
    )
}

export default Select