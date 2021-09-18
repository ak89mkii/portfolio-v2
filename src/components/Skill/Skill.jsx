import React from 'react'
import { Divider, Icon, Header, Grid, List, Item } from 'semantic-ui-react'

const items = [
  {
      childKey: 0,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
      header: 'Core Competencies:',
      description: <div><p>JavaScript (ES2018) | HTML5 | CSS3 | React.js | Semantic UI React | Python 3 | Git | GitHub (Version Control)</p><Icon name='js' size='huge' color='yellow'/><Icon name='html5' size='huge' color='red'/><Icon name='css3 alternate' size='huge' color='blue'/><Icon name='react' size='huge' color='blue'/><Icon name='python' size='huge' color='black'/><Icon name='github' size='huge' color='black'/></div>
      ,
      meta: 'The technologies that I am best with.',
  },
  {
      childKey: 1,
      image: 'https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png',
      header: 'Tech Used Before:',
      description: <div><p>Node.js | Express.js | Django | Flask | MongoDB | PostgreSQL | Boostrap | C# | Unity Engine</p><img height='70px' src='https://pbs.twimg.com/profile_images/749981640609398784/-amtsDMY_400x400.jpg'/><img height='70px' src='https://images.tute.io/tute/topic/express-js.png'/><img height='70px' src='https://miro.medium.com/max/1200/1*1OBwwxzJksMv0YDD-XmyBw.png'/><img margin='10px' height='70px' src='https://www.pngfind.com/pngs/m/104-1044449_python-logo-clipart-drawing-flask-python-hd-png.png'/><img height='70px' src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png'/><img height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'/><img height='70px' src='https://freepikpsd.com/media/2019/10/bootstrap-logo-png-1-Transparent-Images-Free.png'/><img margin='10px' height='70px' src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'/></div>,
      meta: 'The technologies and languages that I am familiar with.',
  },
  {
      childKey: 2,
      image: 'https://www.kindpng.com/picc/m/35-350705_skill-icon-png-logo-for-resume-skill-transparent.png',
      header: 'Soft Skills',
      description: 'Sylist Angela has over 25 years of experience. She specializes in color and is very educated in the Scruples hair color lines. Angela is constantly educating herself to stay up to date with the latest trends in the beauty industry. You are in excellent hands.',
      meta: 'Hair Stylist | Colorist (Scruples Hair Color Lines)',
  },
]

const Skill = () => {
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

      <Grid>
      <Grid.Column mobile={16} tablet={20} computer={10}>
      {/* <Segment placeholder> */}
                <Grid columns={2} stackable textAlign='center'>
                    {/* <Divider vertical></Divider> */}
                    {/* <Grid.Row verticalAlign='middle'>
                        <Grid.Column> */}

                        <Item.Group divided items={items} />

                        {/* </Grid.Column>
                        <Grid.Column>
                        <Item.Group divided items={items} />
                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            {/* </Segment> */}
            <br></br>
            <Grid centered>
              <Icon name='html5' size='huge'/>
              <Icon name='css3 alternate' size='huge'/>
              <Icon name='js' size='huge'/>
              <Icon name='react' size='huge'/>
              <Icon name='python' size='huge'/>
              <Icon name='github' size='huge'/>
              <Icon name='node' size='huge'/>
            </Grid>

      </Grid.Column>
      </Grid>
        <br></br>
        <br></br>
      </div>
    )
}

export default Skill