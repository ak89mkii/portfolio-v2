import React, {Component} from 'react'
import { Card, Grid, Container, Image, Icon, Item, Divider } from 'semantic-ui-react'
import './Arcade.css'
import '../../App.css'
import js from './Img/js.png'
import html from './Img/html.png'
import ex from './Img/ex.png'
import flask from './Img/flask.png'
import engineer from './Img/engineer.png'
import tree from './Img/tree.png'

class Arcade extends Component {
  state = {
    opponentImage: '',
    opponentName: '',
    opponentDescription: ''
  }

  setHTML = () => this.setState({ opponentImage: html, opponentName: 'HTML5', opponentDescription: 'Markup Language' })
  setCSS = () => this.setState({ opponentImage: flask, opponentName: 'CSS3', opponentDescription: 'Cascading Style Sheet'  })
  setJS = () => this.setState({ opponentImage: js, opponentName: 'JavaScript', opponentDescription: 'Scripting Language' })
  setReact = () => this.setState({ opponentImage: flask, opponentName: 'React.js', opponentDescription: 'JavaScript Library'  })
  setPython = () => this.setState({ opponentImage: flask, opponentName: 'Python 3', opponentDescription: 'Scripting Language'  })
  setDjango = () => this.setState({ opponentImage: flask, opponentName: 'Django', opponentDescription: 'Python Framework'  })
  setDjangoRS = () => this.setState({ opponentImage: flask, opponentName: 'Django REST Framework', opponentDescription: 'Python Framework'  })
  setPostgreSQL = () => this.setState({ opponentImage: flask, opponentName: 'PostgreSQL', opponentDescription: 'Relational Database'  })
  setBootstrap = () => this.setState({ opponentImage: flask, opponentName: 'Bootstrap', opponentDescription: 'Front-End Framework'  })
  setSemanticUI = () => this.setState({ opponentImage: flask, opponentName: 'Semantic UI React', opponentDescription: 'Front-End Framework'  })
  setGit = () => this.setState({ opponentImage: flask, opponentName: 'Git', opponentDescription: 'Version Control'  })
  setGitHub = () => this.setState({ opponentImage: flask, opponentName: 'GitHub', opponentDescription: 'Version Control Hosting'  })
  setHeroku = () => this.setState({ opponentImage: flask, opponentName: 'Heroku', opponentDescription: 'Web Hosting Service'  })
  setNode = () => this.setState({ opponentImage: flask, opponentName: 'Node.js', opponentDescription: 'Back-End JavaScript'  })
  setEX = () => this.setState({ opponentImage: ex, opponentName: 'Express.js',opponentDescription: 'Node.js Framework' })
  setFlask = () => this.setState({ opponentImage: flask, opponentName: 'Flask', opponentDescription: 'Python Micro Framework'  })
  setMongoDB = () => this.setState({ opponentImage: flask, opponentName: 'MongoDB', opponentDescription: 'Document Database'  })
  setCoffee = () => this.setState({ opponentImage: flask, opponentName: 'Coffee', opponentDescription: 'The Beverage'  })

  render() {
    return (
      <div className='background'>
        <Container>
        <br></br>
        <br></br>
        <Grid columns='equal'>
          <Grid.Row stretched>

          <Grid.Column>
            <h1 className='blink'>1P</h1>
            <Card>
              <Image src={engineer} wrapped ui={false} />
              <Card.Content>
                <Card.Header><p className='test'>Alex I. Kasem</p></Card.Header>
                <Divider></Divider>
                <Card.Description>
                  Software Engineer
                </Card.Description>
              </Card.Content>
            </Card>          
          </Grid.Column>

          <Grid.Column  width={8}><Image src={tree} className='code'/></Grid.Column>

          <Grid.Column>
            <h1 className='blink2'>2P</h1>
            <Card>
              <Image src={this.state.opponentImage} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.state.opponentName}</Card.Header>
                <Divider></Divider>
                <Card.Description>
                  {this.state.opponentDescription}
                </Card.Description>
              </Card.Content>
            </Card>          
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column  width={8}>
            <Card.Group itemsPerRow={6}>
              <Card link raised image={html} onClick={this.setHTML}/>
              <Card link raised image={js} onClick={this.setCSS}/>
              <Card link raised image={js} onClick={this.setJS}/>
              <Card link raised image={js} onClick={this.setReact}/>
              <Card link raised image={js} onClick={this.setPython}/>
              <Card link raised image={js} onClick={this.setDjango}/>
              <Card link raised image={js} onClick={this.setDjangoRS}/>
              <Card link raised image={js} onClick={this.setPostgreSQL}/>
              <Card link raised image={js} onClick={this.setBootstrap}/>
              <Card link raised image={js} onClick={this.setSemanticUI}/>
              <Card link raised image={js} onClick={this.setGit}/>
              <Card link raised image={js} onClick={this.setGitHub}/>
              <Card link raised image={js} onClick={this.setHeroku}/>
              <Card link raised image={js} onClick={this.setNode}/>
              <Card link raised image={ex} onClick={this.setEX}/>
              <Card link raised image={flask} onClick={this.setFlask}/>
              <Card link raised image={js} onClick={this.setMongoDB}/>
              <Card link raised image={js} onClick={this.setCoffee}/>
            </Card.Group>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <br></br>
        <br></br>
        </Container>
      </div>
    )
  }
}

export default Arcade;