import React from "react"
import { useState, useEffect } from 'react';
import "./Data.css"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CRUD () {
    const API_URL = 'https://64f3c773932537f40519fc39.mockapi.io/Users/Users'
    const [game, setGame] = useState([{
        game_title: 'Ratchet and Clank',
        developer: 'Insomniac',
        release: 'November 4, 2002'
    }])
    
    const [newGameTitle, setNewGameTitle] = useState('')
    const [newDeveloper, setNewDeveloper] = useState('')
    const [newReleaseDate, setNewReleaseDate] = useState('')
    
    const [updatedGameTitle, setUpdatedGameTitle] = useState('')
    const [updatedDeveloper, setUpdatedDeveloper] =  useState('')
    const [updatedReleaseDate, setUpdatedReleaseDate] = useState('')
    
    function getGames() {
        fetch(API_URL)
        .then(data => data.json())
        .then(data => setGame(data))
    }
    
    useEffect(() => {
        getGames()
    }, [])
    
    function deleteGame(id) {
        fetch(`${API_URL}/${id}`,{ 
        method: "DELETE"})
        .then(() => getGames())
    }
    
    function updateGame(e, gameObject) {
        e.preventDefault()
    
        let updatedGameObject = {
            ...gameObject,
            game_title: updatedGameTitle,
            developer: updatedDeveloper,
            release: updatedReleaseDate
        }
        fetch(`${API_URL}/${gameObject.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedGameObject)
        }).then(() => getGames())
    }
    
    function postNewGame(e) {
        e.preventDefault() 
        
        fetch(`${API_URL}` ,{  
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            game_title: newGameTitle,
            developer: newDeveloper,
            release: newReleaseDate
        })
    }).then(() => getGames())
    }
    
    return(
        <Container className=" rounded bg-light">
        <div>
            <Form className="mb-5">
                <h3 className='text-center mt-2'>POST NEW GAME</h3>

                <Form.Label id="label" >Game Title</Form.Label>
                <Form.Control onChange={(e) => setNewGameTitle(e.target.value)} placeholder='Input here:'></Form.Control>

                <Form.Label id="label" >Developer</Form.Label>
                <Form.Control onChange={(e) => setNewDeveloper(e.target.value)} placeholder='Input here:'></Form.Control>

                <Form.Label id="label" >Release Date</Form.Label>
                <Form.Control onChange={(e) => setNewReleaseDate(e.target.value)} placeholder='Input here:'></Form.Control>

                <Button variant="outline-primary" className="mt-2 form-control" onClick={(e) => postNewGame(e)}>POST</Button>
            </Form>
            {game.map((game, index) => (
                <div key = {index}>
                   
                    <Card className="mb-5">
                        <Card.Title id="info-card">Game {`${game.id}`}</Card.Title>
                        <Card.Text>
                        <strong id="info-card"> Game Title: </strong> {game.game_title} <br></br>
                        <strong id="info-card"> Developer:</strong> {game.developer} <br></br>
                        <strong id="info-card"> Release Date: </strong>{game.release} <br></br>
                        </Card.Text>

                        <Card.Footer className="bg-white"> 
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header >CRUD operations</Accordion.Header>
                                <Accordion.Body classname="bg-light">
                                    <Form className='card-body' key={index}>
                                        <h4>Update This Game:</h4>
                                        <div className="row">
                                        <Form.Label className='col m-2'>Change Title:
                                        <Form.Control className='col m-2' onChange={(e) => setUpdatedGameTitle(e.target.value)}></Form.Control></Form.Label>
                    
                                        <Form.Label className='col m-2'>Change Developer:
                                        <Form.Control className='m-2' onChange={(e) => setUpdatedDeveloper(e.target.value)}></Form.Control></Form.Label>
                    
                                        <Form.Label className='col m-2'>Change Release:
                                        <Form.Control className='col m-2' onChange={(e) => setUpdatedReleaseDate(e.target.value)}></Form.Control></Form.Label>
                                        <Button className='col btn btn-primary' onClick={(e) => updateGame(e, game)}>UPDATE</Button> 
                                        </div>
                                    
                                        <Button onClick={() => deleteGame(game.id)} className='mr-5 btn btn-danger'>🗑DELETE GAME🗑</Button>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Card.Footer>
                    </Card>
                    </div> 
                    
        ))}
        </div>
        </Container>
    )
    
    }
    export default CRUD