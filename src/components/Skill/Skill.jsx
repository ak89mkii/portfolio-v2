import React from 'react'
import { Divider, Icon, Header, Grid, List, Item } from 'semantic-ui-react'
import '../../App.css'

const items = [
  {
      childKey: 0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIgjPSZVyidiZeGS2pqXl9eFLkHNVim5bvF6FTUTYuy3K55w8LPTns8kvk0nWExDG9UQ&usqp=CAU',
      header: <h2 className='left'>Core Competencies:</h2>,
      description: <div><p>The technologies and laguages that I am best with.</p><p>JavaScript (ES2018) | HTML5 | CSS3 | React.js | Semantic UI React | Python 3 | Git | GitHub (Version Control)</p><Icon name='js' size='huge' color='yellow'/><Icon name='html5' size='huge' color='red'/><Icon name='css3 alternate' size='huge' color='blue'/><Icon name='react' size='huge' color='blue'/><Icon name='python' size='huge' color='black'/><Icon name='github' size='huge' color='black'/></div>
      ,
  },
  {
      childKey: 1,
      image: 'https://pbs.twimg.com/profile_images/749981640609398784/-amtsDMY_400x400.jpg',
      header: <h2 className='left'>Familiar Technologies:</h2>,
      description: <div><p>The technologies and languages that I am familiar with.</p><p>Node.js | Express.js | Django | Flask | MongoDB | PostgreSQL | Boostrap | C# | Unity Engine</p><img height='70px' src='https://images.tute.io/tute/topic/express-js.png'/><img height='70px' src='https://miro.medium.com/max/1200/1*1OBwwxzJksMv0YDD-XmyBw.png'/><img margin='10px' height='70px' src='https://www.pngfind.com/pngs/m/104-1044449_python-logo-clipart-drawing-flask-python-hd-png.png'/><img height='70px' src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png'/><img height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'/><img height='70px' src='https://freepikpsd.com/media/2019/10/bootstrap-logo-png-1-Transparent-Images-Free.png'/><img margin='10px' height='70px' src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'/></div>,
  },
  {
      childKey: 2,
      image: 'https://www.kindpng.com/picc/m/35-350705_skill-icon-png-logo-for-resume-skill-transparent.png',
      header: <h2 className='left'>Core Competencies:</h2>,
      description: <div><p>Critical Thinking:</p><p>Research:</p><p>Teamwork:</p><p>Continuous Learner:</p></div>,
  },
]

const Skill = (props) => {
  return (
    <div>
      <Divider horizontal>
        <Header as='h2'>
          <Icon name='cogs' />
            Skills
        </Header>
      </Divider>
      <br></br>
      <br></br>
        <Item.Group divided items={items} />
      <br></br>
      <br></br>
    </div>
  )
}

export default Skill