import logo from './logo.svg';
import '../src/css/Skills.css';
import React from 'react'
import img from './Good_Image.jpeg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

class App extends React.Component{
    render(){
        const myStyle = {
        display: 'flex',
        flexDirection: 'row'
        };
        const AbtContent={
           marginLeft:"5rem",
            marginRight: "2rem",
           height: "100px",
            width: "250px"
        };
        return (
            <div>
            <h1 style={{marginLeft: "28rem", marginTop: "2rem"}}> Sreenikhil Kollu </h1>
            <p style={{marginLeft: "30rem"}}> I build softwares </p>
                <hr style={{marginLeft: "5rem", marginRight: "5rem"}}/>
                <div style={myStyle}>
                    <div >
                        <h3 style={{marginLeft: "5rem"}}> About Me </h3>
                        <div style={AbtContent}>
                        <p> I have been a computer science student for 7 years.
                            I would love to solve challenging problems.
                            I have done an internship in summer 2020 as a backend developer. I have been working
                            for center for analytics as a python developer for 2 years. My focus is mainly towards
                            contributing to the team that develops a software which will have impact on million lives.
                        </p>
                            </div>
                        </div>
                    <img src={img} style={{marginRight: "2rem"}} height="275" width="250"/>
                    <div>
                        <h3> Details </h3>
                        <p><b>Email:</b> </p>
                        <p style={{marginTop:"-1rem"}}> sreenkollu@gmail.com</p>
                        <p style={{marginTop: "-1rem"}}> <b>Phone:</b> </p>
                        <p style={{marginTop:"-1rem"}}> +1 (203) 889-6289 </p>
                        <LinkedInIcon style={{marginTop:"-1rem"}}/>
                        <GitHubIcon style={{marginTop:"-1rem", marginLeft: "1rem"}}/>
                    </div>
                    </div>
                </div>
        )
    }
}


export default App;

/*
The whole wireframe of the website

*/