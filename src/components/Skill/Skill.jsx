import React from 'react'
import { Divider, Icon, Container, Grid, List, Item } from 'semantic-ui-react'
import '../../App.css'
import js from './Img/js.png'
import html from './Img/html.png'
import ex from './Img/ex.png'
import flask from './Img/flask.png'
import jira from './Img/jira.png'

const items = [
  {
      childKey: 0,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
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
        
        {/* <img className='iconPad' height='70px' src='https://image.pngaaa.com/927/94927-middle.png'/> */}
        <img className='iconPad' height='70px' src='        https://cdn.icon-icons.com/icons2/2699/PNG/512/github_logo_icon_169115.png'/>
        
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
      header: <h2 className='left'>Information Technology | Other Skills:</h2>,
      description: <div><p>Developing adjacent skills and experience from IT support, the military, college education, designing board games, inventing, and interest in sci-tech.</p><p>Microsoft 365 Admin |  Active Directory | NinjaOne Endpoint Management | IT Glue Documentation | Acronis Cloud Backup | Kaseya Autotask Ticketing | Jira | ClickUp | Shopify | WordPress | Networking | Critical Thinker | Researcher | Teamwork | Continuous Learner</p>
        
        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1862px-Microsoft_365_%282022%29.svg.png'/>

        <img className='iconPad' height='70px' src='https://play-lh.googleusercontent.com/TQTAk_y60GyAd1KP4poeNN6fgzV4ThpHkBW68AvgfojbANS-J7kgORY775K_BeHwPT0'/>

        <img className='iconPad' height='70px' src='https://play-lh.googleusercontent.com/X-8kj8DfJYY0SnLfWfXPUnMo5Q1Q8BaHE6f5tw-ATMpSgUMVmj18vXz1lZWxmgpTrcE'/>

        <img className='iconPad' height='70px' src='https://seeklogo.com/images/A/acronis-logo-BEE0B1DAA5-seeklogo.com.png'/>

        <img className='iconPad' height='70px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVf-Cbxe97TUKyNitdW7GH924EcbawVryEg&s'/>

        <img className='iconPad' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png'/>

        <img className='iconPad' height='70px' src={jira}/>

        <img className='iconPad' height='70px' src='https://logos.prod-v1.vertice.one/cf2806f5-280c-55c0-8306-4ca61ef546f6.svg'/>

        <img className='iconPad' height='70px' src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png'/>

        <img className='iconPad' height='70px' src='https://cdn-icons-png.flaticon.com/512/174/174881.png'/>

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