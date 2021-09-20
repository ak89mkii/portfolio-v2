import React from 'react'
import { Divider, Icon, Header, Grid, List, Item } from 'semantic-ui-react'
import '../../App.css'

const items = [
  {
      childKey: 0,
      image: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
      header: <h2 className='left'>Core Competencies:</h2>,
      description: <div><p>The technologies and laguages that I am best with.</p><p> React.js | JavaScript (ES2018) | HTML5 | CSS3 | Semantic UI React | Python 3 | Git | GitHub (Version Control)</p><img height='70px' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/><img height='70px' src='https://banner2.cleanpng.com/20180802/tpl/kisspng-logo-html5-brand-clip-art-%E6%9D%89-%E5%B1%B1-%E8%89%AF-%E9%9B%84-5b62be01b565d5.334247781533197825743.jpg'/><img margin='10px' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/><img height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'/><img height='70px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIgjPSZVyidiZeGS2pqXl9eFLkHNVim5bvF6FTUTYuy3K55w8LPTns8kvk0nWExDG9UQ&usqp=CAU'/><img height='70px' src='https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png'/><img margin='10px' height='70px' src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'/></div>
      ,
  },
  {
      childKey: 1,
      image: 'https://pbs.twimg.com/profile_images/749981640609398784/-amtsDMY_400x400.jpg',
      header: <h2 className='left'>Familiar Technologies:</h2>,
      description: <div><p>The technologies and languages that I am familiar with.</p><p>Node.js | Express.js | Django | Flask | MongoDB | PostgreSQL | Boostrap | C# (with Unity Engine)</p><img height='70px' src='https://images.tute.io/tute/topic/express-js.png'/><img height='70px' src='https://miro.medium.com/max/1200/1*1OBwwxzJksMv0YDD-XmyBw.png'/><img margin='10px' height='70px' src='https://www.pngfind.com/pngs/m/104-1044449_python-logo-clipart-drawing-flask-python-hd-png.png'/><img height='70px' src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png'/><img height='70px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'/><img height='70px' src='https://freepikpsd.com/media/2019/10/bootstrap-logo-png-1-Transparent-Images-Free.png'/><img margin='10px' height='70px' src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'/></div>,
  },
  {
      childKey: 2,
      image: 'https://www.kindpng.com/picc/m/35-350705_skill-icon-png-logo-for-resume-skill-transparent.png',
      header: <h2 className='left'>Other Skills:</h2>,
      description: <div><p>Experience from the military, college education, designing board games, inventing, and interest in sci-tech.</p><p>Critical Thinker | Researcher | Teamwork | Continuous Learner</p></div>,
  },
]

const Skill = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default Skill