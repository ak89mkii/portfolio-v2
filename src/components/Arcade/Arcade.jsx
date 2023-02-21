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
  setJS = () => this.setState({ opponentImage: js, opponentName: 'JavaScript', opponentDescription: 'Scripting Language' })
  setEX = () => this.setState({ opponentImage: ex, opponentName: 'Express' })
  setFlask = () => this.setState({ opponentImage: flask, opponentName: 'Flask' })
  // setJS = () => this.setState({ opponentImage: js, opponentName: 'JavaScript' })
  // setJS = () => this.setState({ opponentImage: js, opponentName: 'JavaScript' })

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
                <Card.Header>Alex I. Kasem</Card.Header>
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
              <Card link raised image={js} onClick={this.setJS}/>
              <Card link raised image={ex} onClick={this.setEX}/>
              <Card link raised image={flask} onClick={this.setFlask}/>
              <Card link raised image={js} onClick={this.setJS}/>
              <Card link raised image={js} onClick={this.setJS}/>
              <Card raised image={js} />
              <Card raised image={js} />
              <Card raised image={js} />
              <Card raised image={js} />
              <Card raised image={js} />
              <Card raised image={js} />
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