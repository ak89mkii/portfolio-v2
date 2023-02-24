import React, {Component} from 'react'
import { Card, Grid, Container, Image, Icon, Item, Divider } from 'semantic-ui-react'
import './Arcade.css'
import '../../App.css'
import js from './Img/js.png'
import html from './Img/html.png'
import css from './Img/css.png'
import react from './Img/react.png'
import express from './Img/express.png'
import python from './Img/python.png'
import django from './Img/django.png'
import drf from './Img/drf.png'
import psql from './Img/psql.png'
import bootstrap from './Img/bootstrap.png'
import suir from './Img/suir.png'
import git from './Img/git.png'
import github from './Img/github.png'
import heroku from './Img/heroku.png'
import node from './Img/node.png'
import flask from './Img/flask.png'
import engineer from './Img/engineer.png'
import tree from './Img/tree.png'
import mdb from './Img/mdb.png'
import coffee from './Img/coffee.gif'
import ReactHowler from 'react-howler'
import Hover from '../../sounds/hover.wav'
import Choose from '../../sounds/select.mp3'

class Arcade extends Component {
  state = {
    opponentImage: '',
    opponentName: '',
    opponentDescription: '',
    onSound: false,
    onSound2: false,
  }

  setHTML = () => this.setState({ opponentImage: html, opponentName: 'HTML5', opponentDescription: 'Markup Language', onSound: false, onSound2: true })
  
  setCSS = () => this.setState({ opponentImage: css, opponentName: 'CSS3', opponentDescription: 'Cascading Style Sheet', onSound: false, onSound2: true  })
  
  setJS = () => this.setState({ opponentImage: js, opponentName: 'JavaScript', opponentDescription: 'Scripting Language', onSound: false, onSound2: true })
  
  setReact = () => this.setState({ opponentImage: react, opponentName: 'React.js', opponentDescription: 'JavaScript Library', onSound: false, onSound2: true  })
  
  setPython = () => this.setState({ opponentImage: python, opponentName: 'Python 3', opponentDescription: 'Scripting Language', onSound: false, onSound2: true  })
  
  setDjango = () => this.setState({ opponentImage: django, opponentName: 'Django', opponentDescription: 'Python Framework', onSound: false, onSound2: true  })
  
  setDjangoRS = () => this.setState({ opponentImage: drf, opponentName: 'Django REST Framework', opponentDescription: 'Python Framework', onSound: false, onSound2: true  })
  
  setPostgreSQL = () => this.setState({ opponentImage: psql, opponentName: 'PostgreSQL', opponentDescription: 'Relational Database', onSound: false, onSound2: true  })
  
  setBootstrap = () => this.setState({ opponentImage: bootstrap, opponentName: 'Bootstrap', opponentDescription: 'Front-End Framework', onSound: false, onSound2: true  })
  
  setSemanticUI = () => this.setState({ opponentImage: suir, opponentName: 'Semantic UI React', opponentDescription: 'Front-End Framework', onSound: false, onSound2: true  })
  
  setGit = () => this.setState({ opponentImage: git, opponentName: 'Git', opponentDescription: 'Version Control', onSound: false, onSound2: true  })
  
  setGitHub = () => this.setState({ opponentImage: github, opponentName: 'GitHub', opponentDescription: 'Version Control Hosting', onSound: false, onSound2: true  })
  
  setHeroku = () => this.setState({ opponentImage: heroku, opponentName: 'Heroku', opponentDescription: 'Web Hosting Service', onSound: false, onSound2: true  })
  
  setNode = () => this.setState({ opponentImage: node, opponentName: 'Node.js', opponentDescription: 'Back-End JavaScript', onSound: false, onSound2: true  })
  
  setEX = () => this.setState({ opponentImage: express, opponentName: 'Express.js',opponentDescription: 'Node.js Framework', onSound: false, onSound2: true  })
  
  setFlask = () => this.setState({ opponentImage: flask, opponentName: 'Flask', opponentDescription: 'Python Micro Framework', onSound: false, onSound2: true  })
  
  setMongoDB = () => this.setState({ opponentImage: mdb, opponentName: 'MongoDB', opponentDescription: 'Document Database', onSound: false, onSound2: true  })
  
  setCoffee = () => this.setState({ opponentImage: coffee, opponentName: 'Coffee', opponentDescription: 'The Beverage', onSound: false, onSound2: true  })

  render() {
    return (
      <div className='background'>
        {this.state.onSound && (<ReactHowler
          src={Hover}
          playing={true}
        />)}
        {this.state.onSound2 && (<ReactHowler
          src={Choose}
          playing={true}
        />)}
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
              <Card link raised image={html} onClick={this.setHTML} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false , onSound2: false })} />
              <Card link raised image={css} onClick={this.setCSS} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={js} onClick={this.setJS} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={react} onClick={this.setReact} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={python} onClick={this.setPython} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={django} onClick={this.setDjango} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={drf} onClick={this.setDjangoRS} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={psql} onClick={this.setPostgreSQL} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={bootstrap} onClick={this.setBootstrap} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={suir} onClick={this.setSemanticUI} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={git} onClick={this.setGit} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={github} onClick={this.setGitHub} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={heroku} onClick={this.setHeroku} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={node} onClick={this.setNode} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={express} onClick={this.setEX} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={flask} onClick={this.setFlask} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={mdb} onClick={this.setMongoDB} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
              <Card link raised image={coffee} onClick={this.setCoffee} onMouseOver={() => this.setState({ onSound: true })} onMouseOut={() => this.setState({ onSound: false, onSound2: false })} />
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