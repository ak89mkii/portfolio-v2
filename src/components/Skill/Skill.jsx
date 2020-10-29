import React from 'react'
import { Divider, Icon, Header, Grid, List, Segment } from 'semantic-ui-react'

const Skill = () => {
    return (
      <div>
       <Divider horizontal>
        <Header as='h2'>
          <Icon name='certificate' />
            Skills
        </Header>
      </Divider>

      <Segment placeholder >
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical></Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>

                        <List size='large' as='ul'>
                            <List.Item as='li'>Critical Thinking:</List.Item>
                            <p>As a novice tabletop game designer,inventor, and entrepreneur, I gravitate towards situations that require deep thought, critical thinking, and problem solving. </p>
                            <List.Item as='li'>Teamwork:</List.Item>
                            <p>Having served in the military, I have an extensive amount of experience working as part of a team, where most siturations demanded a collective effort in order to persevere. </p>
                        </List>

                        </Grid.Column>
                        <Grid.Column>

                        <List size='large' as='ul'>
                            <List.Item as='li'>Researcher:</List.Item>
                            <p>Having majored in applied psychology during college, I have much research experience. I am particulary fond of investigating emerging technologies.  </p>
                            <List.Item as='li'>Continuous Learner:</List.Item>
                            <p>An Army platoon Sergeant once told me that "you don't stop learning until the day you die", and that concept resonated with me. I am drawn by situations that allow me to learn and improve.  </p>
                        </List> 

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
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
        <br></br>
        <br></br>
      </div>
    )
}

export default Skill