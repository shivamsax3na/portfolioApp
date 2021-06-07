import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function About() {
    return (
        <div style={{
            
        }}>

        <Card className="bg-light text-white" >
        <Card.Img src="https://image.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg" style={{ maxHeight:'20rem' }} alt="Card image" />
            <Card.ImgOverlay>
                <center>
                    <Card.Title className="p-2 display-5">About Me!</Card.Title>
                        <Card.Text>
                           <i> <strong> Apart from the skills I've mentioned <br />
                            let's see what others have to say about me </strong></i>
                        </Card.Text>
                    <Card.Text></Card.Text>
                </center>
            </Card.ImgOverlay>
        </Card>

        <br /><br />
        <div className="container row ">
        
        <Card style={{ width: '22rem', justifyContent: 'space-around', margin: '2rem' }} className="col-md-4">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br /><br />
        <Card style={{ width: '22rem', justifyContent: 'space-around', margin: '2rem' }} className="col-md-4">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <br /><br />
        <Card style={{ width: '22rem', justifyContent: 'space-around', margin: '2rem' }} className="col-md-4">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        </div>
        </div>
    )
}
