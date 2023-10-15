import React from "react"
import "./Home.css"
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

export default function Home () {
        return(
        <Container id="Home-container">
        <Card id="Home-card">
        <Card.Title><h2>Home</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">What is this project for?</Card.Subtitle>
        <Card.Text> This is a website that displays randomly generated and user input information from a website called <a href="https://mockapi.io/">mock API</a>.
         This website was made as a final project for my Promineo Tech front end course culminating everything I have learned for the 18 week long course. 
         I am very greatful for eveyones help at Promineo Tech and I want to thank them for this opportunity. <br></br>
         Note: This data is not meant to reflect real games or information but just a showcase of potential.
        </Card.Text>
        <Card.Footer>
            <Card.Text >
                <h5>Technologies Used for project:</h5>
                <ul>
                    <li>React</li>
                    <li>React Bootstrap</li>
                    <li>React Router</li>
                    <li>Bootstrap</li>

                </ul>
                <br></br>
               

                <h5>Languages learned:</h5>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JSX</li>

                </ul>



                
            </Card.Text>
        </Card.Footer>
        </Card>
        </Container>

        )
        
    }