import React from 'react'
import { Divider, Icon, Container, Grid, List, Item } from 'semantic-ui-react'
import '../../App.css'
import js from './Img/js.png'
import html from './Img/html.png'
import ex from './Img/ex.png'
import flask from './Img/flask.png'

const items = [
  {
      childKey: 0,
      image: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
      header: <h2 className='left'>Core Competencies:</h2>,
      description: <div><p>The technologies and languages that I am best with.</p><p> React.js | JavaScript (ES2018) | HTML5 | CSS3 | Django | Bootstrap | Semantic UI React | Python 3 | Git | GitHub (Version Control) | VS Code</p>
      
        <img className='iconPad' height='70px' src={js}/>
        
        <img className='iconPad' height='70px' src={html}/>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'/>
        
        <img className='iconPad' height='70px' src='https://miro.medium.com/max/1200/1*1OBwwxzJksMv0YDD-XmyBw.png'/>

        <img className='iconPad' height='70px' src='https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png'/>

        <img className='iconPad' height='70px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIgjPSZVyidiZeGS2pqXl9eFLkHNVim5bvF6FTUTYuy3K55w8LPTns8kvk0nWExDG9UQ&usqp=CAU'/>
        
        <img className='iconPad' height='70px' src='https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png'/>
        
        <img className='iconPad' height='70px' src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'/>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png'/>
        
      </div>,
  },
  {
      childKey: 1,
      image: 'https://pbs.twimg.com/profile_images/749981640609398784/-amtsDMY_400x400.jpg',
      header: <h2 className='left'>Familiar Technologies:</h2>,
      description: <div><p>The technologies and languages that I am familiar with.</p><p>Node.js | Express.js | Flask | MongoDB | PostgreSQL | C# (with Unity Engine) | Google OAuth | Heroku</p>

        <img className='iconPad' height='70px' src={ex}/>
                
        <img className='iconPad' margin='10px' height='70px' src={flask}/>
        
        <img className='iconPad' height='70px' src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png'/>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'/>
                
        <img className='iconPad' height='70px' src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'/>
        
        <img className='iconPad' height='70px' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'/>
        
        <img className='iconPad' height='70px' src='https://icon-library.com/images/heroku-icon/heroku-icon-28.jpg'/>
        
      </div>,
  },
  {
      childKey: 2,
      image: 'https://www.kindpng.com/picc/m/35-350705_skill-icon-png-logo-for-resume-skill-transparent.png',
      header: <h2 className='left'>Other Skills:</h2>,
      description: <div><p>Experience from the military, college education, designing board games, inventing, and interest in sci-tech.</p><p>Critical Thinker | Adobe Photoshop | Jira | ClickUp | Researcher | Teamwork | Continuous Learner</p>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png'/>

        <img className='iconPad' height='70px' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png'/>

        <img className='iconPad' height='70px' src='https://logos.prod-v1.vertice.one/cf2806f5-280c-55c0-8306-4ca61ef546f6.svg'/>

      </div>,
  },
]

const Skill = (props) => {
  return (
    <div className='iconPad'>
      <Container>
      <Divider horizontal>
        <h1 className={props.mode} as='h2'>
          <Icon name='cogs' />
          Skills
        </h1>
      </Divider>
      <br></br>
      <br></br>
        <Item.Group divided items={items} />
      <br></br>
      <br></br>
      </Container>
    </div>
  )
}

export default Skill