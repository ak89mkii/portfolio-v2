import React from 'react'
import { Header, Grid, Image, Icon, Container, Divider } from 'semantic-ui-react'
import './Statment.css'


const Statment = (props) => {
    return (
        <div className='iconPad'>
            <Divider horizontal>
              <h1 className={props.mode}>
                {/* <Icon name='left quote' /> */}
                {/* Mission Statement */}
                <Icon name="info"></Icon>About
              </h1>
            </Divider>
            <br></br>
            <br></br>
            <Grid>
            <Grid.Column>
            {/* <Container text className={props.mission} size='huge'content='As a software engineer, I have worked on numerous web-based projects, on both the front-end as well as the back-end, building accessible, user-friendly, and mobile responsive web applications. Having worked with a range of technologies, my core competencies would include HTML5, CSS3, JavaScript (ES2018), React.js, Django, Bootstrap, and Git, with GitHub, version control.'/>
            <br></br>
            <Container text className={props.mission} size='huge'content='I have experience in entrepreneurial development, product development / design, as well as tabletop game design. I have honed my teamwork skills
            through the military and research acumen while earning a bachelors of science degree in applied psychology. Having participated in an exchange student program in South Korea, I am comfortable traveling as well as culturally adaptable. I endeavor to become a more seasoned software engineer by continuing to learn new concepts as well as iterating upon what I already know.' /> */}
            <Container text className={props.mission} size='huge'content='As a software developer, I have worked on numerous web-based projects, on both the front-end as well as the back-end, building user-friendly and mobile responsive web applications. Having worked with a range of technologies, my core competencies would include HTML5, CSS3, JavaScript (ES2018), React.js, Django, PostgreSQL database, Bootstrap, and Git, with GitHub, version control.'/>
            <br></br>
            <Container text className={props.mission} size='huge'content='As an IT solutions professional, I have had many customer-facing duties to include engaging with them to understand their technical needs, using that information to design and implement effective solutions, and providing remote or on-site technical support as a go-to subject matter expert. As far as technical skills, I have experience maintaining computer and server hardware, enterprise software, and operating systems, as well as endpoint monitoring, basic networking, technical documentation, ticket management, and admin.'/>
            <br></br>
            <Container text className={props.mission} size='huge'content='Between my experiences developing software, working in IT operations, and serving in the military, I am well practiced at managing projects and objectives, while working as part of a team. Having participated in an exchange student program in South Korea, I am comfortable traveling as well as culturally adaptable.'/>
            </Grid.Column>
            </Grid>
            <br></br>
            <br></br>
        </div>
    )
}

export default Statment